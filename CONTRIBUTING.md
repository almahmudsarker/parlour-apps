# Contributing to Parlour Apps

## Branching
- `main`: protected, release-ready
- `dev`: integration branch
- Feature: `feat/<area>-<short-name>`
- Bugfix: `fix/<area>-<short-name>`

## Flow
1. Open an Issue with acceptance criteria.
2. Branch off `dev`.
3. Commit using Conventional Commits: feat, fix, docs, chore, refactor, test, ci.
4. Open PR → target `dev` → request review.
5. CI must be green. Merge.
6. Maintainer promotes `dev` → `main` for release.

## Labels & Milestones
- Use `type:*`, `area:*`, `priority:*` + milestone (v1.1, v1.2, etc.)

## Code Style
- ESLint + Prettier.
