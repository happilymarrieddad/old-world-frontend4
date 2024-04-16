import { ref } from 'vue'
import { defineStore } from 'pinia'
import cookie from 'cookiejs'
import { createPromiseClient } from '@connectrpc/connect'
import { Auth } from '@/gen/proto/auth/auth_connect'
import {
  LoginRequest,
  LoginReply,
  JWTRequest,
  ValidateReply,
  CreateUserRequest
} from '@/gen/proto/auth/auth_pb'
import transport from '@/models/transport'
import { type User } from '@/models/users'
import { ElMessage } from 'element-plus'

const client = createPromiseClient(Auth, transport)

const cookieToken = 'wargamelistbuilder-token'
const cookieUserId = 'wargamelistbuilder-user-id'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false)
  const appToken = cookie.get(cookieToken) as string
  const authenticated = ref(appToken ? true : false)
  const token = ref<string>(appToken ? appToken : '')
  const user = ref<User>()
  const rememberMe = ref(true)

  function setUser(usr: User) {
    user.value = usr
    cookie.set(cookieUserId, `${usr.id}`)
  }

  function setToken(val: string) {
    if (rememberMe.value) {
      cookie.set(cookieToken, val)
    }
    token.value = val
    authenticated.value = val.length > 0
  }

  function getToken(): string {
    return token.value
  }

  function clearToken() {
    cookie.remove(cookieToken)
    token.value = ''
    authenticated.value = false

    user.value = {} as User
  }

  async function login(
    email: string,
    password: string
  ): Promise<[string | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .login(new LoginRequest({ email, password }))
        .then((data) => {
          const reply = data as LoginReply
          setToken(reply.bearer)
          resolve([reply.bearer, undefined])
        })
        .catch((err) => {
          console.table(err)
          resolve([undefined, 'invalid credentials'])
        })
    })
  }

  async function verifyToken(): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .validate(new JWTRequest({ JWT: token.value }))
        .then((data) => {
          const res = data as ValidateReply
          const usr = {
            id: res.user?.id,
            first_name: res.user?.firstName,
            last_name: res.user?.lastName,
            email: res.user?.email
          } as User
          setUser(usr)
          resolve(undefined)
        })
        .catch(() => {
          clearToken()
          ElMessage.error('invalid credentials going to login page')
          resolve('unable to validate token')
        })
    })
  }

  async function createUser(req: CreateUserRequest): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .createUser(req)
        .then(() => {
          return resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to register new user')
        })
    })
  }

  return {
    loading,
    authenticated,
    user,
    verifyToken,
    setUser,
    login,
    setToken,
    getToken,
    clearToken,
    createUser
  }
})
