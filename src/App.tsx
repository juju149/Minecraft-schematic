import { ViewerProvider } from '../packages/viewer/src/react/useViewer';
import { ViewerCanvas } from '../packages/viewer/src/react/ViewerCanvas';
import { DebugPanel } from '../packages/viewer/src/react/DebugPanel';

function App() {
  return (
    <ViewerProvider>
      <div style={{ display: 'flex', height: '100vh' }}>
        <ViewerCanvas />
        <DebugPanel />
      </div>
    </ViewerProvider>
  );
}

export default App;
