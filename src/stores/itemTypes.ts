import { defineStore } from 'pinia'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { V1ItemTypes } from '@/gen/proto/itemtypes/item-types_connect'
import {
  ItemType,
  GetItemTypeRequest,
  GetItemTypesReply,
  GetItemTypesRequest,
  UpdateItemTypeRequest
} from '@/gen/proto/itemtypes/item-types_pb'
import { useAppStore } from '@/stores/app'

const client = createPromiseClient(V1ItemTypes, transport)

export const useItemTypesStore = defineStore('itemtypes', () => {
  const appStore = useAppStore()

  async function getItemType(id: string): Promise<[ItemType | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getItemType(
          new GetItemTypeRequest({
            JWT: appStore.getToken(),
            id
          })
        )
        .then((data) => {
          resolve([data as ItemType, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get item type'])
        })
    })
  }

  async function getItemTypes(
    gameId: string,
    limit: number,
    offset: number
  ): Promise<[ItemType[] | undefined, number, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getItemTypes(
          new GetItemTypesRequest({
            JWT: appStore.getToken(),
            gameId,
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetItemTypesReply
          resolve([res.itemTypes, res.itemTypes.length, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 0, 'unable to get itemtypes'])
        })
    })
  }

  async function updateItemType(id: string, name: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .updateItemType(new UpdateItemTypeRequest({ id, name, JWT: appStore.getToken() }))
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to get item type by id')
        })
    })
  }

  return { getItemTypes, getItemType, updateItemType }
})
