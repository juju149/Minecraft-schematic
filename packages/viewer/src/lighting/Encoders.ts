export interface VertexLighting {
  readonly light: number;
  readonly ao: number;
}

export function encodeToVertexColor(_lighting: VertexLighting): [number, number, number, number] {
  return [1, 1, 1, 1];
}

export function encodeToUV2(_lighting: VertexLighting): [number, number] {
  return [0, 0];
}
