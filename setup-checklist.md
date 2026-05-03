# Setup checklist

Everything to go from zero to "Button article published." Check things off as you finish them.

**[you]** = needs your account, credit card, or judgment.
**[claude]** = Claude can do this on your machine once you're ready.

---

## Phase 0 — decisions (15 min) [you]

- [x] License: **MIT**
- [x] npm scope: **@secret-lives**
- [x] Browser support floor: **last 2 versions of evergreen browsers + Safari 16.4+**
- [x] Domain: deferred until three components ship (see Phase 8)

## Phase 1 — accounts and ownership (30 min) [you]

- [x] `npm login` (claims `@secret-lives` on first publish)
- [x] Create public GitHub repo `secret-lives-of-components` (init with MIT license + empty README)
- [ ] Create Vercel account, link to GitHub

> Substack is deferred to Phase 8 — no point reserving a publication until there's something to publish.

## Phase 2 — local repo skeleton (1 hr) [claude can do most]

- [x] Clone repo locally
- [x] `pnpm init` at root
- [x] `pnpm-workspace.yaml` covering `packages/*`
- [x] Scaffold directories: `packages/tokens`, `packages/core`, `packages/react`, `packages/docs`, `articles/`
- [x] Add `.gitignore`, `.editorconfig`, `.prettierrc`, root `tsconfig.base.json`
- [x] Write a real README (project pitch in three paragraphs)
- [x] First commit, push

## Phase 3 — tooling (1 hr) [claude]

- [x] Install root dev deps: `typescript`, `prettier`, `eslint`
- [x] `packages/tokens`: CSS files — `primitives.css`, `semantic.css`, `themes/default.css`
- [x] `packages/core`: install `lit`, set up Vite library build, stub `sl-button` to validate the toolchain
- [x] `packages/react`: install `@lit/react`, `react`, `react-dom`, write the 5-line Button wrapper
- [x] Wire each package's `package.json` exports correctly
- [ ] Install VS Code extensions: lit-plugin, ESLint, Prettier

## Phase 4 — docs site scaffold (2-3 hrs) [claude]

- [ ] `pnpm create astro` in `packages/docs` with TypeScript + MDX
- [ ] Site shell: header, sidebar nav for components
- [ ] Build the `<ComponentPreview>` MDX component (theme + density knobs)
- [ ] Build `/components/[component]` dynamic route for full component pages
- [ ] Build `/embed/[component]` route for Substack-embeddable previews (no chrome)
- [ ] Site CSS (separate from library tokens — docs site has its own taste)
- [ ] Components index page

## Phase 5 — deploy and CI (45 min) [mixed]

- [ ] **[you]** Connect Vercel to the repo, point it at `packages/docs`
- [ ] Note the auto-assigned `*.vercel.app` URL — this is your public URL until Phase 8
- [ ] **[claude]** GitHub Actions: typecheck and build on every PR
- [ ] **[claude]** `pnpm dlx @changesets/cli init`

## Phase 6 — first component: Button (its own session)

- [ ] Build `sl-button` in `packages/core`: states, variants, slots, tokens, ARIA
- [ ] Wire React wrapper
- [ ] Build the Button docs page using `<ComponentPreview>`
- [ ] Build the `/embed/button` route
- [ ] Take notes in `articles/button/notes.md` as you go

## Phase 7 — first article (draft only)

- [ ] Draft `articles/button/draft.md` from notes (follow 11-section structure in CLAUDE.md)

> Drafts accumulate in the repo through Phases 6 and 7 (and the next two components). They get published to Substack in batch during Phase 8.

## Phase 8 — earn the domain and launch on Substack

After **three components** have shipped (Button + 2 more):

- [ ] Buy `secretlives.dev` (or chosen alternative)
- [ ] Add custom domain in Vercel
- [ ] **Keep the original `*.vercel.app` URL active as a permanent alias** so any Substack iframe embeds published before the swap don't break
- [ ] Update `articles/*/draft.md` and any future embeds to use the custom domain
- [ ] Create Substack publication, reserve URL slug
- [ ] Paste each draft into Substack, embed the matching `/embed/<component>` iframe inline, publish

---

## Where things live (cheat sheet)

- **Source of truth for intent:** `CLAUDE.md`
- **Source of truth for setup progress:** this file
- **Notes captured while building:** `articles/<component>/notes.md`
- **Article drafts:** `articles/<component>/draft.md`
- **Published articles:** Substack
- **Live components:** `*.vercel.app` → eventually custom domain
