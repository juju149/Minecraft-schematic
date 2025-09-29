export type ImageLoader = (url: string) => Promise<ImageBitmap>;

export const loadImage: ImageLoader = async (_url: string) => {
  throw new Error('Image loading not implemented');
};
