export interface BiomeColorMap {
  readonly grass: Uint8Array;
  readonly foliage: Uint8Array;
  readonly water: Uint8Array;
}

export function createDefaultBiomeColors(): BiomeColorMap {
  return {
    grass: new Uint8Array([0, 255, 0, 255]),
    foliage: new Uint8Array([0, 255, 0, 255]),
    water: new Uint8Array([64, 64, 255, 255]),
  };
}

export function sampleBiomeColor(_map: Uint8Array, _temperature: number, _humidity: number): [number, number, number] {
  void _map;
  void _temperature;
  void _humidity;
  return [1, 1, 1];
}
