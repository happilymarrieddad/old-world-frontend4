// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file proto/games/game.proto (package games, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message games.GetGamesRequest
 */
export class GetGamesRequest extends Message<GetGamesRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: int64 limit = 2;
   */
  limit = protoInt64.zero;

  /**
   * @generated from field: int64 offset = 3;
   */
  offset = protoInt64.zero;

  constructor(data?: PartialMessage<GetGamesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "games.GetGamesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGamesRequest {
    return new GetGamesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGamesRequest {
    return new GetGamesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGamesRequest {
    return new GetGamesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetGamesRequest | PlainMessage<GetGamesRequest> | undefined, b: GetGamesRequest | PlainMessage<GetGamesRequest> | undefined): boolean {
    return proto3.util.equals(GetGamesRequest, a, b);
  }
}

/**
 * @generated from message games.GetGamesReply
 */
export class GetGamesReply extends Message<GetGamesReply> {
  /**
   * @generated from field: repeated games.Game games = 1;
   */
  games: Game[] = [];

  constructor(data?: PartialMessage<GetGamesReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "games.GetGamesReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "games", kind: "message", T: Game, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGamesReply {
    return new GetGamesReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGamesReply {
    return new GetGamesReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGamesReply {
    return new GetGamesReply().fromJsonString(jsonString, options);
  }

  static equals(a: GetGamesReply | PlainMessage<GetGamesReply> | undefined, b: GetGamesReply | PlainMessage<GetGamesReply> | undefined): boolean {
    return proto3.util.equals(GetGamesReply, a, b);
  }
}

/**
 * @generated from message games.CreateGameRequest
 */
export class CreateGameRequest extends Message<CreateGameRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<CreateGameRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "games.CreateGameRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGameRequest {
    return new CreateGameRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGameRequest {
    return new CreateGameRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGameRequest {
    return new CreateGameRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateGameRequest | PlainMessage<CreateGameRequest> | undefined, b: CreateGameRequest | PlainMessage<CreateGameRequest> | undefined): boolean {
    return proto3.util.equals(CreateGameRequest, a, b);
  }
}

/**
 * @generated from message games.DeleteGameRequest
 */
export class DeleteGameRequest extends Message<DeleteGameRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<DeleteGameRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "games.DeleteGameRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteGameRequest {
    return new DeleteGameRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteGameRequest {
    return new DeleteGameRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteGameRequest {
    return new DeleteGameRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteGameRequest | PlainMessage<DeleteGameRequest> | undefined, b: DeleteGameRequest | PlainMessage<DeleteGameRequest> | undefined): boolean {
    return proto3.util.equals(DeleteGameRequest, a, b);
  }
}

/**
 * @generated from message games.Game
 */
export class Game extends Message<Game> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Timestamp createdAt = 3;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<Game>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "games.Game";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "createdAt", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Game {
    return new Game().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Game {
    return new Game().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Game {
    return new Game().fromJsonString(jsonString, options);
  }

  static equals(a: Game | PlainMessage<Game> | undefined, b: Game | PlainMessage<Game> | undefined): boolean {
    return proto3.util.equals(Game, a, b);
  }
}

/**
 * @generated from message games.EmptyReply
 */
export class EmptyReply extends Message<EmptyReply> {
  constructor(data?: PartialMessage<EmptyReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "games.EmptyReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyReply {
    return new EmptyReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyReply {
    return new EmptyReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyReply {
    return new EmptyReply().fromJsonString(jsonString, options);
  }

  static equals(a: EmptyReply | PlainMessage<EmptyReply> | undefined, b: EmptyReply | PlainMessage<EmptyReply> | undefined): boolean {
    return proto3.util.equals(EmptyReply, a, b);
  }
}
