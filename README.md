# Design system headstart

A design system with **no components and a full crew**. Six agents, eight skills,
a token pipeline, Storybook, a reference site, and a nine-gate release run — all
wired together and verified. What is missing is the part only you can supply:
your Figma, your tokens, your components.

Cloning this is meant to feel like arriving on day 4 of a project rather than day
0 of a tutorial.

## What is already here

| | |
|---|---|
| Agents | 🎨 human · 🔨 Engineer · 🔍 QA · 🚀 DevOps · 📝 Doc Generator · 📦 Release · 📋 PM |
| Skills | build, test, registry, intent, reference-site, security-check, release-review, release-prepare |
| Tokens | Style Dictionary, one theme per Figma mode |
| Components | **none** — `src/components/` is empty and `src/index.ts` exports nothing |
| Storybook | boots, showing your tokens and an empty intent gallery |
| Reference site | Astro Starlight, five tabs per component page, generated |
| Release | nine gates, a smoke install, a changelog draft, a proposed version |
| Publish | `scripts/publish.mjs`, run by a person. No agent holds a credential |

## First run

```bash
npm install
npm run docs:install
npm run build:tokens
npm run storybook
```

Storybook opens on **Foundations/Tokens** with your token export rendered, and on
an intent gallery that tells you it is empty rather than looking broken. Nothing
else exists yet, and that is the correct state.

## Before you build anything

Three things to change, in this order. All three are cheap now and expensive
later.

**1 · The CSS prefix.** `package.json` → `designSystem.prefix`. It becomes every
component's class and custom property — `.ds-Button`, `--ds-Button-unbound-size`
— and three separate gates check it. Change it before the first component, not
after.

**2 · The package name.** `package.json` → `name`. The scope must be one you can
publish under: your npm username, or an organisation you create. `VERSIONING.md`
says what the number will promise.

**3 · The registry connection.** Copy `.claude/registry.example.json` to
`.claude/registry.local.json` and fill in your Airtable base and table IDs. That
file is gitignored on purpose — this repo is public, and a tracked file naming
your base is a map for anyone holding a leaked token.

**4 · The operating model.** `governance/operating-model.md` ships blank: who reviews,
who can stop the fleet when you are away, and what happens when a bug is found in
production. Twenty minutes, and it is the only part of this repo that cannot be derived
from the code. Then run drills 1, 2 and 3 from `governance/drills.md` — drill 3 pulls
the kill switch for real, which is the only way to find out it works.

Start at [`governance/README.md`](governance/README.md).

## The rules the crew works by

- `CLAUDE.md` — how components are built here, and what agents may not do
- `tools.md` — the commands, and the source of truth for tooling changes
- `VERSIONING.md` — what a version number promises, and what it deliberately does not
- `decisions.md` — rulings a human has made. Empty until you make one
- `.claude/skills/registry/SKILL.md` — the board contract: tables, column owners,
  and the formula that derives status
- `governance/` — how much each agent is allowed to do, why, and how to stop it.
  `fleet.md` ships filled in for these six agents; `operating-model.md` ships blank
- `.claude/rules/<path>/trust-level.md` — six paths where an agent gets less
  authority than its level says, each with the reason

One rule sits above the rest: **the registry records evidence, never intention.**
A link goes in after the thing it points at exists and opens. A status is derived
from links and test rows, never typed to make a row look finished.

## Where the components go

`src/components/<Name>/` — the component, its CSS, its stories, and its
`<Name>.intent.json`. 🔨 Engineer creates all four from a Figma node.

A component becomes public when it is exported from `src/index.ts`, and not
before. That is a release decision, and the release gate fails if the board and
the surface disagree.
