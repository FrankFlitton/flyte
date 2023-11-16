// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/service/external_plugin_service.proto (package flyteidl.service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { LiteralMap } from "../core/literals_pb.js";
import { TaskTemplate } from "../core/tasks_pb.js";

/**
 * The state of the execution is used to control its visibility in the UI/CLI.
 *
 * @generated from enum flyteidl.service.State
 * @deprecated
 */
export enum State {
  /**
   * @generated from enum value: RETRYABLE_FAILURE = 0;
   */
  RETRYABLE_FAILURE = 0,

  /**
   * @generated from enum value: PERMANENT_FAILURE = 1;
   */
  PERMANENT_FAILURE = 1,

  /**
   * @generated from enum value: PENDING = 2;
   */
  PENDING = 2,

  /**
   * @generated from enum value: RUNNING = 3;
   */
  RUNNING = 3,

  /**
   * @generated from enum value: SUCCEEDED = 4;
   */
  SUCCEEDED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(State)
proto3.util.setEnumType(State, "flyteidl.service.State", [
  { no: 0, name: "RETRYABLE_FAILURE" },
  { no: 1, name: "PERMANENT_FAILURE" },
  { no: 2, name: "PENDING" },
  { no: 3, name: "RUNNING" },
  { no: 4, name: "SUCCEEDED" },
]);

/**
 * Represents a request structure to create task.
 *
 * @generated from message flyteidl.service.TaskCreateRequest
 * @deprecated
 */
export class TaskCreateRequest extends Message<TaskCreateRequest> {
  /**
   * The inputs required to start the execution. All required inputs must be
   * included in this map. If not required and not provided, defaults apply.
   * +optional
   *
   * @generated from field: flyteidl.core.LiteralMap inputs = 1;
   */
  inputs?: LiteralMap;

  /**
   * Template of the task that encapsulates all the metadata of the task.
   *
   * @generated from field: flyteidl.core.TaskTemplate template = 2;
   */
  template?: TaskTemplate;

  /**
   * Prefix for where task output data will be written. (e.g. s3://my-bucket/randomstring)
   *
   * @generated from field: string output_prefix = 3;
   */
  outputPrefix = "";

  constructor(data?: PartialMessage<TaskCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.service.TaskCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "inputs", kind: "message", T: LiteralMap },
    { no: 2, name: "template", kind: "message", T: TaskTemplate },
    { no: 3, name: "output_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskCreateRequest {
    return new TaskCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskCreateRequest {
    return new TaskCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskCreateRequest {
    return new TaskCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TaskCreateRequest | PlainMessage<TaskCreateRequest> | undefined, b: TaskCreateRequest | PlainMessage<TaskCreateRequest> | undefined): boolean {
    return proto3.util.equals(TaskCreateRequest, a, b);
  }
}

/**
 * Represents a create response structure.
 *
 * @generated from message flyteidl.service.TaskCreateResponse
 * @deprecated
 */
export class TaskCreateResponse extends Message<TaskCreateResponse> {
  /**
   * @generated from field: string job_id = 1;
   */
  jobId = "";

  constructor(data?: PartialMessage<TaskCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.service.TaskCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskCreateResponse {
    return new TaskCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskCreateResponse {
    return new TaskCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskCreateResponse {
    return new TaskCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TaskCreateResponse | PlainMessage<TaskCreateResponse> | undefined, b: TaskCreateResponse | PlainMessage<TaskCreateResponse> | undefined): boolean {
    return proto3.util.equals(TaskCreateResponse, a, b);
  }
}

/**
 * A message used to fetch a job state from backend plugin server.
 *
 * @generated from message flyteidl.service.TaskGetRequest
 * @deprecated
 */
export class TaskGetRequest extends Message<TaskGetRequest> {
  /**
   * A predefined yet extensible Task type identifier.
   *
   * @generated from field: string task_type = 1;
   */
  taskType = "";

  /**
   * The unique id identifying the job.
   *
   * @generated from field: string job_id = 2;
   */
  jobId = "";

  constructor(data?: PartialMessage<TaskGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.service.TaskGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "task_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskGetRequest {
    return new TaskGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskGetRequest {
    return new TaskGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskGetRequest {
    return new TaskGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TaskGetRequest | PlainMessage<TaskGetRequest> | undefined, b: TaskGetRequest | PlainMessage<TaskGetRequest> | undefined): boolean {
    return proto3.util.equals(TaskGetRequest, a, b);
  }
}

/**
 * Response to get an individual task state.
 *
 * @generated from message flyteidl.service.TaskGetResponse
 * @deprecated
 */
export class TaskGetResponse extends Message<TaskGetResponse> {
  /**
   * The state of the execution is used to control its visibility in the UI/CLI.
   *
   * @generated from field: flyteidl.service.State state = 1;
   */
  state = State.RETRYABLE_FAILURE;

  /**
   * The outputs of the execution. It's typically used by sql task. Flyteplugins service will create a
   * Structured dataset pointing to the query result table.
   * +optional
   *
   * @generated from field: flyteidl.core.LiteralMap outputs = 2;
   */
  outputs?: LiteralMap;

  constructor(data?: PartialMessage<TaskGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.service.TaskGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(State) },
    { no: 2, name: "outputs", kind: "message", T: LiteralMap },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskGetResponse {
    return new TaskGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskGetResponse {
    return new TaskGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskGetResponse {
    return new TaskGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TaskGetResponse | PlainMessage<TaskGetResponse> | undefined, b: TaskGetResponse | PlainMessage<TaskGetResponse> | undefined): boolean {
    return proto3.util.equals(TaskGetResponse, a, b);
  }
}

/**
 * A message used to delete a task.
 *
 * @generated from message flyteidl.service.TaskDeleteRequest
 * @deprecated
 */
export class TaskDeleteRequest extends Message<TaskDeleteRequest> {
  /**
   * A predefined yet extensible Task type identifier.
   *
   * @generated from field: string task_type = 1;
   */
  taskType = "";

  /**
   * The unique id identifying the job.
   *
   * @generated from field: string job_id = 2;
   */
  jobId = "";

  constructor(data?: PartialMessage<TaskDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.service.TaskDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "task_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskDeleteRequest {
    return new TaskDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskDeleteRequest {
    return new TaskDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskDeleteRequest {
    return new TaskDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TaskDeleteRequest | PlainMessage<TaskDeleteRequest> | undefined, b: TaskDeleteRequest | PlainMessage<TaskDeleteRequest> | undefined): boolean {
    return proto3.util.equals(TaskDeleteRequest, a, b);
  }
}

/**
 * Response to delete a task.
 *
 * @generated from message flyteidl.service.TaskDeleteResponse
 * @deprecated
 */
export class TaskDeleteResponse extends Message<TaskDeleteResponse> {
  constructor(data?: PartialMessage<TaskDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.service.TaskDeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskDeleteResponse {
    return new TaskDeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskDeleteResponse {
    return new TaskDeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskDeleteResponse {
    return new TaskDeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TaskDeleteResponse | PlainMessage<TaskDeleteResponse> | undefined, b: TaskDeleteResponse | PlainMessage<TaskDeleteResponse> | undefined): boolean {
    return proto3.util.equals(TaskDeleteResponse, a, b);
  }
}

