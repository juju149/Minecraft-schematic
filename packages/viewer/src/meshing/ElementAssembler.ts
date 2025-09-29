import { ModelElement } from '../core/BlockstateModel/Types';

export interface AssembledElement {
  readonly vertices: Float32Array;
  readonly uvs: Float32Array;
  readonly indices: Uint16Array;
}

export interface ElementAssemblyContext {
  readonly tintColor: (index: number) => [number, number, number];
}

export function assembleElement(
  _element: ModelElement,
  _context: ElementAssemblyContext,
): AssembledElement {
  return {
    vertices: new Float32Array(),
    uvs: new Float32Array(),
    indices: new Uint16Array(),
  };
}
