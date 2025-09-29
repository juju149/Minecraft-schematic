export interface SortableMesh {
  readonly id: string;
  readonly distance: number;
}

export function sortTranslucentMeshes(meshes: SortableMesh[]): SortableMesh[] {
  return [...meshes].sort((a, b) => b.distance - a.distance);
}
