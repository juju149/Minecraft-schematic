import { ResolvedFace } from '../core/BlockstateModel/Types';

export interface NeighborQuery {
  readonly isOpaque: (x: number, y: number, z: number) => boolean;
}

export function shouldCullFace(
  face: ResolvedFace,
  neighbor: NeighborQuery,
  position: [number, number, number],
): boolean {
  void face;
  void neighbor;
  void position;
  return false;
}
