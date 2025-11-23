# GitHub Copilot — Repository custom instructions

These instructions guide Copilot when working in this repository. Prefer following these over exploring via search unless something is missing or incorrect.

## Repository overview

- **Purpose**: Educational playground for experimenting with GitHub Copilot features in a Next.js context
- **Stack**: Next.js 15 (App Router) + TypeScript + React 18
- **Package manager**: pnpm@8.0.0 (enforced via `packageManager` field)
- **Key folders**: `app/` (routes), `components/` (reusable UI), `docs/` (guides), `.github/instructions/` (path-specific rules)
- **Goal**: keep changes focused, minimal, and idiomatic for Next.js + TS

## Environment assumptions

- Node.js LTS (18+ recommended)
- pnpm installed globally or via `corepack enable`
- Italian locale preferred for UI strings and documentation

## Commands (validated)

Bootstrap: `pnpm install`
Dev server: `pnpm dev` → http://localhost:3000
Production build: `pnpm build`
Start production server: `pnpm start`
Lint: `pnpm lint` (uses Next.js ESLint config)

**Always run `pnpm install` after modifying `package.json` or lockfile. Do not edit `pnpm-lock.yaml` manually.**

## Architecture & patterns

### Next.js App Router structure

- Pages/routes: `app/page.tsx`, `app/layout.tsx`
- Metadata: export `metadata` object in layouts (see `app/layout.tsx`)
- Client components: mark with `"use client"` directive (see `components/ExampleComponent.tsx`)
- Imports: use `@/` alias for root-relative paths (`@/components/...`)

### TypeScript conventions

- `strict: true` enabled in `tsconfig.json`
- Named exports preferred over default (aids refactoring)
- Props typing: use `interface Props` or `type Props`, avoid `React.FC`
- Component file names match exported component (PascalCase)
- See `.github/instructions/typescript.instructions.md` and `.github/instructions/react.instructions.md` for detailed rules

### React patterns observed

- Functional components only; no class components
- State management: `useState` for local state
- Components lift state up and pass setter functions down as props
- Named exports: `export function ComponentName() { ... }` or `export const ComponentName = () => { ... }`
- Example: `ExampleComponent` demonstrates basic client-side interactivity with counter

## Project layout

```
app/                    # Next.js App Router pages & layouts
  layout.tsx            # Root layout with metadata
  page.tsx              # Homepage (imports @/components/ExampleComponent)
components/             # Reusable React components (client/server)
  ExampleComponent.tsx  # Example client component with useState
docs/                   # Italian documentation
  Copilot-Guida.md      # Comprehensive Copilot usage guide in Italian
.github/
  copilot-instructions.md        # This file
  instructions/                  # Path-specific rules
    typescript.instructions.md   # TS/TSX conventions
    react.instructions.md        # React patterns
    example.instructions.md      # (empty placeholder)
.vscode/
  settings.json         # Copilot enabled, format-on-save, auto-imports
  extensions.json       # Recommended extensions
public/                 # Static assets
```

## Validation checklist before opening a PR

1. Local run: `pnpm dev` and exercise the change in the browser at http://localhost:3000
2. Build: `pnpm build` completes without errors
3. Lint: `pnpm lint` passes or only surfaces non-blocking warnings
4. TypeScript: no new type errors (strict mode enforced)
5. Update docs if behavior or commands changed

## Testing

- **No test runner configured by default**. If you add tests, prefer Jest + React Testing Library and wire `pnpm test` accordingly.
- When generating tests, follow conventions from `.github/instructions/typescript.instructions.md`

## Path-specific instructions

This repository uses path-specific instructions in `.github/instructions/`:

- `typescript.instructions.md` applies to `**/*.ts,**/*.tsx`
- `react.instructions.md` applies to `**/*.ts,**/*.tsx`

When working on TS/TSX files, those instructions are automatically included. Key highlights:

- Named exports over default
- Explicit types for exports and props
- Avoid `any`, prefer generics or `unknown` with guards
- Use `interface` for props, `type` for unions/utilities
- Client components need `"use client"` directive

## When uncertain

- Prefer these instructions first; if a command fails, capture the error message and adjust minimally
- Only perform broad project-wide searches if the info is missing or contradictory
- Check `.github/instructions/` for file-type-specific rules

## Success criteria

- The app builds and starts locally; no new TypeScript or runtime errors
- Changes are small, readable, and align with TypeScript + Next.js conventions
- Italian strings/docs remain in Italian unless explicitly changing language
