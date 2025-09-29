export type TextLoader = (url: string) => Promise<string>;

export const loadText: TextLoader = async (_url: string) => {
  throw new Error('Text loading not implemented');
};
