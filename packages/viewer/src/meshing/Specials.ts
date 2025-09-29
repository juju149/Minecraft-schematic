export interface SpecialMeshHandlerContext {
  readonly addMesh: (mesh: unknown) => void;
}

export type SpecialMeshHandler = (context: SpecialMeshHandlerContext) => void;

export function registerSpecial(_id: string, _handler: SpecialMeshHandler): void {
  // registry placeholder
}
