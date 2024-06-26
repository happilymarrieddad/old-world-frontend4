// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file proto/items/items-service.proto (package items, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { CreateArmyItem, Item, UpdateItem } from "./types_pb.js";

/**
 * @generated from message items.CreateItemRequest
 */
export class CreateItemRequest extends Message<CreateItemRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: items.CreateArmyItem item = 2;
   */
  item?: CreateArmyItem;

  constructor(data?: PartialMessage<CreateItemRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "items.CreateItemRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "item", kind: "message", T: CreateArmyItem },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateItemRequest {
    return new CreateItemRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateItemRequest {
    return new CreateItemRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateItemRequest {
    return new CreateItemRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateItemRequest | PlainMessage<CreateItemRequest> | undefined, b: CreateItemRequest | PlainMessage<CreateItemRequest> | undefined): boolean {
    return proto3.util.equals(CreateItemRequest, a, b);
  }
}

/**
 * @generated from message items.UpdateItemRequest
 */
export class UpdateItemRequest extends Message<UpdateItemRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: items.UpdateItem item = 2;
   */
  item?: UpdateItem;

  constructor(data?: PartialMessage<UpdateItemRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "items.UpdateItemRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "item", kind: "message", T: UpdateItem },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateItemRequest {
    return new UpdateItemRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateItemRequest {
    return new UpdateItemRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateItemRequest {
    return new UpdateItemRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateItemRequest | PlainMessage<UpdateItemRequest> | undefined, b: UpdateItemRequest | PlainMessage<UpdateItemRequest> | undefined): boolean {
    return proto3.util.equals(UpdateItemRequest, a, b);
  }
}

/**
 * @generated from message items.GetItemRequest
 */
export class GetItemRequest extends Message<GetItemRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string gameId = 3;
   */
  gameId = "";

  constructor(data?: PartialMessage<GetItemRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "items.GetItemRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "gameId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetItemRequest {
    return new GetItemRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetItemRequest {
    return new GetItemRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetItemRequest {
    return new GetItemRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetItemRequest | PlainMessage<GetItemRequest> | undefined, b: GetItemRequest | PlainMessage<GetItemRequest> | undefined): boolean {
    return proto3.util.equals(GetItemRequest, a, b);
  }
}

/**
 * @generated from message items.GetGameItemsRequest
 */
export class GetGameItemsRequest extends Message<GetGameItemsRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string gameId = 2;
   */
  gameId = "";

  /**
   * @generated from field: int64 limit = 3;
   */
  limit = protoInt64.zero;

  /**
   * @generated from field: int64 offset = 4;
   */
  offset = protoInt64.zero;

  constructor(data?: PartialMessage<GetGameItemsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "items.GetGameItemsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "gameId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGameItemsRequest {
    return new GetGameItemsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGameItemsRequest {
    return new GetGameItemsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGameItemsRequest {
    return new GetGameItemsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetGameItemsRequest | PlainMessage<GetGameItemsRequest> | undefined, b: GetGameItemsRequest | PlainMessage<GetGameItemsRequest> | undefined): boolean {
    return proto3.util.equals(GetGameItemsRequest, a, b);
  }
}

/**
 * @generated from message items.GetArmyItemsRequest
 */
export class GetArmyItemsRequest extends Message<GetArmyItemsRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string armyTypeId = 2;
   */
  armyTypeId = "";

  /**
   * @generated from field: int64 limit = 3;
   */
  limit = protoInt64.zero;

  /**
   * @generated from field: int64 offset = 4;
   */
  offset = protoInt64.zero;

  constructor(data?: PartialMessage<GetArmyItemsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "items.GetArmyItemsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "armyTypeId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetArmyItemsRequest {
    return new GetArmyItemsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetArmyItemsRequest {
    return new GetArmyItemsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetArmyItemsRequest {
    return new GetArmyItemsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetArmyItemsRequest | PlainMessage<GetArmyItemsRequest> | undefined, b: GetArmyItemsRequest | PlainMessage<GetArmyItemsRequest> | undefined): boolean {
    return proto3.util.equals(GetArmyItemsRequest, a, b);
  }
}

/**
 * @generated from message items.GetItemsReply
 */
export class GetItemsReply extends Message<GetItemsReply> {
  /**
   * @generated from field: repeated items.Item items = 1;
   */
  items: Item[] = [];

  constructor(data?: PartialMessage<GetItemsReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "items.GetItemsReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "items", kind: "message", T: Item, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetItemsReply {
    return new GetItemsReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetItemsReply {
    return new GetItemsReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetItemsReply {
    return new GetItemsReply().fromJsonString(jsonString, options);
  }

  static equals(a: GetItemsReply | PlainMessage<GetItemsReply> | undefined, b: GetItemsReply | PlainMessage<GetItemsReply> | undefined): boolean {
    return proto3.util.equals(GetItemsReply, a, b);
  }
}

/**
 * @generated from message items.GetItemReply
 */
export class GetItemReply extends Message<GetItemReply> {
  /**
   * @generated from field: items.Item item = 1;
   */
  item?: Item;

  constructor(data?: PartialMessage<GetItemReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "items.GetItemReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "item", kind: "message", T: Item },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetItemReply {
    return new GetItemReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetItemReply {
    return new GetItemReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetItemReply {
    return new GetItemReply().fromJsonString(jsonString, options);
  }

  static equals(a: GetItemReply | PlainMessage<GetItemReply> | undefined, b: GetItemReply | PlainMessage<GetItemReply> | undefined): boolean {
    return proto3.util.equals(GetItemReply, a, b);
  }
}

