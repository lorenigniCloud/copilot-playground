---
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript/React guidelines for this repository

Follow these when editing or creating `.ts`/`.tsx` files. Keep changes minimal and typed.

## TypeScript

- Prefer explicit types for exported functions, public props, and returns.
- Avoid `any`, `unknown` and `never`; prefer generics or exact types.
- Prefer string literal unions over `enum` unless interop requires `enum`.
- Use `type` aliases for React props and utility types; use `interface` only when you need declaration merging or extension.
- Narrow early; use user-defined type guards when helpful.
- Handle errors as `unknown` in `catch`: narrow before use.
- Prefer `readonly` arrays/tuples and immutable patterns; avoid mutating shared state.
- Use `async/await`; wrap awaited calls with try/catch where failure is plausible.
- Avoid `// @ts-ignore` and `// @ts-expect-error` unless unavoidable; add a short justification.
- Avoid non-null assertions (`!`) unless absolutely sure; prefer runtime checks.
- Avoid using `Object` type; prefer `Record<string, unknown>` or specific types.
- Avoid using the `Function` type; prefer specific function signatures.
- Avoid using nested ternary operators for complex logic. Extract them in separate statements instead.

## Error handling & logging

- Never silently swallow errors; provide context-rich messages.
- Propagate or handle errors close to where they occur.
