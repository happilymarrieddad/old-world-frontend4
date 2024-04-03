// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file proto/userarmies/units-service.proto (package userarmies, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ArmyUnit } from "./units_pb.js";

/**
 * @generated from message userarmies.GetUnitRequest
 */
export class GetUnitRequest extends Message<GetUnitRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<GetUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "userarmies.GetUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUnitRequest {
    return new GetUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUnitRequest {
    return new GetUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUnitRequest {
    return new GetUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetUnitRequest | PlainMessage<GetUnitRequest> | undefined, b: GetUnitRequest | PlainMessage<GetUnitRequest> | undefined): boolean {
    return proto3.util.equals(GetUnitRequest, a, b);
  }
}

/**
 * @generated from message userarmies.GetUnitReply
 */
export class GetUnitReply extends Message<GetUnitReply> {
  /**
   * @generated from field: userarmies.ArmyUnit unit = 1;
   */
  unit?: ArmyUnit;

  constructor(data?: PartialMessage<GetUnitReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "userarmies.GetUnitReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "unit", kind: "message", T: ArmyUnit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUnitReply {
    return new GetUnitReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUnitReply {
    return new GetUnitReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUnitReply {
    return new GetUnitReply().fromJsonString(jsonString, options);
  }

  static equals(a: GetUnitReply | PlainMessage<GetUnitReply> | undefined, b: GetUnitReply | PlainMessage<GetUnitReply> | undefined): boolean {
    return proto3.util.equals(GetUnitReply, a, b);
  }
}

/**
 * @generated from message userarmies.UpdateUserArmyUnitOptionValue
 */
export class UpdateUserArmyUnitOptionValue extends Message<UpdateUserArmyUnitOptionValue> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: bool is_selected = 2;
   */
  isSelected = false;

  /**
   * @generated from field: string index_selected = 3;
   */
  indexSelected = "";

  /**
   * @generated from field: repeated string ids_selected = 4;
   */
  idsSelected: string[] = [];

  /**
   * @generated from field: int64 qty_selected = 5;
   */
  qtySelected = protoInt64.zero;

  constructor(data?: PartialMessage<UpdateUserArmyUnitOptionValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "userarmies.UpdateUserArmyUnitOptionValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_selected", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "index_selected", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ids_selected", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "qty_selected", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserArmyUnitOptionValue {
    return new UpdateUserArmyUnitOptionValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserArmyUnitOptionValue {
    return new UpdateUserArmyUnitOptionValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserArmyUnitOptionValue {
    return new UpdateUserArmyUnitOptionValue().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUserArmyUnitOptionValue | PlainMessage<UpdateUserArmyUnitOptionValue> | undefined, b: UpdateUserArmyUnitOptionValue | PlainMessage<UpdateUserArmyUnitOptionValue> | undefined): boolean {
    return proto3.util.equals(UpdateUserArmyUnitOptionValue, a, b);
  }
}

/**
 * @generated from message userarmies.UpdateUserArmyUnit
 */
export class UpdateUserArmyUnit extends Message<UpdateUserArmyUnit> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from oneof userarmies.UpdateUserArmyUnit.qty
   */
  qty: {
    /**
     * @generated from field: bool qty_null = 2;
     */
    value: boolean;
    case: "qtyNull";
  } | {
    /**
     * @generated from field: int64 qty_value = 3;
     */
    value: bigint;
    case: "qtyValue";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: repeated userarmies.UpdateUserArmyUnitOptionValue option_values = 4;
   */
  optionValues: UpdateUserArmyUnitOptionValue[] = [];

  /**
   * @generated from field: int64 points = 5;
   */
  points = protoInt64.zero;

  constructor(data?: PartialMessage<UpdateUserArmyUnit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "userarmies.UpdateUserArmyUnit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "qty_null", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "qty" },
    { no: 3, name: "qty_value", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "qty" },
    { no: 4, name: "option_values", kind: "message", T: UpdateUserArmyUnitOptionValue, repeated: true },
    { no: 5, name: "points", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserArmyUnit {
    return new UpdateUserArmyUnit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserArmyUnit {
    return new UpdateUserArmyUnit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserArmyUnit {
    return new UpdateUserArmyUnit().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUserArmyUnit | PlainMessage<UpdateUserArmyUnit> | undefined, b: UpdateUserArmyUnit | PlainMessage<UpdateUserArmyUnit> | undefined): boolean {
    return proto3.util.equals(UpdateUserArmyUnit, a, b);
  }
}

/**
 * @generated from message userarmies.UpdateUnitRequest
 */
export class UpdateUnitRequest extends Message<UpdateUnitRequest> {
  /**
   * @generated from field: string JWT = 1;
   */
  JWT = "";

  /**
   * @generated from field: userarmies.UpdateUserArmyUnit update_army_unit = 2;
   */
  updateArmyUnit?: UpdateUserArmyUnit;

  constructor(data?: PartialMessage<UpdateUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "userarmies.UpdateUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "JWT", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "update_army_unit", kind: "message", T: UpdateUserArmyUnit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUnitRequest {
    return new UpdateUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUnitRequest {
    return new UpdateUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUnitRequest {
    return new UpdateUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUnitRequest | PlainMessage<UpdateUnitRequest> | undefined, b: UpdateUnitRequest | PlainMessage<UpdateUnitRequest> | undefined): boolean {
    return proto3.util.equals(UpdateUnitRequest, a, b);
  }
}

/**
 * @generated from message userarmies.UpdateUnitReply
 */
export class UpdateUnitReply extends Message<UpdateUnitReply> {
  constructor(data?: PartialMessage<UpdateUnitReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "userarmies.UpdateUnitReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUnitReply {
    return new UpdateUnitReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUnitReply {
    return new UpdateUnitReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUnitReply {
    return new UpdateUnitReply().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUnitReply | PlainMessage<UpdateUnitReply> | undefined, b: UpdateUnitReply | PlainMessage<UpdateUnitReply> | undefined): boolean {
    return proto3.util.equals(UpdateUnitReply, a, b);
  }
}

