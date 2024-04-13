import { defineStore } from 'pinia'
import {
  GetUnitTypesRequest,
  GetUnitTypesReply,
  CreateUnitTypeRequest,
  ArmyTypeIdRequest,
  ArmyTypeIdReply,
  GetUnitTypeRequest,
  UpdateUnitTypeRequest
} from '@/gen/proto/unittypes/unit-types-service_pb'
import { V1UnitTypes } from '@/gen/proto/unittypes/unit-types-service_connect'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { useAppStore } from '@/stores/app'
import { DeleteUnitTypeRequest, type UnitType } from '@/gen/proto/unittypes/types_pb'

const client = createPromiseClient(V1UnitTypes, transport)

export const useUnitTypesStore = defineStore('unitTypes', () => {
  const astore = useAppStore()

  async function getUnitTypes(
    armyTypeId: string,
    limit: number,
    page: number
  ): Promise<[UnitType[] | undefined, number | undefined, string | undefined]> {
    console.log('attempting to get unit types')
    return new Promise((resolve) => {
      client
        .getUnitTypes(
          new GetUnitTypesRequest({
            armyTypeId,
            limit: BigInt(limit),
            offset: BigInt(page > 1 ? (page - 1) * limit : 0),
            JWT: astore.getToken()
          })
        )
        .then((data) => {
          const res = data as GetUnitTypesReply
          resolve([res.unitTypes, Number(res.count), undefined])
        })
        .catch((err) => {
          console.table(err)
          resolve([undefined, 0, 'unable to get unit games'])
        })
    })
  }

  async function createUnitType(req: CreateUnitTypeRequest): Promise<string | undefined> {
    return new Promise((resolve) => {
      req.JWT = astore.getToken()
      client
        .createUnitType(req)
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.table(err)
          resolve('unable to create a new unit type')
        })
    })
  }

  async function getUnitTypeNamesFromArmyTypeId(
    armyTypeId: string
  ): Promise<[UnitType[] | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getBasicUnitTypesByArmyTypeID(
          new ArmyTypeIdRequest({ armyTypeId, JWT: astore.getToken() })
        )
        .then((data) => {
          const res = data as ArmyTypeIdReply
          return resolve([res.unitTypes, undefined])
        })
        .catch((err) => {
          console.table(err)
          resolve([undefined, 'unable to get unit type names by army type id'])
        })
    })
  }

  async function getUnitType(id: string): Promise<[UnitType | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getUnitType(new GetUnitTypeRequest({ JWT: astore.getToken(), id }))
        .then((data) => {
          const res = data as UnitType
          resolve([res, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get unit type'])
        })
    })
  }

  async function destroyUnitType(id: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .deleteUnitType(new DeleteUnitTypeRequest({ JWT: astore.getToken(), id }))
        .then(() => resolve(undefined))
        .catch((err) => {
          console.log(err)
          resolve('unable to destroy unit type')
        })
    })
  }

  async function updateUnitType(req: UpdateUnitTypeRequest): Promise<string | undefined> {
    return new Promise((resolve) => {
      req.JWT = astore.getToken()
      client
        .updateUnitType(req)
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to update unit type')
        })
    })
  }

  return {
    getUnitTypes,
    createUnitType,
    getUnitTypeNamesFromArmyTypeId,
    getUnitType,
    destroyUnitType,
    updateUnitType
  }
})
