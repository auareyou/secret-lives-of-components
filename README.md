# Secret Lives of Components

A white-label component library, built in public, one article per component.

The articles are the product. The library is the artifact. Each component ships alongside a long-form essay that dissects it — every state, every slot, every token, every micro-decision a designer would never have known to ask about. The library exists so the articles have something real to point at.

The framing is **anatomy and dissection**: pulling apart components the way a curious design engineer would, and writing down what's inside. The deeper purpose is to shift a designer's mental model toward engineering without losing the design edge — to leave readers seeing components as systems of states, slots, tokens, and tradeoffs, not as static rectangles. Tech stack: [Lit](https://lit.dev/) for web components (so the library works in any environment), a thin [`@lit/react`](https://lit.dev/docs/frameworks/react/) wrapper for React readers, CSS custom properties all the way down for theming, and a custom [Astro](https://astro.build/) docs site instead of Storybook.

This repository is the workshop. Components live in [`packages/`](./packages), article drafts and notes in [`articles/`](./articles), and the project's intent — thesis, theming model, accessibility commitments, article structure — in [`CLAUDE.md`](./CLAUDE.md). Published essays live on Substack; the docs site (URL pending) embeds live component previews back into each article. Three components ship before the project earns its custom domain.
