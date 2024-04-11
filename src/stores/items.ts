import { defineStore } from 'pinia'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { V1Items } from '@/gen/proto/items/items-service_connect'
import { useAppStore } from '@/stores/app'
import { UpdateItem, type Item, CreateArmyItem } from '@/gen/proto/items/types_pb'
import {
  CreateItemRequest,
  GetArmyItemsRequest,
  GetGameItemsRequest,
  GetItemReply,
  GetItemRequest,
  GetItemsReply,
  UpdateItemRequest
} from '@/gen/proto/items/items-service_pb'

const client = createPromiseClient(V1Items, transport)

export const useItemsStore = defineStore('items', () => {
  const appStore = useAppStore()

  async function getItem(
    gameId: string,
    id: string
  ): Promise<[Item | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getItem(
          new GetItemRequest({
            JWT: appStore.getToken(),
            id,
            gameId
          })
        )
        .then((data) => {
          const req = data as GetItemReply
          resolve([req.item, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get item'])
        })
    })
  }

  async function getArmyItems(
    armyTypeId: string,
    limit: number,
    offset: number
  ): Promise<[Item[] | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getArmyItems(
          new GetArmyItemsRequest({
            JWT: appStore.getToken(),
            armyTypeId,
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetItemsReply
          resolve([res.items, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get army items'])
        })
    })
  }

  async function getGameItems(
    gameId: string,
    limit: number,
    offset: number
  ): Promise<[Item[] | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getGameItems(
          new GetGameItemsRequest({
            JWT: appStore.getToken(),
            gameId,
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetItemsReply
          resolve([res.items, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get game items'])
        })
    })
  }

  async function updateItem(itemToUpdate: UpdateItem): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .updateItem(
          new UpdateItemRequest({
            JWT: appStore.getToken(),
            item: itemToUpdate
          })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to update item')
        })
    })
  }

  async function createItem(newItem: CreateArmyItem): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .createItem(
          new CreateItemRequest({
            JWT: appStore.getToken(),
            item: newItem
          })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to create new item')
        })
    })
  }

  return { getItem, getArmyItems, getGameItems, updateItem, createItem }
})
