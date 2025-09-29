import { PackScanResult } from './PackTypes';

export interface PackIndex {
  readonly scan: () => Promise<PackScanResult>;
  readonly getBlockstate: (id: string) => string | undefined;
  readonly getModel: (id: string) => string | undefined;
  readonly getTextureUrl: (id: string) => string | undefined;
  readonly getMcmeta: (url: string) => string | undefined;
}

export interface PackIndexOptions {
  readonly resourceRoot: string;
}

export function createPackIndex(_options: PackIndexOptions): PackIndex {
  return {
    async scan() {
      return {
        blockstates: new Map(),
        models: new Map(),
        textures: new Map(),
        mcmeta: new Map(),
      };
    },
    getBlockstate(_id: string) {
      return undefined;
    },
    getModel(_id: string) {
      return undefined;
    },
    getTextureUrl(_id: string) {
      return undefined;
    },
    getMcmeta(_url: string) {
      return undefined;
    },
  };
}
