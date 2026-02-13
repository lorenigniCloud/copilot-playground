---
name: Create Page from Figma
description: Generate a new Next.js page from a Figma design URL using Copilot, enforcing project layout and styling conventions.
tools: ['com.figma.mcp/mcp/*', 'context7/*']
---

# Task
Create a new Next.js page based on the provided Figma design, following strict project conventions for layout, styling, and file organization.

## Input
- **Figma URL/Node**: {{figma_url}}
- **Target File Path**: `app/[locale]/{{feature_path}}/page.tsx`
- **Context Files**:
  - Global Styles: #file:../../app/globals.css
  - UI Components: #file:../../components/ui
  - Layout: #file:../../app/layout.tsx
   - Typography Style Unification Prompt: #file:css-typography-style-unification-guidelines.prompt.md

## procedural Instructions
1. **Analyze Design**: Use the Figma data to identify layout structure, components, and text styles.
2. **Component Reuse**: Check the **UI Components** folder for existing components that match the design. Reuse them instead of creating new ones.
   - *Example*: Use `section-title.tsx` if available instead of hardcoding `h2`.
3. **Text Styles Check**: Before writing any CSS/Tailwind:
   - For **each distinct text style** found in the Figma design (e.g., page title, subtitle, body text, caption), run the full process described in the **Typography Style Unification Prompt** independently.
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
6. **Implementation**: Generate the `.tsx` file.

## Structural Preferences
- **Root Element**: `main` or `div` with `flex flex-col items-center w-full content-stretch`.
- **Sections**: Wrap logical content blocks in `section` tags.
- **Responsive**: Use standard Tailwind breakpoints (`md:`, `lg:`) matching the project's existing responsive patterns.
- **Images**: Use `next/image`.
- **Metadata**: unique title and description.

## Output Format
- **Step 1**: List any new CSS classes added to `globals.css` (if any).
- **Step 2**: The complete code for the new page.
