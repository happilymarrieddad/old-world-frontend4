// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file proto/itemtypes/item-types.proto (package itemtypes, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateItemTypeRequest, DeleteItemTypeRequest, EmptyReply, GetItemTypeRequest, GetItemTypesReply, GetItemTypesRequest, ItemType, UpdateItemTypeRequest } from "./item-types_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service itemtypes.V1ItemTypes
 */
export const V1ItemTypes = {
  typeName: "itemtypes.V1ItemTypes",
  methods: {
    /**
     * @generated from rpc itemtypes.V1ItemTypes.GetItemTypes
     */
    getItemTypes: {
      name: "GetItemTypes",
      I: GetItemTypesRequest,
      O: GetItemTypesReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc itemtypes.V1ItemTypes.GetItemType
     */
    getItemType: {
      name: "GetItemType",
      I: GetItemTypeRequest,
      O: ItemType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc itemtypes.V1ItemTypes.CreateItemType
     */
    createItemType: {
      name: "CreateItemType",
      I: CreateItemTypeRequest,
      O: ItemType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc itemtypes.V1ItemTypes.UpdateItemType
     */
    updateItemType: {
      name: "UpdateItemType",
      I: UpdateItemTypeRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc itemtypes.V1ItemTypes.DeleteItemType
     */
    deleteItemType: {
      name: "DeleteItemType",
      I: DeleteItemTypeRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

