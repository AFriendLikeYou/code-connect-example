// url=<FIGMA_FILE>?node-id=1-38
// source=src/lib/Button.svelte
// component=Button
import figma from 'figma';

// Läuft in Figma, nicht in der App: liest die Eigenschaften der gewählten Instanz und
// baut daraus den Svelte-Code, den Dev Mode zeigt.
// Focus hat keinen eigenen Code: Den Ring zeichnet der Browser per :focus-visible.
const instance = figma.selectedInstance;
const variant = instance.getEnum('Variant', { Primary: '', Secondary: ' variant="secondary"' });
const disabled = instance.getEnum('State', { Default: '', Focus: '', Disabled: ' disabled' });
const label = instance.getString('Label');

export default {
  example: figma.code`<Button${variant}${disabled}>${label}</Button>`,
  imports: ["import { Button } from './lib';"],
  id: 'button',
  metadata: { nestable: true },
};
