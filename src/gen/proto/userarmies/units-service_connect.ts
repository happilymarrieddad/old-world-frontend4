// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file proto/userarmies/units-service.proto (package userarmies, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetUnitReply, GetUnitRequest, UpdateUnitReply, UpdateUnitRequest } from "./units-service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service userarmies.V1UserArmyUnits
 */
export const V1UserArmyUnits = {
  typeName: "userarmies.V1UserArmyUnits",
  methods: {
    /**
     * @generated from rpc userarmies.V1UserArmyUnits.GetUnit
     */
    getUnit: {
      name: "GetUnit",
      I: GetUnitRequest,
      O: GetUnitReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc userarmies.V1UserArmyUnits.UpdateUnit
     */
    updateUnit: {
      name: "UpdateUnit",
      I: UpdateUnitRequest,
      O: UpdateUnitReply,
      kind: MethodKind.Unary,
    },
  }
} as const;
