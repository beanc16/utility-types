export type Optional<Input, Keys extends keyof Input = keyof Input> =
    Omit<Input, Keys>
    & Partial<
        Pick<Input, Keys>
    >;
