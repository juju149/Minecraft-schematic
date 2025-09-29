export interface ViewerSettings {
  readonly useAtlas: boolean;
  readonly enableAnimations: boolean;
  readonly aoOn: boolean;
  readonly waterAlpha: number;
  readonly mipmapsOn: boolean;
}

export const defaultSettings: ViewerSettings = {
  useAtlas: true,
  enableAnimations: true,
  aoOn: true,
  waterAlpha: 0.8,
  mipmapsOn: true,
};

export type PartialSettings = Partial<ViewerSettings>;

export function mergeSettings(current: ViewerSettings, next: PartialSettings): ViewerSettings {
  return { ...current, ...next };
}
