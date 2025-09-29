export interface ChunkCoordinates {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export interface ChunkData {
  readonly blocks: Uint16Array;
  readonly size: [number, number, number];
}

export interface Chunker {
  readonly getBlock: (x: number, y: number, z: number) => number;
  readonly loadChunk: (coords: ChunkCoordinates) => ChunkData | undefined;
}

export interface ChunkerOptions {
  readonly chunkSize: [number, number, number];
}

export function createChunker(_options: ChunkerOptions): Chunker {
  return {
    getBlock() {
      return 0;
    },
    loadChunk() {
      return undefined;
    },
  };
}
