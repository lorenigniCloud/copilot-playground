---
name: react-next-guidelines
description: Operational standards for React and Next.js development with clear priorities, conventions, and delivery checklist.
tools: ["context7/*"]
---

# React & Next.js Development Standards

## 0. Priority Order (apply in this order)

1. User request in the current task
2. Repository instructions and path-specific instructions
3. This prompt file
4. Context7 documentation for uncovered or ambiguous topics

When rules conflict, follow the highest-priority source.

## 1. Context Files

- UI Components: #file:../../components/ui
- UI Components changes markdown: #file:../../components/ui/changes.md
- Typography Style Unification Prompt: #file:css-typography-style-unification-guidelines.prompt.md
- Library Initialization Prompt: #file:library-init-nextjs.prompt.md

Use these files before introducing new abstractions or style changes.

## 2. Component Structure & Naming

### Component Basics

- **Component Naming**: Use PascalCase; file name MUST match exported component name.
- **Props Destructuring**: Destructure props inside the component body, not in function parameters.
- **Client Component Declaration**: Prefer `const ExampleComponent = (props: ExampleComponentProps) => { ... }`; avoid `React.FC` unless children typing is required.
- **Server Component Declaration**: Use function declarations. In App Router route files, use default export when required by Next.js conventions.
- **Props Typing**: Define explicit props types (`type` or `interface`) and avoid implicit `any`.
- **Readonly Props**: Use `Readonly` utility type for props to prevent unintended mutations

## 3. Component Creation & Management

- **Reuse First**: Check existing UI components before creating new ones.
- **Props Abstraction**: Prefer focused props over passing full domain objects.
- **Core Component Scope**: Small/medium edits are allowed; major behavior or API changes must be explicitly agreed first.
- **Change Tracking**: If modifying existing UI core components, add a short note to the UI components changes file.
- **Pattern Adherence**: Follow the repository core component patterns when present.

## 4. Component Patterns

- **Dual-Purpose Components**: Reuse components for view/edit flows when it keeps API clean.
- **Complex State Management**: Prefer `useReducer` for multi-action workflows (delete/modify/archive) in a single client component.
- **Responsive UX**: Use `useTransition` for potentially expensive state updates (especially routing-driven UI updates).

## 5. UX/UI Standards

### Accessibility & Design

- **Accessibility**: Interactive elements MUST be keyboard accessible and labeled (`aria-*` where needed).
- **Responsive Design**: Components MUST behave correctly across common breakpoints.
- **Simplicity First**: Prefer minimal UX that satisfies the requirement; avoid speculative complexity.

## 6. Project Libraries

### Core Libraries

- **Zustand**: State management
- **React Hook Form**: Form handling
- **Zod**: Data validation
- **Nuqs**: URL state sync
- **TanStack Query**: Data fetching/caching
- **Next-Intl**: Internationalization
- **next-themes**: Theme management

Do not introduce alternatives without a clear task-driven reason.

## 7. Global Directory Structure & Conventions

### Global Directory Mapping

- **`@/app/*`**: Routing, layouts, and page-specific logic
- **`@/components/ui/*`**: Low-level, atomic UI components (e.g., buttons, inputs)
- **`@/lib/*`**: Third-party library configurations (Prisma, Stripe, etc.) and shared utility functions
- **`@/actions/*`**: Server Actions for data mutations, organized by domain
- **`@/hooks/*`**: Reusable client-side custom hooks
- **`@/types/*`**: Global TypeScript definitions and interfaces

Follow this mapping when creating new files.

## 8. Patterns & Conventions

This section covers specific patterns and conventions for common UI interactions and component compositions.

### 8.1 Client Component Wrapper Pattern

This pattern helps maintain clear separation of concerns between server and client components. Instead of converting a server component into a client component (which would mix data fetching, state, and UI logic), you wrap the server component with a client component that handles state and UI interactions.

**Problem:**
If you turn a server component into a client component to add interactivity (e.g., dismiss, toggle), it now handles more than just data fetching—it also manages state and UI rendering, losing the benefits of server components.

**Solution:**
Create a client component wrapper that receives the server component as a child and manages the interactive logic, while the server component remains focused on data fetching.

**Example:**

```jsx
"use client";
import { useState } from "react";

function ClientWrapper(props) {
  const { children } = props;
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div>
      {children}
      <button onClick={() => setVisible(false)}>Dismiss</button>
    </div>
  );
}

// Usage in a page:
function Page() {
  return (
    <ClientWrapper>
      <ServerComponent />
    </ClientWrapper>
  );
}
```

### 8.2 Pattern "Show More" (Server/Client Composition)

**Compositional approach for "Show More"**:

- Keep the component that performs data fetching (e.g., `CategoryList`) as a pure server component, responsible only for retrieving data.
- Implement the interaction logic (e.g., show/hide more items) in a reusable client component (e.g., `ShowMore`), which receives the children from the server component.
- The client component manages the state (e.g., expanded/collapsed) and the interactive UI, using React.Children to manipulate the children.
- Usage example:

```jsx
// Server component
async function CategoryList() {
  const categories = await getCategories();
  return (
    <ShowMore initial={5}>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </ShowMore>
  );
}

// Client component (ShowMore)
("use client");
import { useState, Children } from "react";

export default function ShowMore(props) {
  const { children, initial = 5 } = props;
  const [expanded, setExpanded] = useState(false);
  const items = expanded
    ? children
    : Children.toArray(children).slice(0, initial);
  const remaining = Children.count(children) - initial;
  return (
    <div>
      <div>{items}</div>
      {remaining > 0 && (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : `Show More (${remaining})`}
        </button>
      )}
    </div>
  );
}
```

## 9. Code Quality & Delivery Checklist

Before finalizing changes, verify:

- Build/lint/type expectations from repository instructions are respected.
- No unnecessary files, abstractions, or visual redesign were introduced.
- Accessibility and responsive behavior are preserved.
- New code follows naming, typing, and folder conventions.
- For every route touched, `loading.tsx` exists at the same segment level as `page.tsx`.
- For every newly introduced significant visual component/block in a route, a corresponding skeleton exists in that route-level `loading.tsx`.
- On incremental updates, route-level skeletons are updated to stay structurally aligned with the current page composition.
- If UI core components changed, the change log file is updated.

## Context 7 MCP

For anything not explicitly covered here or in task instructions, use Context7 documentation.
When in doubt, choose the simplest compliant solution and avoid overengineering.
