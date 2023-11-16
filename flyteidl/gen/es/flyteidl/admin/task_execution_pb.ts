// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/admin/task_execution.proto (package flyteidl.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { NodeExecutionIdentifier, TaskExecutionIdentifier } from "../core/identifier_pb.js";
import { FlyteURLs, Sort, UrlBlob } from "./common_pb.js";
import { ExecutionError, TaskExecution_Phase, TaskLog } from "../core/execution_pb.js";
import { LiteralMap } from "../core/literals_pb.js";
import { TaskExecutionMetadata } from "../event/event_pb.js";

/**
 * A message used to fetch a single task execution entity.
 * See :ref:`ref_flyteidl.admin.TaskExecution` for more details
 *
 * @generated from message flyteidl.admin.TaskExecutionGetRequest
 */
export class TaskExecutionGetRequest extends Message<TaskExecutionGetRequest> {
  /**
   * Unique identifier for the task execution.
   * +required
   *
   * @generated from field: flyteidl.core.TaskExecutionIdentifier id = 1;
   */
  id?: TaskExecutionIdentifier;

  constructor(data?: PartialMessage<TaskExecutionGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskExecutionGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: TaskExecutionIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskExecutionGetRequest {
    return new TaskExecutionGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskExecutionGetRequest {
    return new TaskExecutionGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskExecutionGetRequest {
    return new TaskExecutionGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TaskExecutionGetRequest | PlainMessage<TaskExecutionGetRequest> | undefined, b: TaskExecutionGetRequest | PlainMessage<TaskExecutionGetRequest> | undefined): boolean {
    return proto3.util.equals(TaskExecutionGetRequest, a, b);
  }
}

/**
 * Represents a request structure to retrieve a list of task execution entities yielded by a specific node execution.
 * See :ref:`ref_flyteidl.admin.TaskExecution` for more details
 *
 * @generated from message flyteidl.admin.TaskExecutionListRequest
 */
export class TaskExecutionListRequest extends Message<TaskExecutionListRequest> {
  /**
   * Indicates the node execution to filter by.
   * +required
   *
   * @generated from field: flyteidl.core.NodeExecutionIdentifier node_execution_id = 1;
   */
  nodeExecutionId?: NodeExecutionIdentifier;

  /**
   * Indicates the number of resources to be returned.
   * +required
   *
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  /**
   * In the case of multiple pages of results, the server-provided token can be used to fetch the next page
   * in a query.
   * +optional
   *
   * @generated from field: string token = 3;
   */
  token = "";

  /**
   * Indicates a list of filters passed as string.
   * More info on constructing filters : <Link>
   * +optional
   *
   * @generated from field: string filters = 4;
   */
  filters = "";

  /**
   * Sort ordering for returned list.
   * +optional
   *
   * @generated from field: flyteidl.admin.Sort sort_by = 5;
   */
  sortBy?: Sort;

  constructor(data?: PartialMessage<TaskExecutionListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskExecutionListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "node_execution_id", kind: "message", T: NodeExecutionIdentifier },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filters", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "sort_by", kind: "message", T: Sort },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskExecutionListRequest {
    return new TaskExecutionListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskExecutionListRequest {
    return new TaskExecutionListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskExecutionListRequest {
    return new TaskExecutionListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TaskExecutionListRequest | PlainMessage<TaskExecutionListRequest> | undefined, b: TaskExecutionListRequest | PlainMessage<TaskExecutionListRequest> | undefined): boolean {
    return proto3.util.equals(TaskExecutionListRequest, a, b);
  }
}

/**
 * Encapsulates all details for a single task execution entity.
 * A task execution represents an instantiated task, including all inputs and additional
 * metadata as well as computed results included state, outputs, and duration-based attributes.
 *
 * @generated from message flyteidl.admin.TaskExecution
 */
export class TaskExecution extends Message<TaskExecution> {
  /**
   * Unique identifier for the task execution.
   *
   * @generated from field: flyteidl.core.TaskExecutionIdentifier id = 1;
   */
  id?: TaskExecutionIdentifier;

  /**
   * Path to remote data store where input blob is stored.
   *
   * @generated from field: string input_uri = 2;
   */
  inputUri = "";

  /**
   * Task execution details and results.
   *
   * @generated from field: flyteidl.admin.TaskExecutionClosure closure = 3;
   */
  closure?: TaskExecutionClosure;

  /**
   * Whether this task spawned nodes.
   *
   * @generated from field: bool is_parent = 4;
   */
  isParent = false;

  constructor(data?: PartialMessage<TaskExecution>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskExecution";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: TaskExecutionIdentifier },
    { no: 2, name: "input_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "closure", kind: "message", T: TaskExecutionClosure },
    { no: 4, name: "is_parent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskExecution {
    return new TaskExecution().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskExecution {
    return new TaskExecution().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskExecution {
    return new TaskExecution().fromJsonString(jsonString, options);
  }

  static equals(a: TaskExecution | PlainMessage<TaskExecution> | undefined, b: TaskExecution | PlainMessage<TaskExecution> | undefined): boolean {
    return proto3.util.equals(TaskExecution, a, b);
  }
}

/**
 * Response structure for a query to list of task execution entities.
 * See :ref:`ref_flyteidl.admin.TaskExecution` for more details
 *
 * @generated from message flyteidl.admin.TaskExecutionList
 */
export class TaskExecutionList extends Message<TaskExecutionList> {
  /**
   * @generated from field: repeated flyteidl.admin.TaskExecution task_executions = 1;
   */
  taskExecutions: TaskExecution[] = [];

  /**
   * In the case of multiple pages of results, the server-provided token can be used to fetch the next page
   * in a query. If there are no more results, this value will be empty.
   *
   * @generated from field: string token = 2;
   */
  token = "";

  constructor(data?: PartialMessage<TaskExecutionList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskExecutionList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "task_executions", kind: "message", T: TaskExecution, repeated: true },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskExecutionList {
    return new TaskExecutionList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskExecutionList {
    return new TaskExecutionList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskExecutionList {
    return new TaskExecutionList().fromJsonString(jsonString, options);
  }

  static equals(a: TaskExecutionList | PlainMessage<TaskExecutionList> | undefined, b: TaskExecutionList | PlainMessage<TaskExecutionList> | undefined): boolean {
    return proto3.util.equals(TaskExecutionList, a, b);
  }
}

/**
 * Container for task execution details and results.
 *
 * @generated from message flyteidl.admin.TaskExecutionClosure
 */
export class TaskExecutionClosure extends Message<TaskExecutionClosure> {
  /**
   * @generated from oneof flyteidl.admin.TaskExecutionClosure.output_result
   */
  outputResult: {
    /**
     * Path to remote data store where output blob is stored if the execution succeeded (and produced outputs).
     * DEPRECATED. Use GetTaskExecutionData to fetch output data instead.
     *
     * @generated from field: string output_uri = 1 [deprecated = true];
     * @deprecated
     */
    value: string;
    case: "outputUri";
  } | {
    /**
     * Error information for the task execution. Populated if the execution failed.
     *
     * @generated from field: flyteidl.core.ExecutionError error = 2;
     */
    value: ExecutionError;
    case: "error";
  } | {
    /**
     * Raw output data produced by this task execution.
     * DEPRECATED. Use GetTaskExecutionData to fetch output data instead.
     *
     * @generated from field: flyteidl.core.LiteralMap output_data = 12 [deprecated = true];
     * @deprecated
     */
    value: LiteralMap;
    case: "outputData";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * The last recorded phase for this task execution.
   *
   * @generated from field: flyteidl.core.TaskExecution.Phase phase = 3;
   */
  phase = TaskExecution_Phase.UNDEFINED;

  /**
   * Detailed log information output by the task execution.
   *
   * @generated from field: repeated flyteidl.core.TaskLog logs = 4;
   */
  logs: TaskLog[] = [];

  /**
   * Time at which the task execution began running.
   *
   * @generated from field: google.protobuf.Timestamp started_at = 5;
   */
  startedAt?: Timestamp;

  /**
   * The amount of time the task execution spent running.
   *
   * @generated from field: google.protobuf.Duration duration = 6;
   */
  duration?: Duration;

  /**
   * Time at which the task execution was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 7;
   */
  createdAt?: Timestamp;

  /**
   * Time at which the task execution was last updated.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 8;
   */
  updatedAt?: Timestamp;

  /**
   * Custom data specific to the task plugin.
   *
   * @generated from field: google.protobuf.Struct custom_info = 9;
   */
  customInfo?: Struct;

  /**
   * If there is an explanation for the most recent phase transition, the reason will capture it.
   *
   * @generated from field: string reason = 10;
   */
  reason = "";

  /**
   * A predefined yet extensible Task type identifier.
   *
   * @generated from field: string task_type = 11;
   */
  taskType = "";

  /**
   * Metadata around how a task was executed.
   *
   * @generated from field: flyteidl.event.TaskExecutionMetadata metadata = 16;
   */
  metadata?: TaskExecutionMetadata;

  /**
   * The event version is used to indicate versioned changes in how data is maintained using this
   * proto message. For example, event_verison > 0 means that maps tasks logs use the
   * TaskExecutionMetadata ExternalResourceInfo fields for each subtask rather than the TaskLog
   * in this message.
   *
   * @generated from field: int32 event_version = 17;
   */
  eventVersion = 0;

  /**
   * A time-series of the phase transition or update explanations. This, when compared to storing a singular reason
   * as previously done, is much more valuable in visualizing and understanding historical evaluations.
   *
   * @generated from field: repeated flyteidl.admin.Reason reasons = 18;
   */
  reasons: Reason[] = [];

  constructor(data?: PartialMessage<TaskExecutionClosure>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskExecutionClosure";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "output_uri", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "output_result" },
    { no: 2, name: "error", kind: "message", T: ExecutionError, oneof: "output_result" },
    { no: 12, name: "output_data", kind: "message", T: LiteralMap, oneof: "output_result" },
    { no: 3, name: "phase", kind: "enum", T: proto3.getEnumType(TaskExecution_Phase) },
    { no: 4, name: "logs", kind: "message", T: TaskLog, repeated: true },
    { no: 5, name: "started_at", kind: "message", T: Timestamp },
    { no: 6, name: "duration", kind: "message", T: Duration },
    { no: 7, name: "created_at", kind: "message", T: Timestamp },
    { no: 8, name: "updated_at", kind: "message", T: Timestamp },
    { no: 9, name: "custom_info", kind: "message", T: Struct },
    { no: 10, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "task_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "metadata", kind: "message", T: TaskExecutionMetadata },
    { no: 17, name: "event_version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 18, name: "reasons", kind: "message", T: Reason, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskExecutionClosure {
    return new TaskExecutionClosure().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskExecutionClosure {
    return new TaskExecutionClosure().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskExecutionClosure {
    return new TaskExecutionClosure().fromJsonString(jsonString, options);
  }

  static equals(a: TaskExecutionClosure | PlainMessage<TaskExecutionClosure> | undefined, b: TaskExecutionClosure | PlainMessage<TaskExecutionClosure> | undefined): boolean {
    return proto3.util.equals(TaskExecutionClosure, a, b);
  }
}

/**
 * Reason is a single message annotated with a timestamp to indicate the instant the reason occurred.
 *
 * @generated from message flyteidl.admin.Reason
 */
export class Reason extends Message<Reason> {
  /**
   * occurred_at is the timestamp indicating the instant that this reason happened.
   *
   * @generated from field: google.protobuf.Timestamp occurred_at = 1;
   */
  occurredAt?: Timestamp;

  /**
   * message is the explanation for the most recent phase transition or status update.
   *
   * @generated from field: string message = 2;
   */
  message = "";

  constructor(data?: PartialMessage<Reason>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.Reason";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "occurred_at", kind: "message", T: Timestamp },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reason {
    return new Reason().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reason {
    return new Reason().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reason {
    return new Reason().fromJsonString(jsonString, options);
  }

  static equals(a: Reason | PlainMessage<Reason> | undefined, b: Reason | PlainMessage<Reason> | undefined): boolean {
    return proto3.util.equals(Reason, a, b);
  }
}

/**
 * Request structure to fetch inputs and output for a task execution.
 * By default this data is not returned inline in :ref:`ref_flyteidl.admin.TaskExecutionGetRequest`
 *
 * @generated from message flyteidl.admin.TaskExecutionGetDataRequest
 */
export class TaskExecutionGetDataRequest extends Message<TaskExecutionGetDataRequest> {
  /**
   * The identifier of the task execution for which to fetch inputs and outputs.
   * +required
   *
   * @generated from field: flyteidl.core.TaskExecutionIdentifier id = 1;
   */
  id?: TaskExecutionIdentifier;

  constructor(data?: PartialMessage<TaskExecutionGetDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskExecutionGetDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: TaskExecutionIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskExecutionGetDataRequest {
    return new TaskExecutionGetDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskExecutionGetDataRequest {
    return new TaskExecutionGetDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskExecutionGetDataRequest {
    return new TaskExecutionGetDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TaskExecutionGetDataRequest | PlainMessage<TaskExecutionGetDataRequest> | undefined, b: TaskExecutionGetDataRequest | PlainMessage<TaskExecutionGetDataRequest> | undefined): boolean {
    return proto3.util.equals(TaskExecutionGetDataRequest, a, b);
  }
}

/**
 * Response structure for TaskExecutionGetDataRequest which contains inputs and outputs for a task execution.
 *
 * @generated from message flyteidl.admin.TaskExecutionGetDataResponse
 */
export class TaskExecutionGetDataResponse extends Message<TaskExecutionGetDataResponse> {
  /**
   * Signed url to fetch a core.LiteralMap of task execution inputs.
   * Deprecated: Please use full_inputs instead.
   *
   * @generated from field: flyteidl.admin.UrlBlob inputs = 1 [deprecated = true];
   * @deprecated
   */
  inputs?: UrlBlob;

  /**
   * Signed url to fetch a core.LiteralMap of task execution outputs.
   * Deprecated: Please use full_outputs instead.
   *
   * @generated from field: flyteidl.admin.UrlBlob outputs = 2 [deprecated = true];
   * @deprecated
   */
  outputs?: UrlBlob;

  /**
   * Full_inputs will only be populated if they are under a configured size threshold.
   *
   * @generated from field: flyteidl.core.LiteralMap full_inputs = 3;
   */
  fullInputs?: LiteralMap;

  /**
   * Full_outputs will only be populated if they are under a configured size threshold.
   *
   * @generated from field: flyteidl.core.LiteralMap full_outputs = 4;
   */
  fullOutputs?: LiteralMap;

  /**
   * flyte tiny url to fetch a core.LiteralMap of task execution's IO
   * Deck will be empty for task
   *
   * @generated from field: flyteidl.admin.FlyteURLs flyte_urls = 5;
   */
  flyteUrls?: FlyteURLs;

  constructor(data?: PartialMessage<TaskExecutionGetDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskExecutionGetDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "inputs", kind: "message", T: UrlBlob },
    { no: 2, name: "outputs", kind: "message", T: UrlBlob },
    { no: 3, name: "full_inputs", kind: "message", T: LiteralMap },
    { no: 4, name: "full_outputs", kind: "message", T: LiteralMap },
    { no: 5, name: "flyte_urls", kind: "message", T: FlyteURLs },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskExecutionGetDataResponse {
    return new TaskExecutionGetDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskExecutionGetDataResponse {
    return new TaskExecutionGetDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskExecutionGetDataResponse {
    return new TaskExecutionGetDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TaskExecutionGetDataResponse | PlainMessage<TaskExecutionGetDataResponse> | undefined, b: TaskExecutionGetDataResponse | PlainMessage<TaskExecutionGetDataResponse> | undefined): boolean {
    return proto3.util.equals(TaskExecutionGetDataResponse, a, b);
  }
}

