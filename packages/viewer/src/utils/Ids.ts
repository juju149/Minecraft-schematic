export function chunkKey(x: number, y: number, z: number): string {
  return `${x}:${y}:${z}`;
}

export function textureKey(id: string): string {
  return id;
}

export function blockKey(name: string, state: string): string {
  return `${name}[${state}]`;
}
