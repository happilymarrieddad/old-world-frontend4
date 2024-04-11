import { defineStore } from 'pinia'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { V1CompositionTypes } from '@/gen/proto/compositiontypes/composition-types_connect'
import {
  CompositionType,
  GetCompositionTypeRequest,
  GetCompositionTypesReply,
  GetCompositionTypesRequest,
  UpdateCompositionTypeRequest
} from '@/gen/proto/compositiontypes/composition-types_pb'
import { useAppStore } from '@/stores/app'

const client = createPromiseClient(V1CompositionTypes, transport)

export const useCompositionTypesStore = defineStore('compositiontypes', () => {
  const appStore = useAppStore()

  async function getCompositionType(
    id: string
  ): Promise<[CompositionType | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getCompositionType(
          new GetCompositionTypeRequest({
            JWT: appStore.getToken(),
            id
          })
        )
        .then((data) => {
          resolve([data as CompositionType, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get composition type'])
        })
    })
  }

  async function getCompositionTypes(
    gameId: string,
    limit: number,
    offset: number
  ): Promise<[CompositionType[] | undefined, number, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getCompositionTypes(
          new GetCompositionTypesRequest({
            JWT: appStore.getToken(),
            gameId,
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetCompositionTypesReply
          resolve([res.compositionTypes, res.compositionTypes.length, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 0, 'unable to get compositiontypes'])
        })
    })
  }

  async function updateCompositionType(id: string, name: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .updateCompositionType(
          new UpdateCompositionTypeRequest({ id, name, JWT: appStore.getToken() })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to get composition type by id')
        })
    })
  }

  return { getCompositionTypes, getCompositionType, updateCompositionType }
})
