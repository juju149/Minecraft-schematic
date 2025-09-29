export interface TextureAtlasItem {
  readonly id: string;
  readonly width: number;
  readonly height: number;
}

export interface TextureAtlasBuildOptions {
  readonly maxSize: number;
  readonly padding: number;
}

export interface PackedTextureRegion {
  readonly id: string;
  readonly u0: number;
  readonly v0: number;
  readonly u1: number;
  readonly v1: number;
}

export interface TextureAtlasResult {
  readonly width: number;
  readonly height: number;
  readonly regions: ReadonlyArray<PackedTextureRegion>;
}

export function buildTextureAtlas(
  _items: ReadonlyArray<TextureAtlasItem>,
  _options: TextureAtlasBuildOptions,
): TextureAtlasResult {
  return {
    width: _options.maxSize,
    height: _options.maxSize,
    regions: [],
  };
}
