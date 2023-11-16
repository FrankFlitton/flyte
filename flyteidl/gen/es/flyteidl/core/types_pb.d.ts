// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts+ts,keep_empty_files=false"
// @generated from file flyteidl/core/types.proto (package flyteidl.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Define a set of simple types.
 *
 * @generated from enum flyteidl.core.SimpleType
 */
export declare enum SimpleType {
  /**
   * @generated from enum value: NONE = 0;
   */
  NONE = 0,

  /**
   * @generated from enum value: INTEGER = 1;
   */
  INTEGER = 1,

  /**
   * @generated from enum value: FLOAT = 2;
   */
  FLOAT = 2,

  /**
   * @generated from enum value: STRING = 3;
   */
  STRING = 3,

  /**
   * @generated from enum value: BOOLEAN = 4;
   */
  BOOLEAN = 4,

  /**
   * @generated from enum value: DATETIME = 5;
   */
  DATETIME = 5,

  /**
   * @generated from enum value: DURATION = 6;
   */
  DURATION = 6,

  /**
   * @generated from enum value: BINARY = 7;
   */
  BINARY = 7,

  /**
   * @generated from enum value: ERROR = 8;
   */
  ERROR = 8,

  /**
   * @generated from enum value: STRUCT = 9;
   */
  STRUCT = 9,
}

/**
 * Defines schema columns and types to strongly type-validate schemas interoperability.
 *
 * @generated from message flyteidl.core.SchemaType
 */
export declare class SchemaType extends Message<SchemaType> {
  /**
   * A list of ordered columns this schema comprises of.
   *
   * @generated from field: repeated flyteidl.core.SchemaType.SchemaColumn columns = 3;
   */
  columns: SchemaType_SchemaColumn[];

  constructor(data?: PartialMessage<SchemaType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.SchemaType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SchemaType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SchemaType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SchemaType;

  static equals(a: SchemaType | PlainMessage<SchemaType> | undefined, b: SchemaType | PlainMessage<SchemaType> | undefined): boolean;
}

/**
 * @generated from message flyteidl.core.SchemaType.SchemaColumn
 */
export declare class SchemaType_SchemaColumn extends Message<SchemaType_SchemaColumn> {
  /**
   * A unique name -within the schema type- for the column
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The column type. This allows a limited set of types currently.
   *
   * @generated from field: flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType type = 2;
   */
  type: SchemaType_SchemaColumn_SchemaColumnType;

  constructor(data?: PartialMessage<SchemaType_SchemaColumn>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.SchemaType.SchemaColumn";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SchemaType_SchemaColumn;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SchemaType_SchemaColumn;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SchemaType_SchemaColumn;

  static equals(a: SchemaType_SchemaColumn | PlainMessage<SchemaType_SchemaColumn> | undefined, b: SchemaType_SchemaColumn | PlainMessage<SchemaType_SchemaColumn> | undefined): boolean;
}

/**
 * @generated from enum flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType
 */
export declare enum SchemaType_SchemaColumn_SchemaColumnType {
  /**
   * @generated from enum value: INTEGER = 0;
   */
  INTEGER = 0,

  /**
   * @generated from enum value: FLOAT = 1;
   */
  FLOAT = 1,

  /**
   * @generated from enum value: STRING = 2;
   */
  STRING = 2,

  /**
   * @generated from enum value: BOOLEAN = 3;
   */
  BOOLEAN = 3,

  /**
   * @generated from enum value: DATETIME = 4;
   */
  DATETIME = 4,

  /**
   * @generated from enum value: DURATION = 5;
   */
  DURATION = 5,
}

/**
 * @generated from message flyteidl.core.StructuredDatasetType
 */
export declare class StructuredDatasetType extends Message<StructuredDatasetType> {
  /**
   * A list of ordered columns this schema comprises of.
   *
   * @generated from field: repeated flyteidl.core.StructuredDatasetType.DatasetColumn columns = 1;
   */
  columns: StructuredDatasetType_DatasetColumn[];

  /**
   * This is the storage format, the format of the bits at rest
   * parquet, feather, csv, etc.
   * For two types to be compatible, the format will need to be an exact match.
   *
   * @generated from field: string format = 2;
   */
  format: string;

  /**
   * This is a string representing the type that the bytes in external_schema_bytes are formatted in.
   * This is an optional field that will not be used for type checking.
   *
   * @generated from field: string external_schema_type = 3;
   */
  externalSchemaType: string;

  /**
   * The serialized bytes of a third-party schema library like Arrow.
   * This is an optional field that will not be used for type checking.
   *
   * @generated from field: bytes external_schema_bytes = 4;
   */
  externalSchemaBytes: Uint8Array;

  constructor(data?: PartialMessage<StructuredDatasetType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.StructuredDatasetType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StructuredDatasetType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StructuredDatasetType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StructuredDatasetType;

  static equals(a: StructuredDatasetType | PlainMessage<StructuredDatasetType> | undefined, b: StructuredDatasetType | PlainMessage<StructuredDatasetType> | undefined): boolean;
}

/**
 * @generated from message flyteidl.core.StructuredDatasetType.DatasetColumn
 */
export declare class StructuredDatasetType_DatasetColumn extends Message<StructuredDatasetType_DatasetColumn> {
  /**
   * A unique name within the schema type for the column.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The column type.
   *
   * @generated from field: flyteidl.core.LiteralType literal_type = 2;
   */
  literalType?: LiteralType;

  constructor(data?: PartialMessage<StructuredDatasetType_DatasetColumn>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.StructuredDatasetType.DatasetColumn";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StructuredDatasetType_DatasetColumn;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StructuredDatasetType_DatasetColumn;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StructuredDatasetType_DatasetColumn;

  static equals(a: StructuredDatasetType_DatasetColumn | PlainMessage<StructuredDatasetType_DatasetColumn> | undefined, b: StructuredDatasetType_DatasetColumn | PlainMessage<StructuredDatasetType_DatasetColumn> | undefined): boolean;
}

/**
 * Defines type behavior for blob objects
 *
 * @generated from message flyteidl.core.BlobType
 */
export declare class BlobType extends Message<BlobType> {
  /**
   * Format can be a free form string understood by SDK/UI etc like
   * csv, parquet etc
   *
   * @generated from field: string format = 1;
   */
  format: string;

  /**
   * @generated from field: flyteidl.core.BlobType.BlobDimensionality dimensionality = 2;
   */
  dimensionality: BlobType_BlobDimensionality;

  constructor(data?: PartialMessage<BlobType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.BlobType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlobType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlobType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlobType;

  static equals(a: BlobType | PlainMessage<BlobType> | undefined, b: BlobType | PlainMessage<BlobType> | undefined): boolean;
}

/**
 * @generated from enum flyteidl.core.BlobType.BlobDimensionality
 */
export declare enum BlobType_BlobDimensionality {
  /**
   * @generated from enum value: SINGLE = 0;
   */
  SINGLE = 0,

  /**
   * @generated from enum value: MULTIPART = 1;
   */
  MULTIPART = 1,
}

/**
 * Enables declaring enum types, with predefined string values
 * For len(values) > 0, the first value in the ordered list is regarded as the default value. If you wish
 * To provide no defaults, make the first value as undefined.
 *
 * @generated from message flyteidl.core.EnumType
 */
export declare class EnumType extends Message<EnumType> {
  /**
   * Predefined set of enum values.
   *
   * @generated from field: repeated string values = 1;
   */
  values: string[];

  constructor(data?: PartialMessage<EnumType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.EnumType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumType;

  static equals(a: EnumType | PlainMessage<EnumType> | undefined, b: EnumType | PlainMessage<EnumType> | undefined): boolean;
}

/**
 * Defines a tagged union type, also known as a variant (and formally as the sum type).
 *
 * A sum type S is defined by a sequence of types (A, B, C, ...), each tagged by a string tag
 * A value of type S is constructed from a value of any of the variant types. The specific choice of type is recorded by
 * storing the varaint's tag with the literal value and can be examined in runtime.
 *
 * Type S is typically written as
 * S := Apple A | Banana B | Cantaloupe C | ...
 *
 * Notably, a nullable (optional) type is a sum type between some type X and the singleton type representing a null-value:
 * Optional X := X | Null
 *
 * See also: https://en.wikipedia.org/wiki/Tagged_union
 *
 * @generated from message flyteidl.core.UnionType
 */
export declare class UnionType extends Message<UnionType> {
  /**
   * Predefined set of variants in union.
   *
   * @generated from field: repeated flyteidl.core.LiteralType variants = 1;
   */
  variants: LiteralType[];

  constructor(data?: PartialMessage<UnionType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.UnionType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnionType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnionType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnionType;

  static equals(a: UnionType | PlainMessage<UnionType> | undefined, b: UnionType | PlainMessage<UnionType> | undefined): boolean;
}

/**
 * Hints to improve type matching
 * e.g. allows distinguishing output from custom type transformers
 * even if the underlying IDL serialization matches.
 *
 * @generated from message flyteidl.core.TypeStructure
 */
export declare class TypeStructure extends Message<TypeStructure> {
  /**
   * Must exactly match for types to be castable
   *
   * @generated from field: string tag = 1;
   */
  tag: string;

  /**
   * dataclass_type only exists for dataclasses.
   * This is used to resolve the type of the fields of dataclass
   * The key is the field name, and the value is the literal type of the field
   * e.g. For dataclass Foo, with fields a, and a is a string
   * Foo.a will be resolved as a literal type of string from dataclass_type
   *
   * @generated from field: map<string, flyteidl.core.LiteralType> dataclass_type = 2;
   */
  dataclassType: { [key: string]: LiteralType };

  constructor(data?: PartialMessage<TypeStructure>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.TypeStructure";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypeStructure;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypeStructure;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypeStructure;

  static equals(a: TypeStructure | PlainMessage<TypeStructure> | undefined, b: TypeStructure | PlainMessage<TypeStructure> | undefined): boolean;
}

/**
 * TypeAnnotation encapsulates registration time information about a type. This can be used for various control-plane operations. TypeAnnotation will not be available at runtime when a task runs.
 *
 * @generated from message flyteidl.core.TypeAnnotation
 */
export declare class TypeAnnotation extends Message<TypeAnnotation> {
  /**
   * A arbitrary JSON payload to describe a type.
   *
   * @generated from field: google.protobuf.Struct annotations = 1;
   */
  annotations?: Struct;

  constructor(data?: PartialMessage<TypeAnnotation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.TypeAnnotation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypeAnnotation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypeAnnotation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypeAnnotation;

  static equals(a: TypeAnnotation | PlainMessage<TypeAnnotation> | undefined, b: TypeAnnotation | PlainMessage<TypeAnnotation> | undefined): boolean;
}

/**
 * Defines a strong type to allow type checking between interfaces.
 *
 * @generated from message flyteidl.core.LiteralType
 */
export declare class LiteralType extends Message<LiteralType> {
  /**
   * @generated from oneof flyteidl.core.LiteralType.type
   */
  type: {
    /**
     * A simple type that can be compared one-to-one with another.
     *
     * @generated from field: flyteidl.core.SimpleType simple = 1;
     */
    value: SimpleType;
    case: "simple";
  } | {
    /**
     * A complex type that requires matching of inner fields.
     *
     * @generated from field: flyteidl.core.SchemaType schema = 2;
     */
    value: SchemaType;
    case: "schema";
  } | {
    /**
     * Defines the type of the value of a collection. Only homogeneous collections are allowed.
     *
     * @generated from field: flyteidl.core.LiteralType collection_type = 3;
     */
    value: LiteralType;
    case: "collectionType";
  } | {
    /**
     * Defines the type of the value of a map type. The type of the key is always a string.
     *
     * @generated from field: flyteidl.core.LiteralType map_value_type = 4;
     */
    value: LiteralType;
    case: "mapValueType";
  } | {
    /**
     * A blob might have specialized implementation details depending on associated metadata.
     *
     * @generated from field: flyteidl.core.BlobType blob = 5;
     */
    value: BlobType;
    case: "blob";
  } | {
    /**
     * Defines an enum with pre-defined string values.
     *
     * @generated from field: flyteidl.core.EnumType enum_type = 7;
     */
    value: EnumType;
    case: "enumType";
  } | {
    /**
     * Generalized schema support
     *
     * @generated from field: flyteidl.core.StructuredDatasetType structured_dataset_type = 8;
     */
    value: StructuredDatasetType;
    case: "structuredDatasetType";
  } | {
    /**
     * Defines an union type with pre-defined LiteralTypes.
     *
     * @generated from field: flyteidl.core.UnionType union_type = 10;
     */
    value: UnionType;
    case: "unionType";
  } | { case: undefined; value?: undefined };

  /**
   * This field contains type metadata that is descriptive of the type, but is NOT considered in type-checking.  This might be used by
   * consumers to identify special behavior or display extended information for the type.
   *
   * @generated from field: google.protobuf.Struct metadata = 6;
   */
  metadata?: Struct;

  /**
   * This field contains arbitrary data that might have special semantic
   * meaning for the client but does not effect internal flyte behavior.
   *
   * @generated from field: flyteidl.core.TypeAnnotation annotation = 9;
   */
  annotation?: TypeAnnotation;

  /**
   * Hints to improve type matching.
   *
   * @generated from field: flyteidl.core.TypeStructure structure = 11;
   */
  structure?: TypeStructure;

  constructor(data?: PartialMessage<LiteralType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.LiteralType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LiteralType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LiteralType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LiteralType;

  static equals(a: LiteralType | PlainMessage<LiteralType> | undefined, b: LiteralType | PlainMessage<LiteralType> | undefined): boolean;
}

/**
 * A reference to an output produced by a node. The type can be retrieved -and validated- from
 * the underlying interface of the node.
 *
 * @generated from message flyteidl.core.OutputReference
 */
export declare class OutputReference extends Message<OutputReference> {
  /**
   * Node id must exist at the graph layer.
   *
   * @generated from field: string node_id = 1;
   */
  nodeId: string;

  /**
   * Variable name must refer to an output variable for the node.
   *
   * @generated from field: string var = 2;
   */
  var: string;

  /**
   * @generated from field: repeated flyteidl.core.PromiseAttribute attr_path = 3;
   */
  attrPath: PromiseAttribute[];

  constructor(data?: PartialMessage<OutputReference>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.OutputReference";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutputReference;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutputReference;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutputReference;

  static equals(a: OutputReference | PlainMessage<OutputReference> | undefined, b: OutputReference | PlainMessage<OutputReference> | undefined): boolean;
}

/**
 * @generated from message flyteidl.core.PromiseAttribute
 */
export declare class PromiseAttribute extends Message<PromiseAttribute> {
  /**
   * @generated from oneof flyteidl.core.PromiseAttribute.value
   */
  value: {
    /**
     * @generated from field: string string_value = 1;
     */
    value: string;
    case: "stringValue";
  } | {
    /**
     * @generated from field: int32 int_value = 2;
     */
    value: number;
    case: "intValue";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<PromiseAttribute>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.PromiseAttribute";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PromiseAttribute;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PromiseAttribute;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PromiseAttribute;

  static equals(a: PromiseAttribute | PlainMessage<PromiseAttribute> | undefined, b: PromiseAttribute | PlainMessage<PromiseAttribute> | undefined): boolean;
}

/**
 * Represents an error thrown from a node.
 *
 * @generated from message flyteidl.core.Error
 */
export declare class Error extends Message<Error> {
  /**
   * The node id that threw the error.
   *
   * @generated from field: string failed_node_id = 1;
   */
  failedNodeId: string;

  /**
   * Error message thrown.
   *
   * @generated from field: string message = 2;
   */
  message: string;

  constructor(data?: PartialMessage<Error>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "flyteidl.core.Error";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Error;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Error;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Error;

  static equals(a: Error | PlainMessage<Error> | undefined, b: Error | PlainMessage<Error> | undefined): boolean;
}

