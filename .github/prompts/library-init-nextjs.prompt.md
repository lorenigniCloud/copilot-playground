---
name: library-init-nextjs
description: Initialize core libraries (Zustand, React Hook Form, Zod, Nuqs, TanStack Query, Next-Intl, next-themes) in a Next.js App Router project following repository conventions.
tools: ["context7/*"]
---

# Prompt — Core Library Initialization (Next.js)

## Goal

Initialize the project's standard libraries in an orderly, minimal way:

- Zustand
- React Hook Form
- Zod
- Nuqs
- TanStack Query
- Next-Intl
- next-themes

Work on a Next.js project with App Router and strict TypeScript.

## Expected Input

- **Package manager**: `pnpm`
- **Default locale**: `{{default_locale}}` (e.g. `it`)
- **Supported locales**: `{{supported_locales}}` (e.g. `it,en`)

If an input is missing, use the simplest default and state it in the output.

## Operating Rules

1. **Check current state** before changing anything:
   - existing dependencies in `package.json`
   - existing files/configuration
   - avoid duplication or unnecessary refactors
2. **Use Context7** to confirm up-to-date patterns for each library when needed.
3. **Keep scope minimal**: implement technical bootstrap only, no extra features.
4. **Use `@/` alias** and project folder conventions (`app`, `components`, `lib`, `hooks`, `types`).
5. **Use pnpm commands**; do not edit lockfiles manually.

## Initialization Plan

### 1) Install Dependencies

Install only missing packages:

- Zustand: `zustand`
- React Hook Form + Zod: `react-hook-form zod @hookform/resolvers`
- Nuqs: `nuqs`
- TanStack Query: `@tanstack/react-query`
- Next-Intl: `next-intl`
- next-themes: `next-themes`

### 2) Zustand

- Create a base store in `lib/stores/` (e.g. `lib/stores/app-store.ts`)
- Define minimal typed state + 1 sample action (`set...`)
- No global provider unless actually required

### 3) React Hook Form + Zod

- Create a sample util/schema in `lib/validation/` (e.g. `example-form.schema.ts`)
- Wire `zodResolver` into a minimal client form
- Keep semantic schema naming (`SomethingSchema`)

### 4) Nuqs

- Configure search-param parsing in a demo page or dedicated hook
- Use typed parsers (`parseAsString`, `parseAsInteger`, etc.)
- No business logic, only base URL <-> state wiring

### 5) TanStack Query

- Create a client provider in `components/providers/query-provider.tsx`
- Initialize `QueryClient` with conservative options (low `retry`, non-aggressive refetching)
- Add provider to the root layout if missing

### 6) Next-Intl

- Minimal App Router setup:
  - i18n routing/config files
  - required middleware
  - locale message loading from a dedicated folder (e.g. `messages/`)
- Use input default locale (`it` if missing)
- Do not introduce complex structures

### 7) next-themes

- Create a theme provider in `components/providers/theme-provider.tsx`
- Wrap the root layout tree with the provider if missing
- Configure a minimal setup (`attribute`, `defaultTheme`, and system support when appropriate)
- Do not add theme showcase UI

## Important Constraints

- Do not introduce extra UI, showcase pages, or non-requested components.
- Do not change the project's style/design system.
- Do not rename existing files/folders unless there is a real technical conflict.
- If a library is already configured, validate it and keep it unchanged.

## Final Validation

Run in this order:

1. `pnpm install` (only if dependencies were changed)
2. `pnpm lint`
3. `pnpm build`

If there are errors not related to initialization, report them without fixing out-of-scope areas.

## Required Output

Always return:

1. **Assumptions used** (missing inputs + defaults applied)
2. **Dependencies added**
3. **Files created/modified** with a short purpose
4. **Library status check**:
   - Zustand: `configured | already-present | skipped`
   - React Hook Form + Zod: `configured | already-present | skipped`
   - Nuqs: `configured | already-present | skipped`
   - TanStack Query: `configured | already-present | skipped`
   - Next-Intl: `configured | already-present | skipped`
   - next-themes: `configured | already-present | skipped`
5. **Validation outcome** (`lint/build`) with blockers, if any

Always stop at technical bootstrap only.
