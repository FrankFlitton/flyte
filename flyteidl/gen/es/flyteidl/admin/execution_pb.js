// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/admin/execution.proto (package flyteidl.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, Duration, proto3, Timestamp } from "@bufbuild/protobuf";
import { LiteralMap } from "../core/literals_pb.js";
import { Identifier, NodeExecutionIdentifier, WorkflowExecutionIdentifier } from "../core/identifier_pb.js";
import { ExecutionError, QualityOfService, WorkflowExecution_Phase } from "../core/execution_pb.js";
import { Annotations, AuthRole, Envs, Labels, Notification, RawOutputDataConfig, UrlBlob } from "./common_pb.js";
import { SecurityContext } from "../core/security_pb.js";
import { ClusterAssignment } from "./cluster_assignment_pb.js";
import { Span } from "../core/metrics_pb.js";

/**
 * The state of the execution is used to control its visibility in the UI/CLI.
 *
 * @generated from enum flyteidl.admin.ExecutionState
 */
export const ExecutionState = proto3.makeEnum(
  "flyteidl.admin.ExecutionState",
  [
    {no: 0, name: "EXECUTION_ACTIVE"},
    {no: 1, name: "EXECUTION_ARCHIVED"},
  ],
);

/**
 * Request to launch an execution with the given project, domain and optionally-assigned name.
 *
 * @generated from message flyteidl.admin.ExecutionCreateRequest
 */
export const ExecutionCreateRequest = proto3.makeMessageType(
  "flyteidl.admin.ExecutionCreateRequest",
  () => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "spec", kind: "message", T: ExecutionSpec },
    { no: 5, name: "inputs", kind: "message", T: LiteralMap },
  ],
);

/**
 * Request to relaunch the referenced execution.
 *
 * @generated from message flyteidl.admin.ExecutionRelaunchRequest
 */
export const ExecutionRelaunchRequest = proto3.makeMessageType(
  "flyteidl.admin.ExecutionRelaunchRequest",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "overwrite_cache", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Request to recover the referenced execution.
 *
 * @generated from message flyteidl.admin.ExecutionRecoverRequest
 */
export const ExecutionRecoverRequest = proto3.makeMessageType(
  "flyteidl.admin.ExecutionRecoverRequest",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "message", T: ExecutionMetadata },
  ],
);

/**
 * The unique identifier for a successfully created execution.
 * If the name was *not* specified in the create request, this identifier will include a generated name.
 *
 * @generated from message flyteidl.admin.ExecutionCreateResponse
 */
export const ExecutionCreateResponse = proto3.makeMessageType(
  "flyteidl.admin.ExecutionCreateResponse",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
  ],
);

/**
 * A message used to fetch a single workflow execution entity.
 * See :ref:`ref_flyteidl.admin.Execution` for more details
 *
 * @generated from message flyteidl.admin.WorkflowExecutionGetRequest
 */
export const WorkflowExecutionGetRequest = proto3.makeMessageType(
  "flyteidl.admin.WorkflowExecutionGetRequest",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
  ],
);

/**
 * A workflow execution represents an instantiated workflow, including all inputs and additional
 * metadata as well as computed results included state, outputs, and duration-based attributes.
 * Used as a response object used in Get and List execution requests.
 *
 * @generated from message flyteidl.admin.Execution
 */
export const Execution = proto3.makeMessageType(
  "flyteidl.admin.Execution",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 2, name: "spec", kind: "message", T: ExecutionSpec },
    { no: 3, name: "closure", kind: "message", T: ExecutionClosure },
  ],
);

/**
 * Used as a response for request to list executions.
 * See :ref:`ref_flyteidl.admin.Execution` for more details
 *
 * @generated from message flyteidl.admin.ExecutionList
 */
export const ExecutionList = proto3.makeMessageType(
  "flyteidl.admin.ExecutionList",
  () => [
    { no: 1, name: "executions", kind: "message", T: Execution, repeated: true },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Input/output data can represented by actual values or a link to where values are stored
 *
 * @generated from message flyteidl.admin.LiteralMapBlob
 */
export const LiteralMapBlob = proto3.makeMessageType(
  "flyteidl.admin.LiteralMapBlob",
  () => [
    { no: 1, name: "values", kind: "message", T: LiteralMap, oneof: "data" },
    { no: 2, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "data" },
  ],
);

/**
 * Specifies metadata around an aborted workflow execution.
 *
 * @generated from message flyteidl.admin.AbortMetadata
 */
export const AbortMetadata = proto3.makeMessageType(
  "flyteidl.admin.AbortMetadata",
  () => [
    { no: 1, name: "cause", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "principal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Encapsulates the results of the Execution
 *
 * @generated from message flyteidl.admin.ExecutionClosure
 */
export const ExecutionClosure = proto3.makeMessageType(
  "flyteidl.admin.ExecutionClosure",
  () => [
    { no: 1, name: "outputs", kind: "message", T: LiteralMapBlob, oneof: "output_result" },
    { no: 2, name: "error", kind: "message", T: ExecutionError, oneof: "output_result" },
    { no: 10, name: "abort_cause", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "output_result" },
    { no: 12, name: "abort_metadata", kind: "message", T: AbortMetadata, oneof: "output_result" },
    { no: 13, name: "output_data", kind: "message", T: LiteralMap, oneof: "output_result" },
    { no: 3, name: "computed_inputs", kind: "message", T: LiteralMap },
    { no: 4, name: "phase", kind: "enum", T: proto3.getEnumType(WorkflowExecution_Phase) },
    { no: 5, name: "started_at", kind: "message", T: Timestamp },
    { no: 6, name: "duration", kind: "message", T: Duration },
    { no: 7, name: "created_at", kind: "message", T: Timestamp },
    { no: 8, name: "updated_at", kind: "message", T: Timestamp },
    { no: 9, name: "notifications", kind: "message", T: Notification, repeated: true },
    { no: 11, name: "workflow_id", kind: "message", T: Identifier },
    { no: 14, name: "state_change_details", kind: "message", T: ExecutionStateChangeDetails },
  ],
);

/**
 * Represents system, rather than user-facing, metadata about an execution.
 *
 * @generated from message flyteidl.admin.SystemMetadata
 */
export const SystemMetadata = proto3.makeMessageType(
  "flyteidl.admin.SystemMetadata",
  () => [
    { no: 1, name: "execution_cluster", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Represents attributes about an execution which are not required to launch the execution but are useful to record.
 * These attributes are assigned at launch time and do not change.
 *
 * @generated from message flyteidl.admin.ExecutionMetadata
 */
export const ExecutionMetadata = proto3.makeMessageType(
  "flyteidl.admin.ExecutionMetadata",
  () => [
    { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(ExecutionMetadata_ExecutionMode) },
    { no: 2, name: "principal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "nesting", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "scheduled_at", kind: "message", T: Timestamp },
    { no: 5, name: "parent_node_execution", kind: "message", T: NodeExecutionIdentifier },
    { no: 16, name: "reference_execution", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 17, name: "system_metadata", kind: "message", T: SystemMetadata },
  ],
);

/**
 * The method by which this execution was launched.
 *
 * @generated from enum flyteidl.admin.ExecutionMetadata.ExecutionMode
 */
export const ExecutionMetadata_ExecutionMode = proto3.makeEnum(
  "flyteidl.admin.ExecutionMetadata.ExecutionMode",
  [
    {no: 0, name: "MANUAL"},
    {no: 1, name: "SCHEDULED"},
    {no: 2, name: "SYSTEM"},
    {no: 3, name: "RELAUNCH"},
    {no: 4, name: "CHILD_WORKFLOW"},
    {no: 5, name: "RECOVERED"},
  ],
);

/**
 * @generated from message flyteidl.admin.NotificationList
 */
export const NotificationList = proto3.makeMessageType(
  "flyteidl.admin.NotificationList",
  () => [
    { no: 1, name: "notifications", kind: "message", T: Notification, repeated: true },
  ],
);

/**
 * An ExecutionSpec encompasses all data used to launch this execution. The Spec does not change over the lifetime
 * of an execution as it progresses across phase changes.
 *
 * @generated from message flyteidl.admin.ExecutionSpec
 */
export const ExecutionSpec = proto3.makeMessageType(
  "flyteidl.admin.ExecutionSpec",
  () => [
    { no: 1, name: "launch_plan", kind: "message", T: Identifier },
    { no: 2, name: "inputs", kind: "message", T: LiteralMap },
    { no: 3, name: "metadata", kind: "message", T: ExecutionMetadata },
    { no: 5, name: "notifications", kind: "message", T: NotificationList, oneof: "notification_overrides" },
    { no: 6, name: "disable_all", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "notification_overrides" },
    { no: 7, name: "labels", kind: "message", T: Labels },
    { no: 8, name: "annotations", kind: "message", T: Annotations },
    { no: 10, name: "security_context", kind: "message", T: SecurityContext },
    { no: 16, name: "auth_role", kind: "message", T: AuthRole },
    { no: 17, name: "quality_of_service", kind: "message", T: QualityOfService },
    { no: 18, name: "max_parallelism", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 19, name: "raw_output_data_config", kind: "message", T: RawOutputDataConfig },
    { no: 20, name: "cluster_assignment", kind: "message", T: ClusterAssignment },
    { no: 21, name: "interruptible", kind: "message", T: BoolValue },
    { no: 22, name: "overwrite_cache", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 23, name: "envs", kind: "message", T: Envs },
    { no: 24, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Request to terminate an in-progress execution.  This action is irreversible.
 * If an execution is already terminated, this request will simply be a no-op.
 * This request will fail if it references a non-existent execution.
 * If the request succeeds the phase "ABORTED" will be recorded for the termination
 * with the optional cause added to the output_result.
 *
 * @generated from message flyteidl.admin.ExecutionTerminateRequest
 */
export const ExecutionTerminateRequest = proto3.makeMessageType(
  "flyteidl.admin.ExecutionTerminateRequest",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 2, name: "cause", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Purposefully empty, may be populated in the future.
 *
 * @generated from message flyteidl.admin.ExecutionTerminateResponse
 */
export const ExecutionTerminateResponse = proto3.makeMessageType(
  "flyteidl.admin.ExecutionTerminateResponse",
  [],
);

/**
 * Request structure to fetch inputs, output and other data produced by an execution.
 * By default this data is not returned inline in :ref:`ref_flyteidl.admin.WorkflowExecutionGetRequest`
 *
 * @generated from message flyteidl.admin.WorkflowExecutionGetDataRequest
 */
export const WorkflowExecutionGetDataRequest = proto3.makeMessageType(
  "flyteidl.admin.WorkflowExecutionGetDataRequest",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
  ],
);

/**
 * Response structure for WorkflowExecutionGetDataRequest which contains inputs and outputs for an execution.
 *
 * @generated from message flyteidl.admin.WorkflowExecutionGetDataResponse
 */
export const WorkflowExecutionGetDataResponse = proto3.makeMessageType(
  "flyteidl.admin.WorkflowExecutionGetDataResponse",
  () => [
    { no: 1, name: "outputs", kind: "message", T: UrlBlob },
    { no: 2, name: "inputs", kind: "message", T: UrlBlob },
    { no: 3, name: "full_inputs", kind: "message", T: LiteralMap },
    { no: 4, name: "full_outputs", kind: "message", T: LiteralMap },
  ],
);

/**
 * @generated from message flyteidl.admin.ExecutionUpdateRequest
 */
export const ExecutionUpdateRequest = proto3.makeMessageType(
  "flyteidl.admin.ExecutionUpdateRequest",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(ExecutionState) },
  ],
);

/**
 * @generated from message flyteidl.admin.ExecutionStateChangeDetails
 */
export const ExecutionStateChangeDetails = proto3.makeMessageType(
  "flyteidl.admin.ExecutionStateChangeDetails",
  () => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(ExecutionState) },
    { no: 2, name: "occurred_at", kind: "message", T: Timestamp },
    { no: 3, name: "principal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message flyteidl.admin.ExecutionUpdateResponse
 */
export const ExecutionUpdateResponse = proto3.makeMessageType(
  "flyteidl.admin.ExecutionUpdateResponse",
  [],
);

/**
 * WorkflowExecutionGetMetricsRequest represents a request to retrieve metrics for the specified workflow execution.
 *
 * @generated from message flyteidl.admin.WorkflowExecutionGetMetricsRequest
 */
export const WorkflowExecutionGetMetricsRequest = proto3.makeMessageType(
  "flyteidl.admin.WorkflowExecutionGetMetricsRequest",
  () => [
    { no: 1, name: "id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 2, name: "depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * WorkflowExecutionGetMetricsResponse represents the response containing metrics for the specified workflow execution.
 *
 * @generated from message flyteidl.admin.WorkflowExecutionGetMetricsResponse
 */
export const WorkflowExecutionGetMetricsResponse = proto3.makeMessageType(
  "flyteidl.admin.WorkflowExecutionGetMetricsResponse",
  () => [
    { no: 1, name: "span", kind: "message", T: Span },
  ],
);

