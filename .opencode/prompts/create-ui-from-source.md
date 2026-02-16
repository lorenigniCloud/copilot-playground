# Create Page from Figma

## Task

Create a new Next.js page (or page-level UI composition) from the best available source of truth, following strict project conventions for layout, styling, and file organization.

Supported source inputs (in priority order):

1. Figma URL/Node (if provided)
2. PRD / feature specification / user stories
3. Textual requirements in prompt/conversation

## Input

- Primary Source (optional): `{{figma_url}}` or `{{design_node}}`
- Alternative Source (optional): `{{prd_or_spec}}`
- Target File Path: `app/[locale]/{{feature_path}}/page.tsx`
- Context Files:
  - Global Styles: `app/globals.css`
  - UI Components: `components/ui`
  - Layout: `app/layout.tsx`
  - Typography Style Unification Prompt: `.opencode/prompts/css-typography-style-unification-guidelines.md`

## Procedural instructions

1. Analyze source:
   - If a Figma URL/Node is provided, extract layout structure, reusable blocks, spacing patterns, and text styles from Figma.
   - If Figma is not provided, derive UI structure from PRD/spec requirements (sections, hierarchy, actions, states, constraints).
   - If both are provided, Figma defines visual/UI details; PRD defines behavior/business rules.
2. Component reuse: check `components/ui` for existing components that match the design; reuse them instead of creating new ones.
3. Text styles check:
   - For each distinct text style (page title, subtitle, body, caption, label), run the full process described in the Typography Style Unification Prompt.
   - Check `app/globals.css` for existing text classes.
   - If a style exists, use the semantic class name.
   - If missing, create a new semantic class in `app/globals.css` and use it.
   - Avoid inline Tailwind for typography unless it is a one-off unique element.
4. Non-typography styles (lean + delegated):
   - For spacing/layout/surface/interactions, keep implementation minimal and consistent with existing tokens/components.
   - Prefer existing UI components and utility patterns.
5. Layout-agnostic implementation:
   - Padding: handle page-level padding in the `page.tsx` wrapper, not inside reusable components.
   - Sizing: components should fill their container; define widths/grids in the page layout.
   - Spacing: use flex/grid gaps in `page.tsx` to separate components.
6. Loading & skeleton requirements:
   - For every new route, create `loading.tsx` at the same segment level as `page.tsx` if it does not already exist.
   - For every newly created significant visual block/component rendered by the page, add a corresponding skeleton in that route-level `loading.tsx`.
   - For incremental updates, keep `loading.tsx` aligned with current UI composition.
7. Behavior mapping (when PRD/spec is provided):
   - Convert requirements into concrete UI states only if explicitly required.
   - Implement only the minimum interaction scope requested.
8. Implementation: generate the `.tsx` file(s) required by the route-level change, including `loading.tsx` creation/update when applicable.

## Decision rules (no Figma scenario)

- If no Figma URL/Node is available, do not block execution.
- Build the page from PRD/spec semantics using existing design system patterns.
- Prefer simple, conventional layout choices already present in the codebase.
- If a visual detail is unspecified, choose the minimal implementation compatible with project conventions.

## Structural preferences

- Root element: `main` or `div` with `flex flex-col items-center w-full content-stretch`
- Sections: wrap logical content blocks in `section` tags
- Responsive: use standard Tailwind breakpoints (`md:`, `lg:`) matching existing patterns
- Images: use `next/image`
- Metadata: unique title and description

## Output format

Always provide:

- Step 1: Source summary used for implementation
  - Figma node(s)/URL if present
  - PRD/spec sections used (if present)
- Step 2: List any new CSS classes added to `app/globals.css` (if any)
- Step 3: `loading.tsx` status at the same route level (`created`, `updated`, or `no change`) and what skeleton blocks were aligned
- Step 4: The complete code for the new page

If no new global typography classes are needed, explicitly state: `No new classes added to app/globals.css`.
