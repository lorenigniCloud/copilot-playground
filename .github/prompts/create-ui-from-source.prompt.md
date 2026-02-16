---
name: Create Page from Figma
description: Generate Next.js pages/components from Figma or product specs (PRD/user stories), enforcing project layout and styling conventions.
tools:
  [
    "com.figma.mcp/mcp/*",
    "io.github.upstash/context7/get-library-docs",
    "io.github.upstash/context7/resolve-library-id",
  ]
---

# Task

Create a new Next.js page (or page-level UI composition) from the best available source of truth, following strict project conventions for layout, styling, and file organization.

Supported source inputs (in priority order):

1. Figma URL/Node (if provided)
2. PRD / feature specification / user stories
3. Textual requirements in prompt/conversation

## Input

- **Primary Source (optional)**: {{figma_url}} or {{design_node}}
- **Alternative Source (optional)**: {{prd_or_spec}}
- **Target File Path**: `app/[locale]/{{feature_path}}/page.tsx`
- **Context Files**:
  - Global Styles: #file:../../app/globals.css
  - UI Components: #file:../../components/ui
  - Layout: #file:../../app/layout.tsx
  - Typography Style Unification Prompt: #file:css-typography-style-unification-guidelines.prompt.md

## Procedural Instructions

1. **Analyze Source**:
   - If a Figma URL/Node is provided, extract layout structure, reusable blocks, spacing patterns, and text styles from Figma.
   - If Figma is not provided, derive UI structure from PRD/spec requirements (sections, hierarchy, actions, states, constraints).
   - If both are provided, Figma defines visual/UI details; PRD defines behavior/business rules.
2. **Component Reuse**: Check the **UI Components** folder for existing components that match the design. Reuse them instead of creating new ones.
   - _Example_: Use `section-title.tsx` if available instead of hardcoding `h2`.
3. **Text Styles Check**: Before writing any CSS/Tailwind:
   - For **each distinct text style** found in the source (Figma or PRD-defined hierarchy: page title, subtitle, body, caption, label), run the full process described in the **Typography Style Unification Prompt** independently.
   - Check **Global Styles** for existing text classes.
   - If a style exists, use the semantic class name (e.g., `.heading-48-semibold`).
   - If missing, create a NEW semantic class in **Global Styles** and use it.
   - **Avoid inline Tailwind for typography** (font-size, weight, line-height, letter-spacing) unless it's a one-off unique element.
4. **Non-Typography Styles (Lean + Delegated)**:
   - For spacing/layout/surface/interactions (padding, margin, border, radius, shadow, background, hover/focus/disabled), keep implementation minimal and consistent with existing project tokens/components.
   - Prefer reuse of existing UI components and utility patterns already present in the codebase.
   - For ambiguous or advanced non-typography styling choices, consult **Context7 MCP** documentation and apply the simplest compliant solution.
5. **Layout-Agnostic Implementation**:
   - **Padding**: Handle page-level padding in the `page.tsx` wrapper (e.g., `p-6` or `p-[120px]`), NOT inside reusable components.
   - **Sizing**: Components should fill their container (`w-full`, `h-full`). Define widths/grids in the page layout.
   - **Spacing**: Use flex/grid gaps in `page.tsx` to separate components.
6. **Loading & Skeleton Requirements**:
   - For every new route, create `loading.tsx` at the same segment level as `page.tsx` if it does not already exist.
   - For every newly created significant visual block/component rendered by the page, add a corresponding skeleton in that route-level `loading.tsx`.
   - For incremental page updates, keep `loading.tsx` aligned with current UI composition (add/remove/adjust skeleton blocks as needed).
   - Keep skeleton structure faithful to the page hierarchy; avoid generic placeholders that do not reflect real layout.
7. **Behavior Mapping (when PRD/spec is provided)**:
   - Convert requirements into concrete UI states (empty/loading/error/success) only if explicitly required by the source.
   - Implement only the minimum interaction scope requested; avoid speculative features.
8. **Implementation**: Generate the `.tsx` file(s) required by the route-level change, including `loading.tsx` creation/update when applicable.

## Decision Rules (No Figma Scenario)

- If no Figma URL/Node is available, do **not** block execution.
- Build the page from PRD/spec semantics using existing design system patterns.
- Prefer simple, conventional layout choices already present in the codebase.
- If a visual detail is unspecified, choose the minimal implementation compatible with project conventions.

## Structural Preferences

- **Root Element**: `main` or `div` with `flex flex-col items-center w-full content-stretch`.
- **Sections**: Wrap logical content blocks in `section` tags.
- **Responsive**: Use standard Tailwind breakpoints (`md:`, `lg:`) matching the project's existing responsive patterns.
- **Images**: Use `next/image`.
- **Metadata**: unique title and description.

## Output Format

When returning the result, always provide:

- **Step 1**: Source summary used for implementation
  - Figma node(s)/URL if present
  - PRD/spec sections used (if present)
- **Step 2**: List any new CSS classes added to `globals.css` (if any).
- **Step 3**: `loading.tsx` status at the same route level (`created`, `updated`, or `no change`) and what skeleton blocks were aligned.
- **Step 4**: The complete code for the new page.

If no new global typography classes are needed, explicitly state: `No new classes added to globals.css`.
