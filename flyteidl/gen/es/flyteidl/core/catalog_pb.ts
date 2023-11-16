// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/core/catalog.proto (package flyteidl.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Identifier, TaskExecutionIdentifier } from "./identifier_pb.js";

/**
 * Indicates the status of CatalogCaching. The reason why this is not embedded in TaskNodeMetadata is, that we may use for other types of nodes as well in the future
 *
 * @generated from enum flyteidl.core.CatalogCacheStatus
 */
export enum CatalogCacheStatus {
  /**
   * Used to indicate that caching was disabled
   *
   * @generated from enum value: CACHE_DISABLED = 0;
   */
  CACHE_DISABLED = 0,

  /**
   * Used to indicate that the cache lookup resulted in no matches
   *
   * @generated from enum value: CACHE_MISS = 1;
   */
  CACHE_MISS = 1,

  /**
   * used to indicate that the associated artifact was a result of a previous execution
   *
   * @generated from enum value: CACHE_HIT = 2;
   */
  CACHE_HIT = 2,

  /**
   * used to indicate that the resultant artifact was added to the cache
   *
   * @generated from enum value: CACHE_POPULATED = 3;
   */
  CACHE_POPULATED = 3,

  /**
   * Used to indicate that cache lookup failed because of an error
   *
   * @generated from enum value: CACHE_LOOKUP_FAILURE = 4;
   */
  CACHE_LOOKUP_FAILURE = 4,

  /**
   * Used to indicate that cache lookup failed because of an error
   *
   * @generated from enum value: CACHE_PUT_FAILURE = 5;
   */
  CACHE_PUT_FAILURE = 5,

  /**
   * Used to indicate the cache lookup was skipped
   *
   * @generated from enum value: CACHE_SKIPPED = 6;
   */
  CACHE_SKIPPED = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(CatalogCacheStatus)
proto3.util.setEnumType(CatalogCacheStatus, "flyteidl.core.CatalogCacheStatus", [
  { no: 0, name: "CACHE_DISABLED" },
  { no: 1, name: "CACHE_MISS" },
  { no: 2, name: "CACHE_HIT" },
  { no: 3, name: "CACHE_POPULATED" },
  { no: 4, name: "CACHE_LOOKUP_FAILURE" },
  { no: 5, name: "CACHE_PUT_FAILURE" },
  { no: 6, name: "CACHE_SKIPPED" },
]);

/**
 * @generated from message flyteidl.core.CatalogArtifactTag
 */
export class CatalogArtifactTag extends Message<CatalogArtifactTag> {
  /**
   * Artifact ID is generated name
   *
   * @generated from field: string artifact_id = 1;
   */
  artifactId = "";

  /**
   * Flyte computes the tag automatically, as the hash of the values
   *
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<CatalogArtifactTag>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.core.CatalogArtifactTag";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "artifact_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CatalogArtifactTag {
    return new CatalogArtifactTag().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CatalogArtifactTag {
    return new CatalogArtifactTag().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CatalogArtifactTag {
    return new CatalogArtifactTag().fromJsonString(jsonString, options);
  }

  static equals(a: CatalogArtifactTag | PlainMessage<CatalogArtifactTag> | undefined, b: CatalogArtifactTag | PlainMessage<CatalogArtifactTag> | undefined): boolean {
    return proto3.util.equals(CatalogArtifactTag, a, b);
  }
}

/**
 * Catalog artifact information with specific metadata
 *
 * @generated from message flyteidl.core.CatalogMetadata
 */
export class CatalogMetadata extends Message<CatalogMetadata> {
  /**
   * Dataset ID in the catalog
   *
   * @generated from field: flyteidl.core.Identifier dataset_id = 1;
   */
  datasetId?: Identifier;

  /**
   * Artifact tag in the catalog
   *
   * @generated from field: flyteidl.core.CatalogArtifactTag artifact_tag = 2;
   */
  artifactTag?: CatalogArtifactTag;

  /**
   * Optional: Source Execution identifier, if this dataset was generated by another execution in Flyte. This is a one-of field and will depend on the caching context
   *
   * @generated from oneof flyteidl.core.CatalogMetadata.source_execution
   */
  sourceExecution: {
    /**
     * Today we only support TaskExecutionIdentifier as a source, as catalog caching only works for task executions
     *
     * @generated from field: flyteidl.core.TaskExecutionIdentifier source_task_execution = 3;
     */
    value: TaskExecutionIdentifier;
    case: "sourceTaskExecution";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<CatalogMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.core.CatalogMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dataset_id", kind: "message", T: Identifier },
    { no: 2, name: "artifact_tag", kind: "message", T: CatalogArtifactTag },
    { no: 3, name: "source_task_execution", kind: "message", T: TaskExecutionIdentifier, oneof: "source_execution" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CatalogMetadata {
    return new CatalogMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CatalogMetadata {
    return new CatalogMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CatalogMetadata {
    return new CatalogMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: CatalogMetadata | PlainMessage<CatalogMetadata> | undefined, b: CatalogMetadata | PlainMessage<CatalogMetadata> | undefined): boolean {
    return proto3.util.equals(CatalogMetadata, a, b);
  }
}

/**
 * @generated from message flyteidl.core.CatalogReservation
 */
export class CatalogReservation extends Message<CatalogReservation> {
  constructor(data?: PartialMessage<CatalogReservation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.core.CatalogReservation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CatalogReservation {
    return new CatalogReservation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CatalogReservation {
    return new CatalogReservation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CatalogReservation {
    return new CatalogReservation().fromJsonString(jsonString, options);
  }

  static equals(a: CatalogReservation | PlainMessage<CatalogReservation> | undefined, b: CatalogReservation | PlainMessage<CatalogReservation> | undefined): boolean {
    return proto3.util.equals(CatalogReservation, a, b);
  }
}

/**
 * Indicates the status of a catalog reservation operation.
 *
 * @generated from enum flyteidl.core.CatalogReservation.Status
 */
export enum CatalogReservation_Status {
  /**
   * Used to indicate that reservations are disabled
   *
   * @generated from enum value: RESERVATION_DISABLED = 0;
   */
  RESERVATION_DISABLED = 0,

  /**
   * Used to indicate that a reservation was successfully acquired or extended
   *
   * @generated from enum value: RESERVATION_ACQUIRED = 1;
   */
  RESERVATION_ACQUIRED = 1,

  /**
   * Used to indicate that an active reservation currently exists
   *
   * @generated from enum value: RESERVATION_EXISTS = 2;
   */
  RESERVATION_EXISTS = 2,

  /**
   * Used to indicate that the reservation has been successfully released
   *
   * @generated from enum value: RESERVATION_RELEASED = 3;
   */
  RESERVATION_RELEASED = 3,

  /**
   * Used to indicate that a reservation operation resulted in failure
   *
   * @generated from enum value: RESERVATION_FAILURE = 4;
   */
  RESERVATION_FAILURE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(CatalogReservation_Status)
proto3.util.setEnumType(CatalogReservation_Status, "flyteidl.core.CatalogReservation.Status", [
  { no: 0, name: "RESERVATION_DISABLED" },
  { no: 1, name: "RESERVATION_ACQUIRED" },
  { no: 2, name: "RESERVATION_EXISTS" },
  { no: 3, name: "RESERVATION_RELEASED" },
  { no: 4, name: "RESERVATION_FAILURE" },
]);

