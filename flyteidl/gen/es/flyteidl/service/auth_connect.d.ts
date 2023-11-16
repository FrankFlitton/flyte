// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=js+dts+ts"
// @generated from file flyteidl/service/auth.proto (package flyteidl.service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { OAuth2MetadataRequest, OAuth2MetadataResponse, PublicClientAuthConfigRequest, PublicClientAuthConfigResponse } from "./auth_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The following defines an RPC service that is also served over HTTP via grpc-gateway.
 * Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
 * RPCs defined in this service must be anonymously accessible.
 *
 * @generated from service flyteidl.service.AuthMetadataService
 */
export declare const AuthMetadataService: {
  readonly typeName: "flyteidl.service.AuthMetadataService",
  readonly methods: {
    /**
     * Anonymously accessible. Retrieves local or external oauth authorization server metadata.
     *
     * @generated from rpc flyteidl.service.AuthMetadataService.GetOAuth2Metadata
     */
    readonly getOAuth2Metadata: {
      readonly name: "GetOAuth2Metadata",
      readonly I: typeof OAuth2MetadataRequest,
      readonly O: typeof OAuth2MetadataResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Anonymously accessible. Retrieves the client information clients should use when initiating OAuth2 authorization
     * requests.
     *
     * @generated from rpc flyteidl.service.AuthMetadataService.GetPublicClientConfig
     */
    readonly getPublicClientConfig: {
      readonly name: "GetPublicClientConfig",
      readonly I: typeof PublicClientAuthConfigRequest,
      readonly O: typeof PublicClientAuthConfigResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

