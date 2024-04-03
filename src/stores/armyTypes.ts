import { defineStore } from 'pinia'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { V1ArmyTypes } from '@/gen/proto/armytypes/army-types_connect'
import {
  ArmyType,
  GetArmyTypeRequest,
  GetArmyTypesReply,
  GetArmyTypesRequest
} from '@/gen/proto/armytypes/army-types_pb'
import { useAppStore } from '@/stores/app'

const client = createPromiseClient(V1ArmyTypes, transport)

export const useArmyTypesStore = defineStore('armytypes', () => {
  const appStore = useAppStore()

  async function getArmyType(id: string): Promise<[ArmyType | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getArmyType(
          new GetArmyTypeRequest({
            JWT: appStore.getToken(),
            id
          })
        )
        .then((data) => {
          resolve([data as ArmyType, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get army type'])
        })
    })
  }

  async function getArmyTypes(
    gameId: string,
    limit: number,
    offset: number
  ): Promise<[ArmyType[] | undefined, number, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getArmyTypes(
          new GetArmyTypesRequest({
            JWT: appStore.getToken(),
            gameId,
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetArmyTypesReply
          resolve([res.armyTypes, res.armyTypes.length, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 0, 'unable to get armytypes'])
        })
    })
  }

  return { getArmyTypes, getArmyType }
})
