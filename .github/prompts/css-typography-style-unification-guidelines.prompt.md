---
name: css-central-unification
description: Enforce DRY typography styling by reusing existing global classes in app/globals.css whenever possible. Avoid duplicate text-style classes across components with deterministic matching, safe migration rules, and explicit impact checks.
tools: ['com.figma.mcp/mcp/*', 'search/codebase', 'search', 'edit']
---

# Task

Maintain a DRY global CSS system for text styles.
Before creating or editing React code, compare incoming style specs (JSON or Figma node) against existing classes in `@layer components` inside global styles.

**Global Styles**: #file:../../app/globals.css

## Input Contract

- `{{style_specs}}` (**mandatory**): either:
  - raw CSS properties (JSON-like), or
  - a Figma URL/ID to resolve.
- `{{component_code}}` (**optional**, scenario 1 only): existing component code to be corrected.

If both raw CSS and Figma are provided, Figma is the source of truth unless explicitly overridden by the user.

This prompt handles two scenarios:

1. **Style Correction (Existing Element)**: Correct the style of an existing element from Figma node or raw JSON properties.
2. **Dynamic Normalization (Creation Phase)**: Create a new element/component from Figma URL/ID specs.

Always detect which scenario is active and follow the matching flow.

## Case 1: Style Correction (Existing Element)
When adjusting an existing element (`{{component_code}}`), the source can be:
- **Figma URL/ID**: A direct link to a Figma node/file. Use Figma MCP tools to fetch node properties.
- **Raw Properties** (`{{style_specs}}`): CSS properties provided in editor context (e.g., `font-size: 16px; font-weight: 600`).

## Case 2: Dynamic Normalization (Creation Phase)
When creating a new component under #file:../../components/ui/ the source is a Figma URL/ID and node properties must be fetched through Figma MCP tools.

In both cases, focus on creating and maintaining reusable CSS classes.

## Instructions

1. **Scenario Deduction (always explicit)**
   - Output exactly which scenario is running: (1) or (2).

2. **Data Acquisition**:
   - If `{{style_specs}}` contains a Figma URL/ID, retrieve node properties via Figma MCP tools.
   - Otherwise, use the provided raw CSS properties.

3. **Property Scope (Typography only)**
   - Compare only typography-related properties:
     - `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`,
       `letter-spacing`, `text-transform`, `text-decoration`, `text-align`, `color`,
       `text-shadow`, `-webkit-text-stroke-width`, `-webkit-text-stroke-color`.
   - Ignore layout properties:
     - margin/padding, width/height, display, position, inset/top/right/bottom/left,
       flex/grid properties, gap, transform, z-index, overflow.

   **Practical implementation rule**:
   - Build a comparison object using only in-scope typography properties.
   - Ignore everything else.
   - Run duplicate and threshold checks on the filtered object only.

   **Example A (reuse expected)**:
   - Component 1 and Component 2 share identical typography properties.
   - Component 1 has `margin-bottom: 12px`; Component 2 has `margin-bottom: 24px`.
   - Result: reuse same typography class; margins remain local.

   **Example B (reuse expected)**:
   - Typography is identical, but one wrapper is `absolute` and the other is `relative`.
   - Result: positioning must not affect typography matching.

4. **Strict Property Normalization (before matching)**
   - Normalize property names to lowercase kebab-case.
   - Normalize value formatting (whitespace, casing, numeric formatting).
   - Sort properties alphabetically before comparison.
   - Treat reordered declarations as identical.

5. **Duplicate Check + Decision Matrix**:
   Before implementation:
   - Scan `@layer components` in the **Global Styles** file.
   - Compare normalized typography sets against existing classes.
   - Decision matrix (discrete rules, not percentages):
     - **Exact match**: all typography properties are identical → reuse existing class.
     - **Near match**: differs in only one non-structural property (`color`, `text-align`, `text-decoration`) → compose existing class + minimal Tailwind/CSS override for the differing property.
     - **Structural mismatch**: differs in any of `font-size`, `font-weight`, `font-family`, `line-height`, or `letter-spacing`, or differs in 2+ properties of any kind → create a new class.

6. **Safe Alias/Migration Policy**:
   - Do not auto-rename shared classes by default.
   - Preferred order:
     1. Reuse existing generic class.
     2. If exact match exists but class name is too specific, create a **new generic alias** with equivalent declarations.
     3. Migrate usages only when safe.
   - Rename existing classes only when explicitly requested or when all usages are fully updated with low regression risk.

7. **Change Impact Check (MANDATORY when editing/renaming shared classes)**:
   - **Trigger**: this step is required whenever the decision matrix results in modifying, renaming, or aliasing an existing class — including in scenario 2 (e.g., renaming a context-specific class to a generic one for cross-page reuse).
   - Run codebase-wide usage search **before and after** changes.
   - Preferred search approach: `grep_search` for class name occurrences.
   - Report all affected files/components.
   - **Threshold**: if more than 3 files are affected and full migration cannot be verified, prefer creating a new generic class + keeping the old one as-is, over a risky broad rename.
   - If scope is uncertain, prefer creating a new class instead of changing shared behavior.

8. **Naming Strategy**:

   **Core principle**: always name classes after *what the style looks like*, never after *where it is used*. This prevents rename churn when the same style appears in a different context later.

   - **Priority 1 (Generic/Reusable — default choice)**: use descriptive names based on visual properties (e.g., `.heading-48-semibold`, `.text-body-medium-gray`, `.caption-12-uppercase`). This is the default for all new classes.
   - **Priority 2 (Component-Specific)**: use scoped names (e.g., `.pricing-hero-decorative`) only for decorative, unique, or provably low-reuse styles that would not make sense outside their original context.

   When in doubt between Priority 1 and Priority 2, always choose Priority 1.


## Required Output
1. **Scenario Used**: State clearly whether it is (1) style correction or (2) dynamic normalization.
2. **Input Summary**:
   - Source used (Figma or raw CSS).
   - Normalized typography property set.
3. **Analysis Result**:
   - Exact match / partial match / no match.
   - Decision (reuse / compose / create) with matrix rationale.
3. **CSS Actions (if any)**:
   - Provide snippet to add/modify in global CSS.
   - If alias/rename is used, specify old and new class names.
4. **Component Update**: Show the updated or newly created component code with the correct class applied.
5. **Risk/Impact Report**:
   - **Scenario 1 (style correction)**: always mandatory when an existing shared class is modified or renamed.
   - **Scenario 2 (dynamic normalization / page creation)**: required only if an existing class was modified or renamed (e.g., renaming a context-specific class to a generic one). If only new classes were created or existing classes reused as-is, this section can be omitted.
   - When required:
     - List files/components where the affected class is used.
     - Include pre/post usage-search summary.
     - If no other usages are found, state that explicitly.

## Guardrails

- Avoid inline styles unless strictly necessary.
- Do not duplicate an equivalent typography class.
- Prefer additive safe changes over risky broad renames.
- If requirements are ambiguous, choose the simplest low-risk implementation and state assumptions.
