export type NonOptional<Input, Keys extends keyof Input = keyof Input> =
    Omit<Input, Keys>
    & Required<
        Pick<Input, Keys>
    >;
