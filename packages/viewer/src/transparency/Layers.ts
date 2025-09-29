export enum RenderLayer {
  Opaque = 'opaque',
  Cutout = 'cutout',
  Translucent = 'translucent',
}

export interface LayerClassification {
  readonly layer: RenderLayer;
  readonly depthWrite: boolean;
  readonly transparent: boolean;
}

export function classifyMaterial(_alpha: number, _transparent: boolean): LayerClassification {
  return {
    layer: RenderLayer.Opaque,
    depthWrite: true,
    transparent: _transparent,
  };
}
