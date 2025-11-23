---
applyTo: "**/*.ts,**/*.tsx"
---

## React (TSX)

- Component naming: PascalCase; file name matches exported component.
- Callback definition for Components
- Prefer named exports over default to aid refactors.
- Props: define `interface Props { ... }`; avoid `React.FC` unless children typing is explicitly needed.
- Event types: use precise React types (e.g., `React.ChangeEvent<HTMLInputElement>`).
- State: type explicitly when inference is unclear; initialize with sensible defaults.
- Effects: include complete dependency arrays; add cleanup where appropriate; avoid doing data transforms in `render` that can be memoized.
- Memoization: use `useCallback`/`useMemo` for expensive work or stable deps; don’t overuse—measure if re-renders are an issue.
- Accessibility: ensure interactive elements are keyboard-accessible and labeled (aria-\* as needed).
- Lift state up when needed and pass setter function down to components.
- Create reusable components/hooks for repeated patterns; avoid passing entire object types as props, until necessary.
- Reuse same components for visualization and editing when possible (e.g., a `UserCard` used in both view and edit modes).

## Imports & style

- Keep import paths relative and consistent; group React, libs, then local modules.
- No wildcard (`* as`) imports for React; use `import React from 'react'` only when required by tooling.
- Keep formatting consistent (Prettier/ESLint). Do not reformat unrelated files.

## Examples

- Exported function with explicit return type:

```ts
export const formatDateISO = (d: Date): string => {
  return d.toISOString();
};
```

- Props typing without React.FC:

```tsx
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
export default Button;
```

- Pass setter functions as props:

```tsx
interface ParentComponentProps {
  initialCount: number;
}

export const ParentComponent = ({ initialCount }: ParentComponentProps) => {
  const [count, setCount] = useState(initialCount);

  return <ChildComponent count={count} setCount={setCount} />;
};

interface ChildComponentProps {
  count: number;
  setCount: (count: number) => void;
}

export const ChildComponent = ({ count, setCount }: ChildComponentProps) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```
