<script setup lang="ts">
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { CreateUserRequest } from '@/gen/proto/auth/auth_pb'

const appStore = useAppStore()
const router = useRouter()

const { loading } = storeToRefs(appStore)

interface RuleForm {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirm: string
}

const formRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirm: ''
})
const rules = reactive<FormRules<RuleForm>>({
  first_name: [
    { required: true, message: 'Please provide a first name', trigger: 'blur' },
    { min: 2, max: 50, message: 'First name must at least be 2 chars long', trigger: 'blur' }
  ],
  last_name: [
    { required: true, message: 'Please provide a last name', trigger: 'blur' },
    { min: 2, max: 50, message: 'Last name must at least be 2 chars long', trigger: 'blur' }
  ],
  email: [
    { type: 'email', required: true, message: 'Please provide an email', trigger: 'blur' },
    { min: 3, max: 100, message: 'Must be a valid email', trigger: 'blur' }
  ],
  password: [{ required: true, message: 'Please provide a password', trigger: 'blur' }],
  password_confirm: [
    { required: true, message: 'Please provide a password confirm', trigger: 'blur' }
  ]
})

async function register() {
  ElMessage.info('Attempting to register new user...')
  appStore.loading = true
  const err = await appStore.createUser(
    new CreateUserRequest({
      firstName: form.first_name,
      lastName: form.last_name,
      email: form.email,
      password: form.password,
      passwordConfirm: form.password_confirm
    })
  )
  if (err) {
    appStore.loading = false
    ElMessage.error(err as string)
    return
  }

  appStore.loading = false
  ElMessage.success('Successfully registered new user. Please login.')
  router.push(`/login`)
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (fields?.password != fields?.password_confirm) {
        ElMessage.error('passwords must match')
      } else {
        register()
      }
    } else {
      console.log(fields)
      ElMessage.error('invalid form')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div class="register-new-user">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form
            ref="formRef"
            :rules="rules"
            :model="form"
            label-width="auto"
            style="max-height: 600px"
            v-loading="loading"
            status-icon
          >
            <el-form-item label="First Name" prop="first_name">
              <el-input v-model="form.first_name" />
            </el-form-item>
            <el-form-item label="Last Name" prop="last_name">
              <el-input v-model="form.last_name" />
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" type="email" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item label="Password Confirm" prop="password_confirm">
              <el-input v-model="form.password_confirm" type="password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">Create</el-button>
              <el-button @click="resetForm(formRef)">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>
