import { defineStore } from 'pinia'
import { V1UserArmies } from '@/gen/proto/userarmies/armies-service_connect'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { useAppStore } from '@/stores/app'
import {
  GetUserArmiesRequest,
  GetUserArmiesReply,
  CreateUserArmyRequest,
  GetUserArmyRequest,
  GetUserArmyReply,
  AddUnitRequest,
  RemoveUnitRequest,
  UpdateUserArmyRequest,
  CreateUserArmyReply
} from '@/gen/proto/userarmies/armies-service_pb'
import type { UserArmy } from '@/gen/proto/userarmies/armies_pb'

const client = createPromiseClient(V1UserArmies, transport)

export const useUserArmiesStore = defineStore('userArmies', () => {
  const appStore = useAppStore()

  async function getUserArmies(
    limit: number,
    page: number
  ): Promise<[UserArmy[] | undefined, number | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getUserArmies(
          new GetUserArmiesRequest({
            limit: BigInt(limit),
            offset: BigInt(page > 1 ? (page - 1) * limit : 0),
            JWT: appStore.getToken()
          })
        )
        .then((data) => {
          const res = data as GetUserArmiesReply
          resolve([res.userArmies, Number(res.count), undefined])
        })
        .catch((err) => {
          console.table(err)
          resolve([undefined, 0, 'unable to get user armies'])
        })
    })
  }

  async function createUserArmy(
    name: string,
    gameId: string,
    armyTypeId: string,
    points: number
  ): Promise<[UserArmy | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .createUserArmy(
          new CreateUserArmyRequest({
            gameId,
            name,
            armyTypeId,
            points: BigInt(points),
            JWT: appStore.getToken()
          })
        )
        .then((data) => {
          const res = data as CreateUserArmyReply
          resolve([res.userArmy as UserArmy, undefined])
        })
        .catch((err) => {
          console.table(err)
          resolve([undefined, 'unable to create a new user army'])
        })
    })
  }

  async function getUserArmy(id: string): Promise<[UserArmy | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getUserArmy(new GetUserArmyRequest({ id, JWT: appStore.getToken() }))
        .then((data) => {
          const res = data as GetUserArmyReply
          resolve([res.userArmy, undefined])
        })
        .catch((err) => {
          console.table(err)
          resolve([undefined, 'unable to create a new user army'])
        })
    })
  }

  async function addUnitToUserArmy(
    userArmyId: string,
    unitTypeid: string
  ): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .addUnit(
          new AddUnitRequest({
            userArmyId,
            unitTypeid,
            JWT: appStore.getToken()
          })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.table(err)
          resolve('unable to add a unit to the user army')
        })
    })
  }

  async function removeUnitToUserArmy(id: string, userArmyId: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .removeUnit(
          new RemoveUnitRequest({
            userArmyId,
            id,
            JWT: appStore.getToken()
          })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.table(err)
          resolve('unable to remove a unit from the user army')
        })
    })
  }

  async function updateUserArmy(
    id: string,
    name: string,
    points: number
  ): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .updateUserArmy(
          new UpdateUserArmyRequest({
            JWT: appStore.getToken(),
            userArmyId: id,
            name,
            points: BigInt(points)
          })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.table(err)
          resolve('unable to update a user army')
        })
    })
  }

  return {
    getUserArmies,
    createUserArmy,
    getUserArmy,
    addUnitToUserArmy,
    removeUnitToUserArmy,
    updateUserArmy
  }
})
