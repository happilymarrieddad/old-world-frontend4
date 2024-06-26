// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file proto/optiontypes/option-types.proto (package optiontypes, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateOptionTypeRequest, DeleteOptionTypeRequest, EmptyReply, GetOptionTypeRequest, GetOptionTypesReply, GetOptionTypesRequest, OptionType, UpdateOptionTypeRequest } from "./option-types_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service optiontypes.V1OptionTypes
 */
export const V1OptionTypes = {
  typeName: "optiontypes.V1OptionTypes",
  methods: {
    /**
     * @generated from rpc optiontypes.V1OptionTypes.GetOptionTypes
     */
    getOptionTypes: {
      name: "GetOptionTypes",
      I: GetOptionTypesRequest,
      O: GetOptionTypesReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc optiontypes.V1OptionTypes.GetOptionType
     */
    getOptionType: {
      name: "GetOptionType",
      I: GetOptionTypeRequest,
      O: OptionType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc optiontypes.V1OptionTypes.CreateOptionType
     */
    createOptionType: {
      name: "CreateOptionType",
      I: CreateOptionTypeRequest,
      O: OptionType,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc optiontypes.V1OptionTypes.UpdateOptionType
     */
    updateOptionType: {
      name: "UpdateOptionType",
      I: UpdateOptionTypeRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc optiontypes.V1OptionTypes.DeleteOptionType
     */
    deleteOptionType: {
      name: "DeleteOptionType",
      I: DeleteOptionTypeRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

