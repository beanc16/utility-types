/**
 * Creates a type where at least one property from the original type T is required,
 * while all other properties remain optional.
 *
 * @template T - The original object type
 * @template K - The keys of T to consider (defaults to all keys of T)
 *
 * @example
 * ```typescript
 * interface User {
 *   email?: string;
 *   phone?: string;
 *   username?: string;
 * }
 *
 * type UserWithAtLeastOne = AtLeastOne<User>;
 * // Requires at least one of email, phone, or username
 *
 * const validUser: UserWithAtLeastOne = { email: "test@example.com" }; // ✓
 * const invalidUser: UserWithAtLeastOne = {}; // ✗ Error: at least one property required
 * ```
 *
 * @example
 * ```typescript
 * interface ContactInfo {
 *   email?: string;
 *   phone?: string;
 *   address?: string;
 * }
 *
 * // Require at least one of email or phone, address remains optional
 * type ContactWithEmailOrPhone = AtLeastOne<ContactInfo, "email" | "phone">;
 *
 * const valid: ContactWithEmailOrPhone = { email: "test@example.com", address: "123 Main St" }; // ✓
 * const invalid: ContactWithEmailOrPhone = { address: "123 Main St" }; // ✗ Error: need email or phone
 * ```
 */
export type AtLeastOne<T, K extends keyof T = keyof T> = K extends keyof T
    ? Required<Pick<T, K>> & Partial<Omit<T, K>>
    : never;
