import { useViewerContext } from './useViewer';

export function DebugPanel() {
  const { chunkManager } = useViewerContext();
  const chunks = chunkManager.list();

  return (
    <aside style={{ width: 320, background: '#111', color: '#eee', padding: 16 }}>
      <h2>Debug Panel</h2>
      <p>Chunks loaded: {chunks.length}</p>
      <button type="button" onClick={() => console.log('Toggle AO')}>
        Toggle AO
      </button>
    </aside>
  );
}
