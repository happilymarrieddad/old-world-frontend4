import { defineStore } from 'pinia'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { V1TroopTypes } from '@/gen/proto/trooptypes/troop-types_connect'
import {
  TroopType,
  GetTroopTypeRequest,
  GetTroopTypesReply,
  GetTroopTypesRequest,
  UpdateTroopTypeRequest
} from '@/gen/proto/trooptypes/troop-types_pb'
import { useAppStore } from '@/stores/app'

const client = createPromiseClient(V1TroopTypes, transport)

export const useTroopTypesStore = defineStore('trooptypes', () => {
  const appStore = useAppStore()

  async function getTroopType(id: string): Promise<[TroopType | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getTroopType(
          new GetTroopTypeRequest({
            JWT: appStore.getToken(),
            id
          })
        )
        .then((data) => {
          resolve([data as TroopType, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get troop type'])
        })
    })
  }

  async function getTroopTypes(
    gameId: string,
    limit: number,
    offset: number
  ): Promise<[TroopType[] | undefined, number, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getTroopTypes(
          new GetTroopTypesRequest({
            JWT: appStore.getToken(),
            gameId,
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetTroopTypesReply
          resolve([res.troopTypes, Number(res.count), undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 0, 'unable to get trooptypes'])
        })
    })
  }

  async function updateTroopType(id: string, name: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .updateTroopType(new UpdateTroopTypeRequest({ id, name, JWT: appStore.getToken() }))
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to get troop type by id')
        })
    })
  }

  return { getTroopTypes, getTroopType, updateTroopType }
})
