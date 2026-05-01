# Before the first line of code

*Secret Lives of Components · 2026-05-01 · Session debrief*

## Observation

The project hasn't been built yet. There is no repo. No components. No tokens. No published article. The folder on Au's laptop holds a CLAUDE.md written more like a manifesto than a config — Lit and Web Components, slot-driven theming, a thesis that the articles are the product and the library is the artifact, an article structure with eleven sections, a working norm that says *build, then write*.

The session is about deciding where the rest of it goes. Where it lives. How it gets published. Where she works on it. What tools she uses. The decisions stack up: GitHub repo, npm scope `@secret-lives`, MIT license, pnpm workspaces, Astro for the docs site, Vercel for hosting, Substack for articles.

She catches on the visual question. The thing she says she really cares about is that when she shares a component, it has space to breathe around it. Like an iframe in a documentation site. The reply: a styled CSS preview frame for the docs site, plus dedicated `/embed/<component>` routes designed to be iframed into Substack — the iframe pattern earning its keep by doing real work, not cosmetic isolation. She takes it.

Then she sets a rule. *To keep myself accountable and mindful I don't want to get the domain until I've built three components.* The constraint is small but it reshapes the plan. The domain becomes a Phase 8, an earned milestone. The interim deploy lives at a free `*.vercel.app` URL. Articles published before the swap will need that URL to keep working forever, or the iframes break.

A checklist gets saved to the project folder. Phase 0 through Phase 7. Phase 8 set apart, as the reward.

The question of tools shifts. Should the build work move to Claude Code? The recommendation is yes for everything from Phase 2 onward — Cowork keeps the meta-work, the article drafts, the browser research, the planning sessions like this one. The reasoning isn't only practical. The friction of working in a terminal is part of what the project is supposed to teach. *Designer crossing into code*, written into the audience description in CLAUDE.md.

She asks how to keep the documentarian skill running across both tools. Manual summon, in whichever tool is doing the work, with field notes saved into the repo so they survive both. Daily Cowork summary stays. Field notes live at `articles/<component>/field-notes/` for component-scoped texture, `field-notes/` at the root for project-level.

The conversation closes with her asking for this conversation itself to be captured before she switches over.

## Threads
- A pattern across the session: *the rule built into the architecture*. The domain as milestone. The Vercel URL as constraint. The terminal as deliberate friction. The manual-summon as discipline. The project's structure is being shaped to enforce its own thesis.
- Button chosen as the first component. The "secret" of Button — that everyone underestimates it — landing in a session that's also, structurally, about not underestimating setup.
- No line of component code has been written yet. The scaffolding is what exists. The moment of the field note is the moment before.
