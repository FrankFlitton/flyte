// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=js+dts+ts"
// @generated from file flyteidl/service/dataproxy.proto (package flyteidl.service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateDownloadLinkRequest, CreateDownloadLinkResponse, CreateDownloadLocationRequest, CreateDownloadLocationResponse, CreateUploadLocationRequest, CreateUploadLocationResponse, GetDataRequest, GetDataResponse } from "./dataproxy_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * DataProxyService defines an RPC Service that allows access to user-data in a controlled manner.
 *
 * @generated from service flyteidl.service.DataProxyService
 */
export const DataProxyService = {
  typeName: "flyteidl.service.DataProxyService",
  methods: {
    /**
     * CreateUploadLocation creates a signed url to upload artifacts to for a given project/domain.
     *
     * @generated from rpc flyteidl.service.DataProxyService.CreateUploadLocation
     */
    createUploadLocation: {
      name: "CreateUploadLocation",
      I: CreateUploadLocationRequest,
      O: CreateUploadLocationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateDownloadLocation creates a signed url to download artifacts.
     *
     * @generated from rpc flyteidl.service.DataProxyService.CreateDownloadLocation
     * @deprecated
     */
    createDownloadLocation: {
      name: "CreateDownloadLocation",
      I: CreateDownloadLocationRequest,
      O: CreateDownloadLocationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateDownloadLocation creates a signed url to download artifacts.
     *
     * @generated from rpc flyteidl.service.DataProxyService.CreateDownloadLink
     */
    createDownloadLink: {
      name: "CreateDownloadLink",
      I: CreateDownloadLinkRequest,
      O: CreateDownloadLinkResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc flyteidl.service.DataProxyService.GetData
     */
    getData: {
      name: "GetData",
      I: GetDataRequest,
      O: GetDataResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

