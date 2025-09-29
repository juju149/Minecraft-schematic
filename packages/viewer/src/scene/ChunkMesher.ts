import { RenderLayer } from '../transparency/Layers';

export interface ChunkMesh {
  readonly layer: RenderLayer;
  readonly geometry: unknown;
}

export interface ChunkMesherResult {
  readonly meshes: ReadonlyArray<ChunkMesh>;
  readonly specials: ReadonlyArray<unknown>;
}

export interface ChunkMesherContext {
  readonly chunkId: string;
}

export function meshChunk(_context: ChunkMesherContext): ChunkMesherResult {
  return {
    meshes: [],
    specials: [],
  };
}
