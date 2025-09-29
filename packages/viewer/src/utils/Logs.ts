export type LogLevel = 'info' | 'warn' | 'error';

export interface LogEntry {
  readonly level: LogLevel;
  readonly message: string;
}

export interface Logger {
  readonly log: (level: LogLevel, message: string) => void;
}

export function createLogger(prefix = 'viewer'): Logger {
  return {
    log(level, message) {
      // eslint-disable-next-line no-console
      console[level === 'info' ? 'log' : level](`[${prefix}] ${message}`);
    },
  };
}
