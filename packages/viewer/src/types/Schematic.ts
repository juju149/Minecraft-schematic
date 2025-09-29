export interface SchematicMetadata {
  readonly author?: string;
  readonly name?: string;
  readonly description?: string;
}

export interface SchematicData {
  readonly size: [number, number, number];
  readonly blocks: Uint16Array;
  readonly palette: ReadonlyArray<string>;
  readonly metadata?: SchematicMetadata;
}
