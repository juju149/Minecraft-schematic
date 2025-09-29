export interface GreedyQuad {
  readonly positions: Float32Array;
  readonly uvs: Float32Array;
  readonly normals: Float32Array;
}

export interface GreedyMeshResult {
  readonly quads: ReadonlyArray<GreedyQuad>;
}

export interface GreedyMesherInput {
  readonly voxels: Uint16Array;
  readonly size: [number, number, number];
}

export function buildGreedyMesh(_input: GreedyMesherInput): GreedyMeshResult {
  return { quads: [] };
}
