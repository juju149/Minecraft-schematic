export interface BlockStateDefinition {
  readonly id: string;
  readonly properties: Record<string, string>;
}

export interface BlockDefinition {
  readonly name: string;
  readonly defaultState: BlockStateDefinition;
}
