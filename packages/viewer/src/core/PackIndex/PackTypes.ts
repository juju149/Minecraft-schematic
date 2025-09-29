export interface BlockstateEntry {
  readonly id: string;
  readonly url: string;
}

export interface ModelEntry {
  readonly id: string;
  readonly url: string;
}

export interface TextureEntry {
  readonly id: string;
  readonly url: string;
}

export interface McmetaEntry {
  readonly url: string;
}

export interface PackScanResult {
  readonly blockstates: ReadonlyMap<string, BlockstateEntry>;
  readonly models: ReadonlyMap<string, ModelEntry>;
  readonly textures: ReadonlyMap<string, TextureEntry>;
  readonly mcmeta: ReadonlyMap<string, McmetaEntry>;
}
