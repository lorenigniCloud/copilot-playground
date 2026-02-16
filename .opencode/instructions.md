# OpenCode Repository Instructions

These instructions guide OpenCode when working in this repository. Prefer these over broad codebase search unless information is missing or incorrect.

## Repository overview

- Purpose: Educational playground for experimenting with Copilot-like workflows in a Next.js context
- Stack: Next.js 15 (App Router) + TypeScript + React 18
- Package manager: pnpm@8.0.0 (enforced via `packageManager` in `package.json`)
- Key folders: `app/` (routes), `components/` (reusable UI), `docs/` (guides)
- Goal: keep changes focused, minimal, and idiomatic for Next.js + TypeScript

## Environment assumptions

- Node.js LTS (18+ recommended)
- pnpm installed globally or via `corepack enable`
- Italian locale preferred for UI strings and documentation

## Commands (validated)

- Bootstrap: `pnpm install`
- Dev server: `pnpm dev` (http://localhost:3000)
- Production build: `pnpm build`
- Start production server: `pnpm start`
- Lint: `pnpm lint`

Always run `pnpm install` after modifying `package.json` or the lockfile. Do not edit `pnpm-lock.yaml` manually.

## Architecture & patterns

### Next.js App Router structure

- Routes: `app/page.tsx`, `app/layout.tsx`
- Metadata: export `metadata` object in layouts (see `app/layout.tsx`)
- Client components: add the `"use client"` directive
- Imports: use `@/` alias for root-relative paths (`@/components/...`)

### TypeScript conventions

- `strict: true` enabled in `tsconfig.json`
- Named exports preferred over default
- Props typing: use `interface Props` or `type Props`, avoid `React.FC`
- Component file names match exported component (PascalCase)

### React patterns observed

- Functional components only; no class components
- `useState` for local state
- Lift state and pass setters as props
- Named exports: `export function ComponentName()` or `export const ComponentName = () =>`

## Project layout

```
app/                    # Next.js App Router pages & layouts
  layout.tsx            # Root layout with metadata
  page.tsx              # Homepage
components/             # Reusable React components
docs/                   # Italian documentation
.github/                # GitHub-specific instructions/prompts
.opencode/              # OpenCode instructions/prompts (this file)
public/                 # Static assets
```

## Validation checklist before opening a PR

1. Local run: `pnpm dev` and exercise the change at http://localhost:3000
2. Build: `pnpm build` completes without errors
3. Lint: `pnpm lint` passes or only surfaces non-blocking warnings
4. TypeScript: no new type errors (strict mode enforced)
5. Update docs if behavior or commands changed

## Testing

- No test runner configured by default. If you add tests, prefer Jest + React Testing Library and wire `pnpm test` accordingly.

## When uncertain

- Prefer these instructions first; if a command fails, capture the error and adjust minimally
- Only perform broad project-wide searches if info is missing or contradictory

## Success criteria

- App builds and starts locally; no new TypeScript or runtime errors
- Changes are small, readable, and align with TypeScript + Next.js conventions
- Italian strings/docs remain in Italian unless explicitly changing language
