import { BlockstateDefinition, ResolvedBlockstate, ResolvedModel } from './Types';

export interface ModelResolverContext {
  readonly resolveModelJson: (id: string) => Promise<unknown>;
  readonly resolveTexture: (id: string) => string | undefined;
}

export interface ModelResolverOptions {
  readonly context: ModelResolverContext;
}

export async function resolveBlockstateModels(
  _definition: BlockstateDefinition,
  _options: ModelResolverOptions,
): Promise<ResolvedBlockstate> {
  throw new Error('Model resolution not implemented');
}

export async function resolveModel(_id: string, _options: ModelResolverOptions): Promise<ResolvedModel> {
  throw new Error('Model resolution not implemented');
}
