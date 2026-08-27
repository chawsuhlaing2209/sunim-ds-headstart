# governance/

Six agents can build, test, document, ship and release without you in the loop for
most of it. This folder is the part that says how much of that they are allowed to do,
who decides, and how you stop them. It is the difference between a crew and six
processes with write access.

**Read in this order. About forty minutes, once.**

| # | File | What it answers | Ships |
|---|---|---|---|
| 1 | [`operating-model.md`](operating-model.md) | Who reviews, who is the backup, what happens when something fails | **blank — fill it in first** |
| 2 | [`fleet.md`](fleet.md) | What each agent may touch, why it sits at that level, how to stop it | filled in for the six agents here |
| 3 | [`decisions.md`](decisions.md) | Why each level was set, and what would make you revisit it | empty, append-only |
| 4 | [`drills.md`](drills.md) | Six exercises that test whether any of it is real | filled in |
| 5 | [`drill-log.md`](drill-log.md) | What happened when you ran them | empty, append-only |

[`example/`](example/) holds all of these filled in for `sunim-ds-starter`, the repo
this headstart was cut from. Read it. Do not copy it — every name, date and count in
it is a fact about a different project.

## The one idea

**A level is a claim about a verifier, not about how much you trust an agent.**

🚀 DevOps sits at Autonomous here — the top of the ladder — and 🔍 QA sits at Observer,
the bottom. That is not because DevOps is the better agent. It is because DevOps's
failure modes are enumerable and four gates check them, and QA has no automated
verifier at all: the only thing standing between a wrong `Passed` and production is
you reading a report.

So the way to promote an agent is never to decide you trust it more. It is to build
the check that would catch it. `fleet.md`'s *How levels change* section names the
specific check missing for each of the six.

## Before your first component

Three things, in this order:

1. **Fill in `operating-model.md`.** Twenty minutes. Nothing else here means much
   while the reviewer line is blank.
2. **Run drills 1, 2 and 3** from [`drills.md`](drills.md) and log the results.
   Drill 3 is the one people skip and it is the one that matters — pulling the kill
   switch for real, and finding out whether anybody but you can pull it.
3. **Read [`../.claude/rules/`](../.claude/rules/).** Six paths where an agent gets
   less authority than its level says, each with the reason. `.claude/` and
   `.github/workflows/` are the two that would let an agent restore its own access.

## What no agent may do here

Every agent file carries the line: *"Never edit anything in `governance/`. Your level,
your scope and your kill switch are recorded there. An agent that can raise its own
level has no level."*

[`../.claude/rules/governance/trust-level.md`](../.claude/rules/governance/trust-level.md)
says the same thing at the path level and names what an agent may do instead — read it,
and open a PR proposing a change with the evidence for it. Merging is yours.
