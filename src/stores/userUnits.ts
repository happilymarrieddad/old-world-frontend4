import { defineStore } from 'pinia'
import { V1UserArmyUnits } from '@/gen/proto/userarmies/units-service_connect'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { useAppStore } from '@/stores/app'
import {
  GetUnitReply,
  GetUnitRequest,
  UpdateUnitRequest
} from '@/gen/proto/userarmies/units-service_pb'
import type { ArmyUnit } from '@/gen/proto/userarmies/units_pb'

const client = createPromiseClient(V1UserArmyUnits, transport)

export const useUserUnitsStore = defineStore('userUnits', () => {
  const astore = useAppStore()

  async function getUnit(id: string): Promise<[ArmyUnit | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getUnit(new GetUnitRequest({ JWT: astore.getToken(), id }))
        .then((data) => {
          const res = data as GetUnitReply
          resolve([res.unit, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get user army unit'])
        })
    })
  }

  async function updateUnit(opts: UpdateUnitRequest): Promise<string | undefined> {
    return new Promise((resolve) => {
      opts.JWT = astore.getToken()
      client
        .updateUnit(opts)
        .then(() => resolve(undefined))
        .catch((err) => {
          console.log(err)
          resolve('unable to update user unit')
        })
    })
  }

  return { getUnit, updateUnit }
})
