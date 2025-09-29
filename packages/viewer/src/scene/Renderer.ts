import { sortTranslucentMeshes } from '../transparency/TranslucentSorter';
import { ChunkManager } from './ChunkManager';

export interface RenderContext {
  readonly chunkManager: ChunkManager;
}

export interface Renderer {
  readonly tick: (dt: number) => void;
  readonly render: () => void;
}

export function createRenderer(context: RenderContext): Renderer {
  return {
    tick(_dt: number) {
      const chunks = context.chunkManager.list();
      const translucent = chunks.flatMap((chunk) => chunk.meshes.meshes);
      sortTranslucentMeshes(
        translucent.map((mesh, index) => ({ id: `${index}`, distance: index })),
      );
    },
    render() {
      // Rendering placeholder
    },
  };
}
