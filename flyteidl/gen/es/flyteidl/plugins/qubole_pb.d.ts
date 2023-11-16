// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/plugins/qubole.proto (package flyteidl.plugins, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Defines a query to execute on a hive cluster.
 *
 * @generated from message flyteidl.plugins.HiveQuery
 */
export declare class HiveQuery extends Message<HiveQuery> {
  /**
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * @generated from field: uint32 timeout_sec = 2;
   */
  timeoutSec: number;

  /**
   * @generated from field: uint32 retryCount = 3;
   */
  retryCount: number;

  constructor(data?: PartialMessage<HiveQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.plugins.HiveQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiveQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiveQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiveQuery;

  static equals(a: HiveQuery | PlainMessage<HiveQuery> | undefined, b: HiveQuery | PlainMessage<HiveQuery> | undefined): boolean;
}

/**
 * Defines a collection of hive queries.
 *
 * @generated from message flyteidl.plugins.HiveQueryCollection
 */
export declare class HiveQueryCollection extends Message<HiveQueryCollection> {
  /**
   * @generated from field: repeated flyteidl.plugins.HiveQuery queries = 2;
   */
  queries: HiveQuery[];

  constructor(data?: PartialMessage<HiveQueryCollection>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.plugins.HiveQueryCollection";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiveQueryCollection;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiveQueryCollection;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiveQueryCollection;

  static equals(a: HiveQueryCollection | PlainMessage<HiveQueryCollection> | undefined, b: HiveQueryCollection | PlainMessage<HiveQueryCollection> | undefined): boolean;
}

/**
 * This message works with the 'hive' task type in the SDK and is the object that will be in the 'custom' field
 * of a hive task's TaskTemplate
 *
 * @generated from message flyteidl.plugins.QuboleHiveJob
 */
export declare class QuboleHiveJob extends Message<QuboleHiveJob> {
  /**
   * @generated from field: string cluster_label = 1;
   */
  clusterLabel: string;

  /**
   * @generated from field: flyteidl.plugins.HiveQueryCollection query_collection = 2 [deprecated = true];
   * @deprecated
   */
  queryCollection?: HiveQueryCollection;

  /**
   * @generated from field: repeated string tags = 3;
   */
  tags: string[];

  /**
   * @generated from field: flyteidl.plugins.HiveQuery query = 4;
   */
  query?: HiveQuery;

  constructor(data?: PartialMessage<QuboleHiveJob>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.plugins.QuboleHiveJob";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuboleHiveJob;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuboleHiveJob;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuboleHiveJob;

  static equals(a: QuboleHiveJob | PlainMessage<QuboleHiveJob> | undefined, b: QuboleHiveJob | PlainMessage<QuboleHiveJob> | undefined): boolean;
}

