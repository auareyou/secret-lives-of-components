# Kickoff sequence

The exact steps from "I have decisions" to "I'm ready to start Phase 2 in Claude Code." Roughly 30-45 minutes total. Delete this file once you're done.

---

## Stage 1 — Web tasks (10 min)

1. **Create the GitHub repo.** Go to [github.com/new](https://github.com/new).
   - Name: `secret-lives-of-components`
   - Public
   - **Do NOT initialize with README, .gitignore, or license.** You already have files locally; we'll push them up.
   - Click *Create repository*.

2. **Create the Substack publication.** Go to [substack.com](https://substack.com), click "Start writing," name it *Secret Lives of Components*. Reserve the URL slug (`secretlivesofcomponents.substack.com` or shorter if available).

3. **Sign in to Vercel.** Go to [vercel.com](https://vercel.com), sign in with GitHub. No project to create yet — this just establishes the link to your repos.

---

## Stage 2 — Terminal setup (15 min)

Open Terminal.app.

4. **Check what's installed:**
   ```bash
   node --version
   pnpm --version
   git --version
   ```
   You need Node 18+, pnpm 8+, and git. If any are missing or outdated, continue to step 5. If all three are good, skip to step 6.

5. **Install missing pieces.** If you don't have Homebrew, install it first:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   Then:
   ```bash
   brew install node pnpm git
   ```

6. **Configure git** (skip if already set up on this Mac):
   ```bash
   git config --global user.name "Aurora Pleguezuelo"
   git config --global user.email "auareyou@gmail.com"
   ```

7. **Log in to npm:**
   ```bash
   npm login
   ```
   Browser opens, authenticate. This is the step that lets you publish under `@secret-lives` later.

---

## Stage 3 — Connect the local folder to GitHub (5 min)

8. **Navigate to your project folder:**
   ```bash
   cd "/Users/aurorapleguezuelo/Documents/Claude/Projects/Secret Lives of Components"
   ```

9. **Initialize git and connect to your new GitHub repo:**
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/secret-lives-of-components.git
   ```
   Replace `YOUR-GITHUB-USERNAME` with your actual GitHub handle.

10. **Commit your existing files and push:**
    ```bash
    git add .
    git commit -m "Initial commit: manifesto, setup checklist, first field note"
    git push -u origin main
    ```
    If push prompts for credentials, use a personal access token (GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → generate one with `repo` scope; paste it as your password).

---

## Stage 4 — Install Claude Code (5 min)

11. **Install the native version (no Node dependency):**
    ```bash
    curl https://claude.ai/install.sh | bash
    ```

12. **Verify and run:**
    ```bash
    claude --version
    cd "/Users/aurorapleguezuelo/Documents/Claude/Projects/Secret Lives of Components"
    claude
    ```
    First run opens a browser for authentication. Sign in with the same Anthropic account you use for Cowork.

---

## Stage 5 — Hand off to Claude Code

13. Once Claude Code is running in the project folder, paste this as your first message:

    > Read CLAUDE.md, setup-checklist.md, and field-notes/2026-05-01-before-the-first-line.md. We're starting Phase 2 of the setup checklist. Scaffold the pnpm workspace and the four packages (tokens, core, react, docs) with the structure described in CLAUDE.md. Don't install Astro or Lit yet — just the directory structure, package.json files, workspace config, and root tsconfig. Show me the result before moving to Phase 3.

That single message hands over the project, context and all. Phase 2 should take 15-30 minutes there. Phases 3-5 in a follow-up session.

---

## When something goes wrong

- `git push` rejected → most likely you initialized the GitHub repo with a README. Either delete the repo and recreate empty, or run `git pull origin main --allow-unrelated-histories` then push again.
- `pnpm` not found after install → close and reopen Terminal so the PATH refreshes.
- Claude Code auth doesn't open browser → run `claude doctor` to diagnose.
- Stuck somewhere else → come back to Cowork and tell me where you got stuck. I can troubleshoot.
