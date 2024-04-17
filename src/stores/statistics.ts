import { defineStore } from 'pinia'
import { V1Statistics } from '@/gen/proto/statistics/statistics_connect'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { useAppStore } from '@/stores/app'
import {
  CreateStatisticRequest,
  DeleteStatisticRequest,
  GetStatisticRequest,
  GetStatisticsReply,
  GetStatisticsRequest,
  UpdateStatisticRequest,
  type Statistic
} from '@/gen/proto/statistics/statistics_pb'

const client = createPromiseClient(V1Statistics, transport)

export const useStatisticsStore = defineStore('statistics', () => {
  const astore = useAppStore()

  async function getStatistics(
    gameId: string,
    limit: number,
    offset: number
  ): Promise<[Statistic[] | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getStatistics(
          new GetStatisticsRequest({
            JWT: astore.getToken(),
            gameId,
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetStatisticsReply
          resolve([res.statistics, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get statistics'])
        })
    })
  }

  async function getStatistic(id: string): Promise<[Statistic | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getStatistic(
          new GetStatisticRequest({
            JWT: astore.getToken(),
            id
          })
        )
        .then((data) => {
          resolve([data as Statistic, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get statistic'])
        })
    })
  }

  async function updateStatistic(req: UpdateStatisticRequest): Promise<string | undefined> {
    return new Promise((resolve) => {
      req.JWT = astore.getToken()
      client
        .updateStatistic(req)
        .then(() => resolve(undefined))
        .catch((err) => {
          console.log(err)
          resolve('unable to update statistic')
        })
    })
  }

  async function createStatistic(
    name: string,
    display: string,
    gameId: string
  ): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .createStatistic(
          new CreateStatisticRequest({ JWT: astore.getToken(), name, display, gameId })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to create a statistic')
        })
    })
  }

  async function deleteStatistic(id: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .deleteStatistic(
          new DeleteStatisticRequest({
            JWT: astore.getToken(),
            id
          })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to delete a statistic')
        })
    })
  }

  return { getStatistics, getStatistic, updateStatistic, createStatistic, deleteStatistic }
})
