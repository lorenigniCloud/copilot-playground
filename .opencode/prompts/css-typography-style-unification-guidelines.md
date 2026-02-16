# CSS Typography Style Unification Guidelines

## Task

Maintain a DRY global CSS system for text styles. Before creating or editing React code, compare incoming style specs against existing classes in `@layer components` inside global styles.

Global styles: `app/globals.css`

## Input contract

- `{{style_specs}}` (mandatory): either raw CSS properties or a Figma URL/ID to resolve.
- `{{component_code}}` (optional, scenario 1 only): existing component code to be corrected.

If both raw CSS and Figma are provided, Figma is the source of truth unless explicitly overridden by the user.

This prompt handles two scenarios:

1. Style correction (existing element)
2. Dynamic normalization (creation phase)

Always detect which scenario is active and follow the matching flow.

## Case 1: Style correction (existing element)

When adjusting an existing element (`{{component_code}}`), the source can be:

- Figma URL/ID: a direct link to a Figma node/file. Use Figma MCP tools to fetch node properties.
- Raw properties (`{{style_specs}}`): CSS properties provided in editor context.

## Case 2: Dynamic normalization (creation phase)

When creating a new component under `components/ui`, the source is a Figma URL/ID and node properties must be fetched through Figma MCP tools.

In both cases, focus on creating and maintaining reusable CSS classes.

## Instructions

1. Scenario deduction (always explicit)
   - Output exactly which scenario is running: (1) or (2).
2. Data acquisition
   - If `{{style_specs}}` contains a Figma URL/ID, retrieve node properties via Figma MCP tools.
   - Otherwise, use the provided raw CSS properties.
3. Property scope (typography only)
   - Compare only typography-related properties:
     - `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`,
       `letter-spacing`, `text-transform`, `text-decoration`, `text-align`, `color`,
       `text-shadow`, `-webkit-text-stroke-width`, `-webkit-text-stroke-color`.
   - Ignore layout properties (margin/padding, width/height, display, position, inset, flex/grid, gap, transform, z-index, overflow).
   - Build a comparison object using only in-scope typography properties.
4. Strict property normalization (before matching)
   - Normalize property names to lowercase kebab-case.
   - Normalize value formatting (whitespace, casing, numeric formatting).
   - Sort properties alphabetically before comparison.
   - Treat reordered declarations as identical.
5. Duplicate check + decision matrix
   - Scan `@layer components` in `app/globals.css`.
   - Compare normalized typography sets against existing classes.
   - Decision matrix:
     - Exact match: all typography properties identical -> reuse existing class.
     - Near match: differs in only one non-structural property (`color`, `text-align`, `text-decoration`) -> compose existing class + minimal override.
     - Structural mismatch: differs in any of `font-size`, `font-weight`, `font-family`, `line-height`, `letter-spacing`, or differs in 2+ properties -> create a new class.
6. Safe alias/migration policy
   - Do not auto-rename shared classes by default.
   - Preferred order:
     1. Reuse existing generic class.
     2. If exact match exists but name is too specific, create a new generic alias with equivalent declarations.
     3. Migrate usages only when safe.
   - Rename existing classes only when explicitly requested or when all usages are fully updated with low regression risk.
7. Change impact check (mandatory when editing/renaming shared classes)
   - Trigger: required whenever the decision matrix results in modifying, renaming, or aliasing an existing class.
   - Run codebase-wide usage search before and after changes.
   - If more than 3 files are affected and full migration cannot be verified, prefer creating a new generic class and keeping the old one.
   - If scope is uncertain, prefer creating a new class instead of changing shared behavior.
8. Naming strategy
   - Always name classes after what the style looks like, never after where it is used.
   - Priority 1 (generic/reusable): use descriptive names based on visual properties.
   - Priority 2 (component-specific): use scoped names only for decorative, unique, or low-reuse styles.

## Required output

1. Scenario used: (1) or (2).
2. Input summary:
   - Source used (Figma or raw CSS).
   - Normalized typography property set.
3. Analysis result:
   - Exact match / partial match / no match.
   - Decision (reuse / compose / create) with rationale.
4. CSS actions (if any):
   - Snippet to add/modify in global CSS.
   - If alias/rename is used, specify old and new class names.
5. Component update: updated or newly created component code with the correct class applied.
6. Risk/impact report:
   - Mandatory when an existing shared class is modified or renamed.
   - List files/components where the affected class is used.
   - Include pre/post usage search summary.
   - If no other usages are found, state that explicitly.

## Guardrails

- Avoid inline styles unless strictly necessary.
- Do not duplicate an equivalent typography class.
- Prefer additive safe changes over risky broad renames.
- If requirements are ambiguous, choose the simplest low-risk implementation and state assumptions.
