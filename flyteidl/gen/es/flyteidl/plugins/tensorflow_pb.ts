// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/plugins/tensorflow.proto (package flyteidl.plugins, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Custom proto for plugin that enables distributed training using https://github.com/kubeflow/tf-operator
 *
 * @generated from message flyteidl.plugins.DistributedTensorflowTrainingTask
 */
export class DistributedTensorflowTrainingTask extends Message<DistributedTensorflowTrainingTask> {
  /**
   * number of worker replicas spawned in the cluster for this job
   *
   * @generated from field: int32 workers = 1;
   */
  workers = 0;

  /**
   * PS -> Parameter server
   * number of ps replicas spawned in the cluster for this job
   *
   * @generated from field: int32 ps_replicas = 2;
   */
  psReplicas = 0;

  /**
   * number of chief replicas spawned in the cluster for this job
   *
   * @generated from field: int32 chief_replicas = 3;
   */
  chiefReplicas = 0;

  /**
   * number of evaluator replicas spawned in the cluster for this job
   *
   * @generated from field: int32 evaluator_replicas = 4;
   */
  evaluatorReplicas = 0;

  constructor(data?: PartialMessage<DistributedTensorflowTrainingTask>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.plugins.DistributedTensorflowTrainingTask";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "workers", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "ps_replicas", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "chief_replicas", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "evaluator_replicas", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DistributedTensorflowTrainingTask {
    return new DistributedTensorflowTrainingTask().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DistributedTensorflowTrainingTask {
    return new DistributedTensorflowTrainingTask().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DistributedTensorflowTrainingTask {
    return new DistributedTensorflowTrainingTask().fromJsonString(jsonString, options);
  }

  static equals(a: DistributedTensorflowTrainingTask | PlainMessage<DistributedTensorflowTrainingTask> | undefined, b: DistributedTensorflowTrainingTask | PlainMessage<DistributedTensorflowTrainingTask> | undefined): boolean {
    return proto3.util.equals(DistributedTensorflowTrainingTask, a, b);
  }
}

