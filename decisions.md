# Rulings

A finding an agent raises is not automatically a defect. Some are, some are the
design being right and the code being wrong, and some are a judgement call that
only a person can make. This file is where the calls are recorded.

**Agents read this before reporting a finding as new.** A ruling here is not a
defect to fix and not an argument to have again. A finding that is *not* here has
not been ruled on, whatever anyone remembers.

**A human writes this file.** No agent adds a ruling, including the agent that
raised the finding.

Nothing has been ruled on yet. Add entries as they come, newest first, in this
shape:

---

## <Short name of the finding>

**Raised by** 📦 Release, reviewing `<Component>` at `<commit>`
**Ruled** <YYYY-MM-DD> by <who>
**Ruling** <what was decided, in one sentence>

**Why.** <The reasoning. This is the part that stops the argument recurring —
a decision with no reason recorded gets re-opened by the next person who
disagrees with it.>

**What this means for an agent that hits it.** <Concrete instruction. "Report it
and stop", "treat it as correct", "fix it in the component, never in the intent".>

**What is not ruled.** <The neighbouring question this ruling does *not* answer.
Without this line a narrow ruling gets stretched to cover things nobody decided.>

---
