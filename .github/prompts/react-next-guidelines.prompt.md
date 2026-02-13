---
name: react-next-guidelines
description: This prompt provides guidelines for React and Next.js development, including component structure, naming conventions, UX/UI standards, project libraries, and global directory structure.
tools: ["context7/*"]
---

# React & Next.js Development Standards

## 0. **Context Files**:

- UI Components: #file:../../components/ui
- UI Components changes markdown: #file:../../components/ui/changes.md
- Typography Style Unification Prompt: #file:css-typography-style-unification-guidelines.prompt.md
- Library Initialization Prompt: #file:library-init-nextjs.prompt.md

## 1. Component Structure & Naming

### Component Basics

- **Component Naming**: Use PascalCase; file name must match exported component
- **Props Destructuring**: Apply destructuring of props only inside the components, not in the incoming prop parameter definition
- **Component Declaration**: For client components use `const ExampleComponent = () => { ... }` pattern; avoid `React.FC` unless children typing is explicitly needed; for server components, use `export default function ExampleComponent() { ... }`
- **Props Interface**: Define `interface ExampleComponentProps { ... }` for props typing without React.FC

### 2. Component Creation & Management

- **Component Reusability**: Frequently consider creating new components, but always check the **UI Components** folder first to avoid useless duplicates or rigidity
- **Props Abstraction**: When creating a component, avoid passing entire object types as props until necessary - maintain abstraction
- **Core Components Modification**: Modifications to already created components are permitted up to a certain degree of change - big changes must be discussed and agreed upon first
- **Modification Tracking**: Modifications to **UI Components** already present should be briefly tracked within the file of **UI Components changes**
- **Pattern Adherence**: Follow patterns specified in `instruction/core-components/patterns-instructions.md` when working with core components

### 3. Component Patterns

- **Dual-Purpose Components**: Reuse same components for visualization and editing actions when possible (e.g., a `UserCard` could contain a button that activates fields for editing)
- **Complex State Management**: For data state management of multiple actions (delete, modify, archive) belonging to the same client component, use the `useReducer` hook instead of multiple `useState` hooks
- **useTransition for UX**: Use `useTransition` for state updates that may take time into client components, to keep the UI responsive - specially for routing updates

## 4. UX/UI Standards

### Accessibility & Design

- **Accessibility**: Ensure interactive elements are keyboard-accessible and labeled (use `aria-*` attributes as needed)
- **Responsive Design**: Ensure components have responsive design

## 5. Project Libraries

### Core Libraries

- **Zustand**: For state management
- **React Hook Form**: For form handling
- **Zod**: For data validation
- **Nuqs**: For syncing state with the URL
- **Tanstack Query**: For data fetching and caching
- **Next-Intl**: For internationalization
- **next-themes**: For theme management (light/dark/system)

## 6. Global Directory Structure & Conventions

### Global Directory Mapping

- **`@/app/*`**: Routing, layouts, and page-specific logic
- **`@/components/ui/*`**: Low-level, atomic UI components (e.g., buttons, inputs)
- **`@/lib/*`**: Third-party library configurations (Prisma, Stripe, etc.) and shared utility functions
- **`@/actions/*`**: Server Actions for data mutations, organized by domain
- **`@/hooks/*`**: Reusable client-side custom hooks
- **`@/types/*`**: Global TypeScript definitions and interfaces

### 7. Code Quality & Best Practices

## Context 7 MCP

For anything not explicitly covered in these guidelines or in the message sent by the user, refer to the **Context7 MCP** documentation for best practices and standards. When in doubt, choose the simplest solution that complies with Context 7 MCP principles.
