---
applyTo: "**/*.ts,**/*.tsx"
---

# React & Next.js Development Standards

## 1. Component Structure & Naming

### Component Basics

- **Component Naming**: Use PascalCase; file name must match exported component
- **Props Destructuring**: Apply destructuring of props only inside the components, not in the incoming prop parameter definition
- **Component Declaration**: Use `const ExampleComponent = () => { ... }` pattern; avoid `React.FC` unless children typing is explicitly needed
- **Props Interface**: Define `interface ExampleComponentProps { ... }` for props typing without React.FC

### Component Creation & Management

- **Component Reusability**: Frequently consider creating new components, but always check the `core-components` folder first to avoid useless duplicates or rigidity
- **Props Abstraction**: When creating a component, avoid passing entire object types as props until necessary - maintain abstraction
- **Core Components Modification**: Always check if a component is included in the core-components list (specified in `instruction/core-components/project-components-instructions` file). Modifications to core-components must be discussed and agreed upon first
- **Modification Tracking**: Track all modifications to core components in `instruction/core-components/components-modification-instructions.md` with count and description
- **Pattern Adherence**: Follow patterns specified in `instruction/core-components/patterns-instructions.md` when working with core components

## 2. Client Components

### State & Hooks Management

- **Hooks Ordering**: States and custom hooks must be ordered at the beginning of the component following best practices

  _[[[ Question on Client Components section - To be asked at the beginning of the project]]]_

### Security & Data Handling

- **Data Encryption**: When fetching data from client or sending server action data from a client component, encrypt sensitive parameters you send and decrypt those you receive from the backend
- **Client-Side Fetching**: Always question if it's meaningful to fetch data on the client

### Performance & Effects

- **Effects Limitation**: Avoid creating client components with many effects
- **Rerender Optimization**: Limit rerenders as much as possible
- **Dependency Arrays**: Effects must include complete dependency arrays when needed
- **Cleanup Functions**: Add cleanup functions in effects where appropriate (e.g., for event listener closure)
- **Memoization**: Use `useCallback`/`useMemo` for expensive work or stable dependencies; don't overuse—measure if re-renders are an issue

### Component Patterns

- **Dual-Purpose Components**: Reuse same components for visualization and editing actions when possible (e.g., a `UserCard` could contain a button that activates fields for editing)
- **Complex State Management**: For data state management of multiple actions (delete, modify, archive) belonging to the same component, use the `useReducer` hook instead of multiple `useState` hooks
- **useTransition for UX**: Use `useTransition` for state updates that may take time, to keep the UI responsive - specially for routing updates
- **Form State Management**: When using forms, pass the setter function as props to the field of the form component, so that the form component state can be updated by the child component easily

## 3. Server/Client Composition Patterns

### Pagination Pattern (Server-Driven)

- **Server Component**: reads `searchParams.page`, calculates offset, fetches paginated data + total count
- **Client Component**: receives `totalPages` as prop; uses `useSearchParams()` + `router.replace()` to update URL on navigation
- **Flow**: URL change → Server Component re-renders with new data (nuqs can help here)
- **Data Fetching**: With data fetching, prefer React Server Components (RSC)
- **Nested Server Components**: Creating more server components nested inside each other, especially with server wrappers (when there's no event handler need), leads to separation of concerns - a welcome principle
- **Preload Pattern for Parallel Fetching**: When nested async Server Components fetch independent data, use React 19's `cache()` to prevent waterfall fetching. Wrap data fetching functions with `cache()` and call them without `await` in the parent component to start parallel requests. The child component will reuse the cached Promise. Use this pattern only when you've identified actual waterfalls impacting performance

## 4. UX/UI Standards

### Accessibility & Design

- **Accessibility**: Ensure interactive elements are keyboard-accessible and labeled (use `aria-*` attributes as needed)
- **Responsive Design**: Ensure components have responsive design (using CSS Modules, styled-components, etc.)

## 5. Code Style & Imports

### Import Organization

- **Import Paths**: Keep import paths relative and consistent; group React imports, then libraries, then local modules
- **Code Formatting**: Keep formatting consistent (Prettier/ESLint). Do not reformat unrelated files

## 6. Project Libraries

### Core Libraries

- **Zustand**: For state management
- **React Hook Form**: For form handling
- **Zod**: For data validation
- **Nuqs**: For syncing state with the URL
- **Tanstack Query**: For data fetching and caching
- **Paraglide**: For iternationalization

### Testing & UI

_[[[ Question on Testing - To be asked at the beginning of the project]]]_

- **React Testing Library and Jest**: For testing

_[[[ Question on Shadcn/UI - To be asked at the beginning of the project]]]_

- **Shadcn**: For faster prototyping and consistent design

## 7. Next.js App Router Architecture

### Directory Structure & Colocation

- **Route Groups**: Use parentheses `(groupname)` to organize routes logically without affecting the URL path
- **Private Folders**: Prefix folders with an underscore `_folder` for very specific components, hooks, or utilities used exclusively within a specific route

### Global Directory Mapping

- **`@/app/*`**: Routing, layouts, and page-specific logic
- **`@/components/ui/*`**: Low-level, atomic UI components (e.g., buttons, inputs)
- **`@/components/features/core/*`**: Complex, feature-specific project shared core components
- **`@/components/features/accessories/*`**: Complex, feature-specific project shared accessories components
- **`@/lib/*`**: Third-party library configurations (Prisma, Stripe, etc.) and shared utility functions
- **`@/actions/*`**: Server Actions for data mutations, organized by domain
- **`@/hooks/*`**: Reusable client-side custom hooks
- **`@/types/*`**: Global TypeScript definitions and interfaces

### Data Fetching & Mutations

- **Fetching**: Perform data fetching directly in Server Components (Pages or Layouts)
- **Mutations**: Use Server Actions for all form submissions and data updates. Keep them in an `actions.ts` file within the route folder or in the global `@/actions` folder
- **Validation**: Use Zod for schema validation within Server Actions

### Naming Conventions

- **Folders**: Use `kebab-case` for all directories in `app/`
- **Special Files**: Strictly follow Next.js naming conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
  ut.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
