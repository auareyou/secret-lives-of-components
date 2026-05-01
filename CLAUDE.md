# Secret Lives of Components

A white-label component library, built in public, one article per component.

## Thesis

The articles are the product. The library is the artifact.

The framing is **anatomy and dissection** — exposing the dozens of micro-decisions hidden inside a single component. The deeper purpose is to **shift a designer's mental model toward engineering without losing the design edge**. Readers should leave each article seeing components the way a thoughtful design engineer sees them: as systems of states, slots, tokens, and tradeoffs — not as static rectangles.

Every article should answer: *what is the secret life of this component? What's actually going on inside it that you'd never see from the outside?*

## Audience

Designers crossing into code. Some Figma fluency, some HTML/CSS, often newer to JavaScript. They want to level up their craft and their literacy at the same time. Code in articles must be readable on its own — never assume framework familiarity.

## Tech stack

**Core:** [Lit](https://lit.dev/) for Web Components. Each component is a custom element (`<sl-button>`, `<sl-input>`, etc.).

**React adapter:** A thin sibling package using [`@lit/react`](https://lit.dev/docs/frameworks/react/) to auto-generate React wrappers. Each wrapper is roughly 5 lines and translates React props/events to attributes/DOM events. Same component, two ergonomic surfaces.

**Why this combination:**
- Web Components work in *any* environment (raw HTML, Vue, Svelte, WordPress, Webflow, Astro, React). True white-label.
- Slots are a literal HTML primitive — `<slot name="icon">` matches the project's max-flexibility theming goal exactly.
- React readers still get familiar `<Button>` JSX through the wrapper package.
- The wrapper code is itself a recurring article angle: "look how thin the wrapper is — the actual logic lives in the platform."

**Styling:** CSS custom properties + plain CSS (no Tailwind, no CSS-in-JS). Tokens flow through `:host` via custom properties so they pierce shadow DOM cleanly.

**Naming convention:** `sl-` prefix on all custom elements (e.g., `sl-button`, `sl-input`). `sl` for "Secret Lives." Short, distinctive, won't collide.

## Theming model

Three layers of overrideability, from cheapest to most invasive:

1. **Token override** — brands swap CSS custom property values (color, type, radii, spacing, motion, density). The whole library re-skins.
2. **Density and shape modes** — top-level data attributes (`[data-density="compact"]`, `[data-shape="sharp"]`) cascade through tokens. Brands flip a switch, every component responds.
3. **Slot composition** — every component exposes named slots for structural overrides. Brands can replace the icon, the chevron, the prefix, the suffix, the empty state — without touching the component's logic.

The contract is: **brands can change how it looks and what's inside the slots, but they cannot break the component's behavior or accessibility.**

## Token architecture

Three tiers, layered:

1. **Primitive tokens** — raw values (`--sl-color-blue-500: #...`). Never used directly by components.
2. **Semantic tokens** — purpose-named, brand-overridable (`--sl-color-action-primary: var(--sl-color-blue-500)`). Components consume only these.
3. **Component tokens** — local to each component (`--sl-button-bg: var(--sl-color-action-primary)`). Lets brands override one component without touching the global palette.

Each component article should explicitly list which tokens it consumes and which component-tokens it exposes.

## Accessibility commitment

**WCAG 2.1 AA** as the floor. Patterns follow the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) for keyboard interaction, focus management, and screen reader behavior.

Each component article includes an "Accessibility" section covering: ARIA roles and states, keyboard interaction map, focus order, screen reader announcements, and any APG pattern this component implements.

Forms get extra care: form-associated custom elements via `ElementInternals` so `<sl-input>` actually participates in `<form>` submission and validation.

## Motion philosophy

**Per-component decision.** No global animation rule. Each article argues for its component's motion choices — what moves, why, what timing, what easing, and what happens under `prefers-reduced-motion`.

Motion tokens (`--sl-duration-*`, `--sl-easing-*`) exist so brands can tune the *feel* without rewriting keyframes, but each component picks which tokens it uses.

## Article structure (per component)

Each article should follow a recognizable shape so readers learn the pattern:

1. **The brief** — what this component does, in one sentence. Where it shows up. What it's *not*.
2. **Anatomy** — labeled diagram of parts and slots. The visible structure.
3. **States** — every state enumerated: default, hover, focus-visible, active, disabled, loading, error, empty, success, etc. Most components have more than designers think.
4. **Variants** — intent (primary, secondary, danger…), size, density, shape. With reasoning for each.
5. **Tokens** — what it consumes, what it exposes.
6. **Composition** — how it nests with other components. What it expects around it.
7. **Accessibility** — ARIA, keyboard, focus, screen reader behavior. APG pattern reference.
8. **Motion** — what moves and why. Reduced-motion behavior.
9. **White-label** — what brands can override (slots, tokens). What they can't (behavior, a11y guarantees).
10. **Edge cases** — long text, RTL, dense data, no data, slow networks, double-clicks, paste events, autofill, password managers — whatever applies.
11. **The secret** — the one non-obvious decision the article exposes. The thing a designer would never have known to ask about. This is the article's payoff.

Not every component needs every section, but the section *order* should be consistent across articles.

## Workflow

**Build, then write.** Ship the component first; the article is the post-mortem. This produces cleaner articles than writing alongside, and lets the article reflect what the component actually became (not what it was supposed to be).

This means: while building, capture decisions and dead-ends in a notes file in the component's folder. The article draws from those notes.

## Documentation

**Custom docs site** for reference (live component playground, props/attributes, events, slots, tokens, code examples for both Web Component and React surfaces). Each component page links out to its Substack article for the long-form anatomy.

**Substack** for long-form narrative — the dissection, the secret, the design reasoning. Substack articles are the canonical "why" docs.

The docs site is itself a craft showcase. It should feel like an extension of the library, not Storybook.

## Repo structure (proposed, not yet built)

```
secret-lives/
├── packages/
│   ├── core/              # Lit components — sl-button, sl-input, ...
│   ├── react/             # Auto-generated React wrappers
│   ├── tokens/            # CSS custom property definitions, theme presets
│   └── docs/              # Custom docs site
├── articles/              # Drafts for Substack, one folder per component
│   └── button/
│       ├── notes.md       # Decisions captured during build
│       └── draft.md       # The article itself
└── CLAUDE.md              # This file
```

## Open questions (decide before they bite)

These are deferred but will need answers eventually. Listed here so they don't get forgotten:

- **Distribution / monetization model.** Open-source vs paid vs free-with-paid-tier. Decide before launching the docs site so licensing is clear.
- **First component to ship.** Will pick when ready to build, not now. Candidates discussed: Button (classic), Token system (foundation-first), Input (more edges than Button), or something unexpected (Tooltip, Skeleton).
- **Browser support floor.** Likely modern evergreen only, but pin it before writing CSS that uses bleeding-edge features.
- **Figma kit.** A companion Figma library would dramatically strengthen the design-engineering bridge thesis. Not required for v1 but flag it.
- **Component scope.** Open-ended for now — articles drive what gets built. Revisit if the library starts feeling unfocused.

## Working norms (for Claude)

- Default to plain language and concrete scenarios over abstract trade-off matrices. Show what a day-in-the-life looks like with each option.
- When proposing options, give a recommendation with the reasoning, not just a neutral list.
- Keep the design edge. Even when discussing implementation, frame it in terms a designer would care about (slots vs props isn't an API debate, it's about who owns composition).
- This is a learning project. Explain *why*, not just *what*. The reasoning is the value.
- Use the article structure above when drafting any component-related work — it's the project's spine.
