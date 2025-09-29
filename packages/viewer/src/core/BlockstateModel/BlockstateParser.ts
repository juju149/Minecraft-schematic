import { BlockstateDefinition } from './Types';

export interface BlockstateParseOptions {
  readonly id: string;
}

export function parseBlockstate(_json: unknown, _options: BlockstateParseOptions): BlockstateDefinition {
  throw new Error('Blockstate parsing not implemented');
}
