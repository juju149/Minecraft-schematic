export interface AnimationFrame {
  readonly index: number;
  readonly duration: number;
}

export interface TextureAnimation {
  readonly frames: ReadonlyArray<AnimationFrame>;
  readonly interpolate: boolean;
  readonly width: number;
  readonly height: number;
}

export interface AnimationState {
  readonly animation: TextureAnimation;
  time: number;
}

export function parseAnimation(_json: unknown): TextureAnimation {
  throw new Error('Animation parsing not implemented');
}

export function advanceAnimation(state: AnimationState, dt: number): number {
  if (!state.animation.frames.length) {
    return 0;
  }
  state.time = (state.time + dt) % state.animation.frames[0].duration;
  return state.animation.frames[0].index;
}
