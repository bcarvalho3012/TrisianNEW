# Working rules — TrisianNEW

This repository builds the Trisian website. The plan lives in `brain/` (local only, git-ignored). **Read `brain/00-START-HERE.md` before doing anything.**

## Before writing or changing anything

- **Copy:** the words are in `brain/08-copy-deck.md`. Facts come only from `brain/01-technical-truth.md`. Every claim has passed `brain/03-claims-ledger.md` — check its phrasebook and never-list before writing a new line.
- **Design:** `brain/09-design-system.md`, including its anti-list (§12). Earlier design directions for this site were rejected; do not reintroduce them.
- **Motion:** `brain/10-motion-scenes.md`. Still form first; motion on top; nothing is revealed only by animation.
- **Structure:** `brain/06-experience-strategy.md` and `brain/07-page-blueprints.md`.
- **Decisions:** `brain/13-open-decisions.md`. Build on the stated default; do not stop to ask unless the action is one of those listed below.

## Standing rules

1. **Say less.** A line stays only if it helps a visitor understand Safe Workspace, believe it, or take the next step.
2. **Accuracy binds.** No statement of fact without a source in `brain/01`. No availability figures, client counts, response times, prices or certification claims beyond what `brain/01` allows.
3. **No fear.** No breach imagery, alarm colors, threat statistics, padlocks or shields.
4. **Light-first.** US spelling.
5. **This repository is public.** `brain/`, `source/` and `research/` must never be committed. Do not copy internal material into `site/`, this file, commit messages or code comments. Run `git status` before every commit.
6. **Ask first** before: pushing or deploying; publishing anything; downloading or licensing images, fonts or other files; submitting any form; changing repository settings.
7. Run `npm run check` (in `site/`) before every commit. A failing gate is fixed, not bypassed.
8. After each stage, review the result in the browser at 390, 768 and 1440 wide, with JavaScript off and with reduced motion on.
