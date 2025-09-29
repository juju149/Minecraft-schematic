export interface BiomeSample {
  readonly id: string;
  readonly temperature: number;
  readonly humidity: number;
}

export interface BiomeProvider {
  sample(x: number, z: number): BiomeSample;
}

export function createDefaultBiomeProvider(): BiomeProvider {
  return {
    sample() {
      return {
        id: 'minecraft:plains',
        temperature: 0.8,
        humidity: 0.4,
      };
    },
  };
}
