/**
 * A single entry in Object.entries
 */
export type Entry<O, K extends keyof O> = [K, O[K]];

/**
 * The output of Object.entries
 */
export type Entries<O> = Entry<O, keyof O>[];
