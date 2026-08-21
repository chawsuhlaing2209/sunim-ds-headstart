# Operating model

How work moves through this repo, who holds what, and where the gaps are. Five
minutes, no prior knowledge assumed.

> **This file ships unfilled, and that is the point.** Everything below is a question
> about *your* project that nothing in a template can answer. A worked version — the
> one written for the repo this headstart was cut from — is in
> [`example/operating-model.md`](example/operating-model.md). Read it, then answer
> these for yourself. Copying its answers gives you a file that describes somebody
> else's project and passes every check you have, which is worse than no file.
>
> Fill this in **before** you build your first component, not after. It takes twenty
> minutes and it is the only part of this repo that cannot be derived from the code.

## People

**Orchestrator — _______.** Owns [`fleet.md`](fleet.md), decides an agent's level, and
holds every kill switch.

**Reviewers — _______.** Reviews every PR into `main`, and is the required reviewer on
the `npm-publish` environment, so no version reaches npm without their approval.

**Backup — _______.** Who stops the fleet, merges, and publishes when the orchestrator
is away.

> If the orchestrator and the only reviewer are the same person, write that down here
> rather than leaving it implicit. Every "a human reviews it" in this system is then
> one person reviewing work they also commissioned — a deliberate pause, not a second
> opinion. It is a reasonable way to run a small project. It is not a reasonable thing
> to leave undiscovered.
>
> If the Backup line is empty, say so in the line itself. An empty blank reads as
> unanswered; **⚠️ nobody yet** reads as answered, and badly, which is the truth.

## Process

Fill one row per kind of work you actually do. The first five are how this repo is
wired out of the box, so they start filled — check each against what you really do
and correct it where it differs. The last three ship as question marks.

| Work type | Where it starts | Who reviews it | What happens when it fails |
|---|---|---|---|
| Building a component | Airtable row reads `To-do` | 🔍 QA — never the engineer who built it | QA writes `Failed` rows, the row reads `To be fixed`, back to the engineer |
| Testing a component | Row reads `Ready for Testing` **and** has a staging link | _______ — no verdict is final until a human reads it | No staging link, no test. QA reports it is blocked and waits |
| Documenting a component | Row reads `Completed` | `npm run release-review` gate 6, then _______ | Intent cannot be written truthfully → write the gap and stop. Never soften it |
| Deploying to production | Row reads `To be deployed` at 100% | The gates: security check, lint, tests, and opening the deployed page | `BLOCKED` stops the ship. A merge conflict goes back to the engineer, never resolved on the way past |
| Releasing a version | A human asks. Never a schedule | _______ confirms the version, then approves `npm-publish` | Nothing is published. The release branch is deleted rather than merged |
| **A bug found in production** | ? | ? | ? |
| **A request from another team** | ? | ? | ? |
| **An agent behaving badly** | ? | ? | ? |

The last three rows are the point of this table. This repo ships with no defined path
for any of them, and neither did the one it was cut from. The question marks stay
until you define one — leaving them visible is honest; deleting the rows is not.

Drill 5 in [`drills.md`](drills.md) is how you find out whether a row you filled in
actually works.

## Governance

- **[The fleet table](fleet.md)** — every agent, what it can write, what checks it,
  how to stop it. Ships filled in for the six agents here; every level in it is marked
  PROPOSED, including in your copy.
- **[The decision log](decisions.md)** — what you decided about each agent and why.
  Append-only; entries are never edited. Ships empty.
- **[The drills](drills.md)** — six exercises that test whether any of this works.
  Results go in [`drill-log.md`](drill-log.md), which ships empty.
- **[Rulings](../decisions.md)** — findings a human has already decided on, at the
  repo root. Check it before reporting something as new.
- **[Per-path trust levels](../.claude/rules/)** — six paths where an agent gets less
  authority than its level says, and why.

### Review cadence

**First review: _______.** Monthly after that.

Three questions, every time:

1. **Are the levels still honest?** Does each agent's level match what its file
   actually lets it do today?
2. **Has anything earned a promotion, or lost one?** Name the evidence — a clean
   run, or a failure.
3. **Has the kill switch been tested?** Not "does it exist" — has somebody moved
   `.claude/registry.local.json` and watched an agent stop?

Record the answers in [`drill-log.md`](drill-log.md). A review whose answers live only
in your head is a review the system does not have.
