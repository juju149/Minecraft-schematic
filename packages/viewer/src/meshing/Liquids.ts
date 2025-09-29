export interface LiquidQuad {
  readonly vertices: Float32Array;
  readonly uvs: Float32Array;
  readonly alpha: number;
}

export interface LiquidContext {
  readonly level: number;
  readonly flow: number;
}

export function buildLiquidMesh(_context: LiquidContext): LiquidQuad {
  return {
    vertices: new Float32Array(),
    uvs: new Float32Array(),
    alpha: 0.8,
  };
}
