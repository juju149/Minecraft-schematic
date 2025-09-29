export interface NamespaceResolution {
  readonly namespace: string;
  readonly id: string;
}

export function parseNamespaceId(value: string): NamespaceResolution {
  const [namespace, id] = value.includes(':') ? value.split(':', 2) : ['minecraft', value];
  return { namespace, id };
}

export function resolveResourcePath(kind: string, nsId: string): string {
  const { namespace, id } = parseNamespaceId(nsId);
  return `${namespace}/${kind}/${id}`;
}
