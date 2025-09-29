export interface LightVolumeDimensions {
  readonly width: number;
  readonly height: number;
  readonly depth: number;
}

export interface LightVolume {
  readonly skylight: Uint8Array;
  readonly blocklight: Uint8Array;
  readonly dimensions: LightVolumeDimensions;
}

export interface LightSource {
  readonly position: [number, number, number];
  readonly level: number;
}

export interface LightVolumeOptions {
  readonly emitters?: ReadonlyArray<LightSource>;
}

export function computeLightVolume(
  _dimensions: LightVolumeDimensions,
  _options: LightVolumeOptions,
): LightVolume {
  const size = _dimensions.width * _dimensions.height * _dimensions.depth;
  return {
    skylight: new Uint8Array(size),
    blocklight: new Uint8Array(size),
    dimensions: _dimensions,
  };
}
