export interface VariantRotation {
  readonly x?: number;
  readonly y?: number;
}

export interface VariantDefinition {
  readonly model: string;
  readonly weight?: number;
  readonly uvlock?: boolean;
  readonly rotation?: VariantRotation;
}

export interface MultipartCondition {
  readonly when?: Record<string, string | string[]>;
  readonly apply: VariantDefinition | VariantDefinition[];
}

export interface BlockstateDefinition {
  readonly variants?: Record<string, VariantDefinition | VariantDefinition[]>;
  readonly multipart?: MultipartCondition[];
}

export interface ResolvedFace {
  readonly texture: string;
  readonly uv?: [number, number, number, number];
  readonly rotation?: 0 | 90 | 180 | 270;
  readonly tintIndex?: number;
  readonly cullFace?: string;
  readonly shade: boolean;
}

export interface ElementRotation {
  readonly origin: [number, number, number];
  readonly axis: 'x' | 'y' | 'z';
  readonly angle: -45 | -22.5 | 0 | 22.5 | 45;
  readonly rescale?: boolean;
}

export interface ModelElement {
  readonly from: [number, number, number];
  readonly to: [number, number, number];
  readonly rotation?: ElementRotation;
  readonly shade?: boolean;
  readonly faces: Partial<Record<'up' | 'down' | 'north' | 'south' | 'west' | 'east', ResolvedFace>>;
}

export interface ResolvedModel {
  readonly elements: ReadonlyArray<ModelElement>;
  readonly textures: Record<string, string>;
  readonly ambientOcclusion: boolean;
  readonly parent?: string;
}

export interface ResolvedVariant {
  readonly model: ResolvedModel;
  readonly weight: number;
}

export interface ResolvedBlockstate {
  readonly variants: ReadonlyMap<string, ReadonlyArray<ResolvedVariant>>;
  readonly multipart: ReadonlyArray<ResolvedVariant>;
}
