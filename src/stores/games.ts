import { defineStore } from 'pinia'
import { createPromiseClient } from '@connectrpc/connect'
import transport from '@/models/transport'
import { V1Games } from '@/gen/proto/games/game_connect'
import { Game, GetGamesReply, GetGamesRequest } from '@/gen/proto/games/game_pb'
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

  return { getGames }
})
