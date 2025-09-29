import { createContext, ReactNode, useContext, useMemo } from 'react';
import { createChunkManager } from '../scene/ChunkManager';
import { createRenderer } from '../scene/Renderer';

export interface RendererHandle {
  readonly attach: (renderer: unknown) => void;
  readonly detach: () => void;
}

export interface ViewerContextValue {
  readonly chunkManager: ReturnType<typeof createChunkManager>;
  readonly renderer: RendererHandle;
}

const ViewerContext = createContext<ViewerContextValue | undefined>(undefined);

function createRendererHandle(): RendererHandle {
  let current: unknown;
  return {
    attach(renderer: unknown) {
      current = renderer;
    },
    detach() {
      current = undefined;
    },
  };
}

export function ViewerProvider({ children }: { children: ReactNode }) {
  const value = useMemo<ViewerContextValue>(() => {
    const chunkManager = createChunkManager();
    const renderer = createRenderer({ chunkManager });
    const handle = createRendererHandle();
    void renderer;
    return {
      chunkManager,
      renderer: handle,
    };
  }, []);

  return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>;
}

export function useViewerContext(): ViewerContextValue {
  const ctx = useContext(ViewerContext);
  if (!ctx) {
    throw new Error('ViewerContext missing');
  }
  return ctx;
}
