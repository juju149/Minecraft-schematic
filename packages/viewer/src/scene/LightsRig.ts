export interface CinematicLightConfig {
  readonly enabled: boolean;
}

export interface LightsRig {
  readonly configure: (config: CinematicLightConfig) => void;
}

export function createLightsRig(): LightsRig {
  return {
    configure(_config) {
      // noop
    },
  };
}
