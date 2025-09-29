export type JSONLoader = <T = unknown>(url: string) => Promise<T>;

export const loadJSON: JSONLoader = async <T>(_url: string) => {
  throw new Error('JSON loading not implemented');
};
