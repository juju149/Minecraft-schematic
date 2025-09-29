import { TextureAtlasResult } from './TextureAtlas';

export interface AtlasCacheKey {
  readonly textures: ReadonlyArray<string>;
}

export interface AtlasCache {
  get(key: AtlasCacheKey): TextureAtlasResult | undefined;
  set(key: AtlasCacheKey, atlas: TextureAtlasResult): void;
  clear(): void;
}

export function createAtlasCache(): AtlasCache {
  return {
    get(_key) {
      return undefined;
    },
    set(_key, _atlas) {
      // noop
    },
    clear() {
      // noop
    },
  };
}
