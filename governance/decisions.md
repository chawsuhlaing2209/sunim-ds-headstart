# Decisions

An append-only log of what was decided about the agent fleet, and why.

**Entries are never edited and never deleted. Only appended.** The value of this log
is that it shows what was believed at the time — a corrected entry destroys exactly
the thing it exists to record. If a decision turns out to be wrong, or changes, write
a new entry saying so and leave the old one where it is.

An entry reading **proposed at** is not confirmed. It becomes confirmed when a later
entry says so — not by editing the line above.

> Not to be confused with [`decisions.md` at the repo root](../decisions.md), which
> logs rulings on QA findings. Different file, different purpose.

## Entry format

```
<date> · <agent> agent proposed at <level>.
<Why that level and not the one above or below it — from what the agent's own file
lets it reach, not from how well it has behaved.> Revisit <the specific event that
should make you look again>.
```

Every entry names what would make you revisit it. An entry with no revisit condition
is a decision nobody will ever reopen, which is how a proposed level quietly becomes
a permanent one.

A worked set of six — one per agent, written for the repo this headstart was cut from
— is in [`example/decisions.md`](example/decisions.md). The levels there are a
reasonable starting point for the same six agents, but the reasoning is what to copy,
not the verdicts.

---

<!-- Your entries go below. Append only. Never edit one above this line. -->
