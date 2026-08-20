/*
 * The public surface.
 *
 * A component is public when it is exported here, and not before. Everything
 * else in `src/` is scaffolding, whatever a consumer can reach by deep import.
 *
 * This file is empty because nothing has shipped yet. Add one export pair per
 * component once 🔍 QA has passed it and 🚀 DevOps has deployed it — the
 * component and its props type:
 *
 *   export { Button } from './components/Button/Button';
 *   export type { ButtonProps } from './components/Button/Button';
 *
 * Adding a line here is a release decision, not a build step. `VERSIONING.md`
 * says what the number then promises. 📦 Release gate 3 reads this file and
 * fails a release whose board and surface disagree, so a component that is
 * `Completed` on the board and missing here stops the release rather than
 * shipping quietly.
 */

export type { ComponentIntent } from './intent';
