// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/plugins/waitable.proto (package flyteidl.plugins, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { WorkflowExecutionIdentifier } from "../core/identifier_pb.js";
import { WorkflowExecution_Phase } from "../core/execution_pb.js";

/**
 * Represents an Execution that was launched and could be waited on.
 *
 * @generated from message flyteidl.plugins.Waitable
 */
export class Waitable extends Message<Waitable> {
  /**
   * @generated from field: flyteidl.core.WorkflowExecutionIdentifier wf_exec_id = 1;
   */
  wfExecId?: WorkflowExecutionIdentifier;

  /**
   * @generated from field: flyteidl.core.WorkflowExecution.Phase phase = 2;
   */
  phase = WorkflowExecution_Phase.UNDEFINED;

  /**
   * @generated from field: string workflow_id = 3;
   */
  workflowId = "";

  constructor(data?: PartialMessage<Waitable>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.plugins.Waitable";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "wf_exec_id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 2, name: "phase", kind: "enum", T: proto3.getEnumType(WorkflowExecution_Phase) },
    { no: 3, name: "workflow_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Waitable {
    return new Waitable().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Waitable {
    return new Waitable().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Waitable {
    return new Waitable().fromJsonString(jsonString, options);
  }

  static equals(a: Waitable | PlainMessage<Waitable> | undefined, b: Waitable | PlainMessage<Waitable> | undefined): boolean {
    return proto3.util.equals(Waitable, a, b);
  }
}

