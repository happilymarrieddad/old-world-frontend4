import { defineStore } from 'pinia'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { V1Games } from '@/gen/proto/games/game_connect'
import {
  CreateGameRequest,
  Game,
  GetGameReply,
  GetGameRequest,
  GetGamesReply,
  GetGamesRequest,
  UpdateGameRequest
} from '@/gen/proto/games/game_pb'
import { useAppStore } from '@/stores/app'

const client = createPromiseClient(V1Games, transport)

export const useGamesStore = defineStore('games', () => {
  const appStore = useAppStore()

  async function getGames(
    limit: number,
    offset: number
  ): Promise<[Game[] | undefined, number, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getGames(
          new GetGamesRequest({
            JWT: appStore.getToken(),
            limit: BigInt(limit),
            offset: BigInt(offset)
          })
        )
        .then((data) => {
          const res = data as GetGamesReply
          resolve([res.games, res.games.length, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 0, 'unable to get games'])
        })
    })
  }

  async function createGame(name: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .createGame(
          new CreateGameRequest({
            JWT: appStore.getToken(),
            name
          })
        )
        .then(() => {
          return resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to create a new game')
        })
    })
  }

  async function updateGame(id: string, name: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      client
        .updateGame(
          new UpdateGameRequest({
            JWT: appStore.getToken(),
            id,
            name
          })
        )
        .then(() => {
          resolve(undefined)
        })
        .catch((err) => {
          console.log(err)
          resolve('unable to update game')
        })
    })
  }

  async function getGame(id: string): Promise<[Game | undefined, string | undefined]> {
    return new Promise((resolve) => {
      client
        .getGame(
          new GetGameRequest({
            JWT: appStore.getToken(),
            id
          })
        )
        .then((data) => {
          const res = data as GetGameReply
          resolve([res.game as Game, undefined])
        })
        .catch((err) => {
          console.log(err)
          resolve([undefined, 'unable to get game'])
        })
    })
  }

  return { getGames, createGame, updateGame, getGame }
})
