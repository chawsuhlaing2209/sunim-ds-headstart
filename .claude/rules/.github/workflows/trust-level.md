# .github/workflows/ — Observer

**Level here: Observer**, whatever the agent's level elsewhere. `release-publish.yml`
is the only thing in this repo that can reach `secrets.NPM_TOKEN`. An agent that can
edit a workflow can print a secret to a log, or publish without the environment gate
that requires a human.

## May do here
- Read the workflow to check what a job does or which gates run
- Report that a gate is missing, wrong, or unreachable

## Must escalate to a human
- Any edit to a workflow file, including adding a step
- Anything touching `environment:`, `secrets.`, or a trigger
- Removing or weakening the `npm-publish` reviewer requirement

## Kill switch for this path
The `npm-publish` environment requires a human reviewer, so a modified workflow still
cannot publish without approval — ⚠️ **not in place in a fresh clone.** The workflow
declares `environment: npm-publish`, but the reviewer requirement is a GitHub repo
setting, not a file, so it does not arrive with the code. Until you add it, one person
can trigger the only irreversible act in this repo alone.

Set it before your first publish: Settings → Environments → `npm-publish` → Required
reviewers. Then record the date in `governance/drill-log.md`, because it is the one
control here that no file can prove.

The workflow can also be disabled from the Actions tab. Files here are committed, so an
edit is revertable.
