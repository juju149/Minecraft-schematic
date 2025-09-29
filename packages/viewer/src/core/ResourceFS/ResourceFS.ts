export interface ResourceDescriptor {
  readonly namespace: string;
  readonly path: string;
}

export interface ResourceOverrides {
  readonly roots: ReadonlyArray<string>;
}

export interface ResourceFS {
  exists(url: string): Promise<boolean>;
  readJSON<T = unknown>(url: string): Promise<T>;
  readImageBitmap(url: string): Promise<ImageBitmap>;
  readText(url: string): Promise<string>;
  resolvePath(kind: string, nsId: string): string;
}

export type ResourceLoader = (url: string) => Promise<unknown>;

export interface ResourceFSOptions {
  readonly baseUrl: string;
  readonly overrides?: ResourceOverrides;
  readonly loaders?: Partial<ResourceLoaders>;
}

export interface ResourceLoaders {
  readonly json: ResourceLoader;
  readonly image: ResourceLoader;
  readonly text: ResourceLoader;
}

export function createResourceFS(_options: ResourceFSOptions): ResourceFS {
  return {
    async exists(_url: string) {
      return false;
    },
    async readJSON(_url) {
      throw new Error('readJSON not implemented');
    },
    async readImageBitmap(_url) {
      throw new Error('readImageBitmap not implemented');
    },
    async readText(_url) {
      throw new Error('readText not implemented');
    },
    resolvePath(_kind: string, _nsId: string) {
      throw new Error('resolvePath not implemented');
    },
  };
}
