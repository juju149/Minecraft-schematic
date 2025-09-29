import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useViewerContext } from './useViewer';

export function ViewerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { renderer } = useViewerContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const threeRenderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    threeRenderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.attach(threeRenderer);
    return () => {
      renderer.detach();
      threeRenderer.dispose();
    };
  }, [renderer]);

  return <canvas ref={canvasRef} style={{ flex: 1 }} />;
}
