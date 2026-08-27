# Drill log

Results of the drills in [`drills.md`](drills.md).

**Entries are never edited and never deleted. Only appended.** The value of this file
is that it shows what was true at the time — including the things that turned out to be
wrong, the drills that failed, and the gaps that took three months to close. An edited
log shows a system that was always fine, which is not a system anybody can learn from.

If a result changes, append a new entry. Leave the old one where it is.

## Entry format

```
2026-08-21 · Drill 3 · The Kill Switch · FAIL
Moved registry.local.json. Engineer halted in under two seconds and named the
missing file. Restored cleanly. But nobody other than me can pull it — the file
is gitignored and on one machine. Logged as a fail on the second half.
Next: name a backup operator.
```

State the date, the drill, PASS or FAIL, what actually happened, and one line on what
happens next. A drill with no next step was not really run.

**Log the fails.** A drill log with nothing but passes is either a system nobody has
really tested or a log somebody has been editing. The example below is worth reading
for exactly this reason: it records a PARTIAL PASS, names the half of the drill that
was not run, and lists eleven gaps the run found.

A worked entry — drill 2 run across all six agents, with its findings — is in
[`example/drill-log.md`](example/drill-log.md).

**Run drills 1, 2 and 3 at setup**, before your first component. They take under an
hour between them and they tell you whether any of this is real.

---

<!-- Your entries go below. Append only. Never edit one above this line. -->
