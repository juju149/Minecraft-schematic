export interface ViewerWorldState {
  readonly chunksLoaded: number;
  readonly drawCalls: number;
}

export interface ViewerAPI {
  readonly loadPack: (url: string) => Promise<void>;
  readonly loadSchematic: (data: ArrayBuffer) => Promise<void>;
  readonly buildWorld: () => Promise<void>;
  readonly tick: (dt: number) => void;
  readonly setSettings: (settings: Record<string, unknown>) => void;
  readonly setBiome: (id: string) => void;
  readonly toggleCinematicLighting: (enabled: boolean) => void;
  readonly showAtlas: () => void;
  readonly showBounds: (enabled: boolean) => void;
  readonly dumpStats: () => ViewerWorldState;
}
