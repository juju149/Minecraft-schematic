export interface DebugStats {
  readonly drawCalls: number;
  readonly faceCount: number;
}

export interface DebugInterface {
  readonly showBounds: (enabled: boolean) => void;
  readonly showAtlas: () => void;
  readonly dumpStats: () => DebugStats;
}

export function createDebugInterface(): DebugInterface {
  return {
    showBounds(_enabled: boolean) {
      // noop
    },
    showAtlas() {
      // noop
    },
    dumpStats() {
      return { drawCalls: 0, faceCount: 0 };
    },
  };
}
