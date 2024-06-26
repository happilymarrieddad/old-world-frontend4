// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file proto/userarmies/armies-service.proto (package userarmies, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddUnitRequest, CreateUserArmyReply, CreateUserArmyRequest, DestroyUserArmyRequest, EmptyReply, GetUserArmiesReply, GetUserArmiesRequest, GetUserArmyReply, GetUserArmyRequest, RemoveUnitRequest, UpdateUserArmyRequest } from "./armies-service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service userarmies.V1UserArmies
 */
export const V1UserArmies = {
  typeName: "userarmies.V1UserArmies",
  methods: {
    /**
     * @generated from rpc userarmies.V1UserArmies.GetUserArmies
     */
    getUserArmies: {
      name: "GetUserArmies",
      I: GetUserArmiesRequest,
      O: GetUserArmiesReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc userarmies.V1UserArmies.GetUserArmy
     */
    getUserArmy: {
      name: "GetUserArmy",
      I: GetUserArmyRequest,
      O: GetUserArmyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc userarmies.V1UserArmies.CreateUserArmy
     */
    createUserArmy: {
      name: "CreateUserArmy",
      I: CreateUserArmyRequest,
      O: CreateUserArmyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc userarmies.V1UserArmies.DestroyUserArmy
     */
    destroyUserArmy: {
      name: "DestroyUserArmy",
      I: DestroyUserArmyRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc userarmies.V1UserArmies.AddUnit
     */
    addUnit: {
      name: "AddUnit",
      I: AddUnitRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc userarmies.V1UserArmies.RemoveUnit
     */
    removeUnit: {
      name: "RemoveUnit",
      I: RemoveUnitRequest,
      O: EmptyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc userarmies.V1UserArmies.UpdateUserArmy
     */
    updateUserArmy: {
      name: "UpdateUserArmy",
      I: UpdateUserArmyRequest,
      O: GetUserArmyReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

