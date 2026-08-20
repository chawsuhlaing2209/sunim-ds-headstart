import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentIntent } from '../intent';
import { asIntent } from './intent';

/*
 * Every component's intent on one page.
 *
 * Each component already carries its own intent block on its own docs page.
 * This page exists for the other reading — the one 📦 Release does before a
 * release, and the one a consumer does when they know what they want and not
 * which component does it. "Which of these is the clickable one" is answerable
 * in ten seconds here and in four page-loads otherwise.
 *
 * It is glob-driven on purpose. A component that ships without an intent file
 * is simply missing from this page rather than showing a half-filled row, and
 * the gate that catches that is `scripts/release-review.mjs`, not this story.
 * Nothing here needs editing when a component is added.
 */
const modules = import.meta.glob('../components/*/*.intent.json', {
  eager: true,
}) as Record<string, { default: unknown }>;

const INTENTS: ComponentIntent[] = Object.values(modules)
  .map((m) => asIntent(m.default))
  .sort((a, b) => a.component.localeCompare(b.component));

const STATUS_NOTE: Record<ComponentIntent['status'], string> = {
  experimental: 'expect it to change — do not build on the details',
  settling: 'the shape looks right, the names may still move',
  stable: 'changing it would be treated as a breaking change',
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="intent-gallery__row">
      <dt className="intent-gallery__label">{label}</dt>
      <dd className="intent-gallery__value">{children}</dd>
    </div>
  );
}

function IntentCard({ intent }: { intent: ComponentIntent }) {
  return (
    <section className="intent-gallery__card">
      <header className="intent-gallery__head">
        <h3 className="intent-gallery__name">{intent.component}</h3>
        <span className="intent-gallery__since">
          since {intent.since} · {intent.status} — {STATUS_NOTE[intent.status]}
        </span>
      </header>

      <dl className="intent-gallery__grid">
        <Row label="Use when">{intent.use_when}</Row>
        <Row label="Don't use when">{intent.dont_use_when}</Row>
        <Row label="Placement">{intent.placement}</Row>
        <Row label="Required tokens">
          <span className="intent-gallery__tokens">
            {intent.required_tokens.map((t) => (
              <code key={t} className="intent-gallery__token">
                {t}
              </code>
            ))}
          </span>
        </Row>
        <Row label="Accessibility">{intent.a11y}</Row>
      </dl>
    </section>
  );
}

const meta = {
  title: 'Documentation/Component Intent',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `What each component is **for**, and what it is **not** for.

Props say how to call a component. None of them say when you should, or when you
should reach for a different one — which is the question a consumer actually has.

Each row comes from that component's \`<Name>.intent.json\`, the same file the
release gate reads. Nothing on this page is written twice.`,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => (
    <div className="intent-gallery">
      <style>{CSS}</style>
      {INTENTS.length === 0 ? (
        /*
         * A fresh clone lands here, and a blank page reads as a broken one. This
         * says which of the two it is, and names the file that fills it.
         */
        <section className="intent-gallery__card intent-gallery__empty">
          <h3 className="intent-gallery__name">No components yet</h3>
          <p>
            This page is built from every{' '}
            <code>src/components/&lt;Name&gt;/&lt;Name&gt;.intent.json</code> in the repo,
            and there are none. It is not broken — nothing has been built.
          </p>
          <p>
            📝 Doc Generator writes that file, and the same JSON becomes this gallery, the
            component's own docs page, and its page on the reference site. Written once,
            checked once, published once.
          </p>
        </section>
      ) : (
        INTENTS.map((intent) => <IntentCard key={intent.component} intent={intent} />)
      )}
    </div>
  ),
};

/*
 * Scoped to this page and inlined rather than given a `.css` file, because it
 * is documentation chrome and not part of the design system. Every value is
 * still a semantic token — a docs page that reaches for a raw hex is exactly
 * the example nobody should copy.
 */
const CSS = `
.intent-gallery__empty p {
  margin: var(--spacing-space-4) 0 0;
  color: var(--color-text-body);
}

.intent-gallery {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-space-6);
  padding: var(--spacing-space-6);
  background-color: var(--color-surface-page);
  color: var(--color-text-body);
}
.intent-gallery__card {
  background-color: var(--color-surface-card);
  border-radius: var(--radius-radius-card);
  box-shadow: inset 0 0 0 1px var(--color-line-quiet);
  padding: var(--spacing-space-6);
}
.intent-gallery__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--spacing-space-2);
  margin-bottom: var(--spacing-space-4);
}
.intent-gallery__name {
  font: var(--font-body-lead);
  color: var(--color-text-heading);
  margin: 0;
}
.intent-gallery__since {
  font: var(--font-ui-micro);
  color: var(--color-text-faint);
}
.intent-gallery__grid { margin: 0; }
.intent-gallery__row {
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: var(--spacing-space-4);
  padding: var(--spacing-space-3) 0;
  border-top: 1px solid var(--color-line-quiet);
}
.intent-gallery__label {
  font: var(--font-ui-label-strong);
  color: var(--color-text-muted);
}
.intent-gallery__value {
  font: var(--font-body-small);
  color: var(--color-text-body);
  margin: 0;
}
.intent-gallery__tokens {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-space-1);
}
.intent-gallery__token {
  font: var(--font-ui-micro);
  color: var(--color-text-muted);
  background-color: var(--color-surface-sunk);
  border-radius: var(--radius-radius-xs);
  padding: 0 var(--spacing-space-1);
}
@media (max-width: 40rem) {
  .intent-gallery__row { grid-template-columns: 1fr; gap: var(--spacing-space-1); }
}
`;
