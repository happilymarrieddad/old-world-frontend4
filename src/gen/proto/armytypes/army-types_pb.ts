// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file proto/armytypes/army-types.proto (package armytypes, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message armytypes.GetArmyTypeRequest
 */
export class GetArmyTypeRequest extends Message<GetArmyTypeRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<GetArmyTypeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.GetArmyTypeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetArmyTypeRequest {
    return new GetArmyTypeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetArmyTypeRequest {
    return new GetArmyTypeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetArmyTypeRequest {
    return new GetArmyTypeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetArmyTypeRequest | PlainMessage<GetArmyTypeRequest> | undefined, b: GetArmyTypeRequest | PlainMessage<GetArmyTypeRequest> | undefined): boolean {
    return proto3.util.equals(GetArmyTypeRequest, a, b);
  }
}

/**
 * @generated from message armytypes.GetArmyTypesRequest
 */
export class GetArmyTypesRequest extends Message<GetArmyTypesRequest> {
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

  constructor(data?: PartialMessage<GetArmyTypesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.GetArmyTypesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "gameId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetArmyTypesRequest {
    return new GetArmyTypesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetArmyTypesRequest {
    return new GetArmyTypesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetArmyTypesRequest {
    return new GetArmyTypesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetArmyTypesRequest | PlainMessage<GetArmyTypesRequest> | undefined, b: GetArmyTypesRequest | PlainMessage<GetArmyTypesRequest> | undefined): boolean {
    return proto3.util.equals(GetArmyTypesRequest, a, b);
  }
}

/**
 * @generated from message armytypes.GetArmyTypesReply
 */
export class GetArmyTypesReply extends Message<GetArmyTypesReply> {
  /**
   * @generated from field: repeated armytypes.ArmyType armyTypes = 1;
   */
  armyTypes: ArmyType[] = [];

  /**
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  constructor(data?: PartialMessage<GetArmyTypesReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.GetArmyTypesReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "armyTypes", kind: "message", T: ArmyType, repeated: true },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetArmyTypesReply {
    return new GetArmyTypesReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetArmyTypesReply {
    return new GetArmyTypesReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetArmyTypesReply {
    return new GetArmyTypesReply().fromJsonString(jsonString, options);
  }

  static equals(a: GetArmyTypesReply | PlainMessage<GetArmyTypesReply> | undefined, b: GetArmyTypesReply | PlainMessage<GetArmyTypesReply> | undefined): boolean {
    return proto3.util.equals(GetArmyTypesReply, a, b);
  }
}

/**
 * @generated from message armytypes.CreateArmyTypeRequest
 */
export class CreateArmyTypeRequest extends Message<CreateArmyTypeRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string gameId = 3;
   */
  gameId = "";

  constructor(data?: PartialMessage<CreateArmyTypeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.CreateArmyTypeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "gameId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateArmyTypeRequest {
    return new CreateArmyTypeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateArmyTypeRequest {
    return new CreateArmyTypeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateArmyTypeRequest {
    return new CreateArmyTypeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateArmyTypeRequest | PlainMessage<CreateArmyTypeRequest> | undefined, b: CreateArmyTypeRequest | PlainMessage<CreateArmyTypeRequest> | undefined): boolean {
    return proto3.util.equals(CreateArmyTypeRequest, a, b);
  }
}

/**
 * @generated from message armytypes.UpdateArmyTypeRequest
 */
export class UpdateArmyTypeRequest extends Message<UpdateArmyTypeRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<UpdateArmyTypeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.UpdateArmyTypeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateArmyTypeRequest {
    return new UpdateArmyTypeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateArmyTypeRequest {
    return new UpdateArmyTypeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateArmyTypeRequest {
    return new UpdateArmyTypeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateArmyTypeRequest | PlainMessage<UpdateArmyTypeRequest> | undefined, b: UpdateArmyTypeRequest | PlainMessage<UpdateArmyTypeRequest> | undefined): boolean {
    return proto3.util.equals(UpdateArmyTypeRequest, a, b);
  }
}

/**
 * @generated from message armytypes.DeleteArmyTypeRequest
 */
export class DeleteArmyTypeRequest extends Message<DeleteArmyTypeRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<DeleteArmyTypeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.DeleteArmyTypeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteArmyTypeRequest {
    return new DeleteArmyTypeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteArmyTypeRequest {
    return new DeleteArmyTypeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteArmyTypeRequest {
    return new DeleteArmyTypeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteArmyTypeRequest | PlainMessage<DeleteArmyTypeRequest> | undefined, b: DeleteArmyTypeRequest | PlainMessage<DeleteArmyTypeRequest> | undefined): boolean {
    return proto3.util.equals(DeleteArmyTypeRequest, a, b);
  }
}

/**
 * @generated from message armytypes.ArmyType
 */
export class ArmyType extends Message<ArmyType> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string gameId = 3;
   */
  gameId = "";

  /**
   * @generated from field: google.protobuf.Timestamp createdAt = 4;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<ArmyType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.ArmyType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "gameId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "createdAt", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArmyType {
    return new ArmyType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArmyType {
    return new ArmyType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArmyType {
    return new ArmyType().fromJsonString(jsonString, options);
  }

  static equals(a: ArmyType | PlainMessage<ArmyType> | undefined, b: ArmyType | PlainMessage<ArmyType> | undefined): boolean {
    return proto3.util.equals(ArmyType, a, b);
  }
}

/**
 * @generated from message armytypes.EmptyReply
 */
export class EmptyReply extends Message<EmptyReply> {
  constructor(data?: PartialMessage<EmptyReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "armytypes.EmptyReply";
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

