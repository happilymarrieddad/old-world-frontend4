// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file proto/games/game.proto (package games, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateGameRequest, DeleteGameRequest, EmptyReply, GetGameReply, GetGameRequest, GetGamesReply, GetGamesRequest, UpdateGameRequest } from "./game_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service games.V1Games
 */
export const V1Games = {
  typeName: "games.V1Games",
  methods: {
    /**
     * @generated from rpc games.V1Games.GetGame
     */
    getGame: {
      name: "GetGame",
      I: GetGameRequest,
      O: GetGameReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc games.V1Games.GetGames
     */
    getGames: {
      name: "GetGames",
      I: GetGamesRequest,
      O: GetGamesReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc games.V1Games.CreateGame
     */
    createGame: {
      name: "CreateGame",
      I: CreateGameRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc games.V1Games.DeleteGame
     */
    deleteGame: {
      name: "DeleteGame",
      I: DeleteGameRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc games.V1Games.UpdateGame
     */
    updateGame: {
      name: "UpdateGame",
      I: UpdateGameRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

