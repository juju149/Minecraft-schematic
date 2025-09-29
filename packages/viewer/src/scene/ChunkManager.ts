import { ChunkCoordinates } from './Chunker';
import { ChunkMesherResult } from './ChunkMesher';

export interface ChunkHandle {
  readonly id: string;
  readonly coordinates: ChunkCoordinates;
  readonly meshes: ChunkMesherResult;
}

export interface ChunkManager {
  readonly load: (coords: ChunkCoordinates) => Promise<ChunkHandle>;
  readonly unload: (id: string) => void;
  readonly list: () => ReadonlyArray<ChunkHandle>;
}

export function createChunkManager(): ChunkManager {
  const handles = new Map<string, ChunkHandle>();
  return {
    async load(coords) {
      const id = `${coords.x}:${coords.y}:${coords.z}`;
      const handle: ChunkHandle = { id, coordinates: coords, meshes: { meshes: [], specials: [] } };
      handles.set(id, handle);
      return handle;
    },
    unload(id) {
      handles.delete(id);
    },
    list() {
      return [...handles.values()];
    },
  };
}
