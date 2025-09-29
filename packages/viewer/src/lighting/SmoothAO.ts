export interface AmbientOcclusionSample {
  readonly corners: ReadonlyArray<number>;
}

export function computeSmoothAO(_sample: AmbientOcclusionSample): number {
  return 1.0;
}
