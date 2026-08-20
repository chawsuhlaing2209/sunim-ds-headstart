# Changelog

Every release, newest first, grouped the same five ways every time: **Added**,
**Changed**, **Fixed**, **Deprecated**, **Removed**. Same five groups always, so
somebody scanning finds their answer without reading the whole entry.

Write each line for a person with a deadline deciding whether to touch your
version number today. "Refactor Button internals" tells them nothing, so they
open the diff — which is the time you were trying to save them. Tell them whether
it affects them.

`npm run release` drafts the next entry from the commits since the last tag. The
draft is the machine's; the *why* is yours, and it is left obviously blank rather
than invented.

What a version number promises is in `VERSIONING.md`.

## Unreleased

Nothing yet. The first release is `0.1.0` — see `VERSIONING.md` for what that
number does and does not commit you to.
