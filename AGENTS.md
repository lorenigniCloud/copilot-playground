# Agent Guidelines

Repository instructions for AI coding agents working in this codebase.

## Build & Validation Commands

Always run these after making changes:

```bash
# Install dependencies (after package.json changes)
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Linting
pnpm lint

# Type checking (via build)
pnpm build
```

**No test runner is currently configured.** If tests are needed, use Jest + React Testing Library and add a `pnpm test` script.

## Package Management

- **Package manager**: `pnpm@8.0.0` (enforced via `packageManager` field)
- **Node.js**: LTS 18+ recommended
- Never edit `pnpm-lock.yaml` manually
- Always run `pnpm install` after modifying `package.json`

## Project Structure

```
app/                    # Next.js App Router routes & layouts
components/             # Reusable React components (PascalCase files)
lib/                    # Third-party configs & utilities
hooks/                  # Custom React hooks
actions/                # Server Actions
public/                 # Static assets
docs/                   # Documentation (Italian preferred)
```

## TypeScript Conventions

- **Strict mode**: Enabled (`strict: true`)
- **Target**: ES2022
- **Module**: ESNext with Bundler resolution
- **Path alias**: Use `@/` for root-relative imports
- **Types**: Avoid `any`, prefer `unknown` with type guards
- **Naming**: PascalCase for components/types, camelCase for functions/variables
- **Exports**: Named exports preferred over default
- **Props**: Define explicit `interface Props` or `type Props`, avoid `React.FC`
- **Readonly**: Use `Readonly<Props>` to prevent mutations
- **Error handling**: Handle errors as `unknown` in catch blocks, narrow before use
- **Event types**: Use precise React types (e.g., `React.ChangeEvent<HTMLInputElement>`)

## React & Next.js Patterns

- **Components**: Functional only, no class components
- **Client components**: Add `"use client"` directive at top
- **File naming**: Component file name must match exported component name
- **Props destructuring**: Inside component body, not in function parameters
- **State**: Use `useState` for local state, lift state when needed
- **Server/Client pattern**: Keep data fetching in server components, wrap with client components for interactivity
- **Metadata**: Export `metadata` object in layout files
- **Loading states**: Create `loading.tsx` at route level for new routes
- **Accessibility**: Interactive elements must be keyboard accessible with proper `aria-*` attributes
- **Responsive**: Must work across breakpoints

## Code Style

- **Linting**: Uses Next.js ESLint config (`next/core-web-vitals`)
- **Imports**: Absolute imports via `@/` alias
- **Comments**: Avoid unnecessary comments
- **Complexity**: Avoid nested ternary operators, extract to statements
- **Mutations**: Prefer immutable patterns, avoid mutating shared state
- **Async**: Use `async/await` with try/catch for error handling
- **Type guards**: Narrow types early, use user-defined type guards

## Localization

- **Preferred language**: Italian for UI strings and documentation
- Keep existing Italian content in Italian unless explicitly changing language

## Pre-Submission Checklist

Before completing any task:

1. Run `pnpm build` and ensure no errors
2. Run `pnpm lint` and fix any issues
3. Verify no new TypeScript errors (strict mode)
4. Test locally with `pnpm dev` at http://localhost:3000
5. Ensure changes are minimal and focused
6. Update docs if behavior or commands changed

## Extended Guidelines

For detailed conventions, refer to:
- `.github/copilot-instructions.md` - Repository-specific Copilot instructions
- `.github/prompts/react-next-guidelines.prompt.md` - React/Next.js standards
- `.github/instructions/typescript.instructions.md` - TypeScript detailed rules

## Success Criteria

- App builds and starts locally without errors
- Changes are small, readable, and idiomatic
- Follows TypeScript strict mode and Next.js conventions
- Preserves existing Italian strings and documentation
