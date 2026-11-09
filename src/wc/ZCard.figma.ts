// url=<FIGMA_FILE>?node-id=1-44
// source=src/wc/ZCard.svelte
// component=z-card
import figma from 'figma';

// Badge und Buttons liest die Vorlage direkt aus den Eigenschaften der verschachtelten
// Instanzen: Das Badge braucht hier slot="badge", das kennt seine eigene Vorlage nicht.
const instance = figma.selectedInstance;
const kicker = instance.getBoolean('Kicker anzeigen') ? instance.getString('Kicker') : '';
const text = instance.getBoolean('Text anzeigen') ? instance.getString('Text') : '';
const headline = instance.getString('Headline');

const badgeLine = () => {
  if (!instance.getBoolean('Badge anzeigen')) return '';
  const badge = instance.findInstance('Badge');
  if (badge.type !== 'INSTANCE') return '';
  const tone = badge.getEnum('Tone', { Neutral: '', Accent: ' tone="accent"' });
  return `\n  <z-badge slot="badge"${tone}>${badge.getString('Label')}</z-badge>`;
};

const buttonLine = (name: string) => {
  const button = instance.findInstance(name);
  if (button.type !== 'INSTANCE') return '';
  const variant = button.getEnum('Variant', { Primary: '', Secondary: ' variant="secondary"' });
  const disabled = button.getEnum('State', { Default: '', Focus: '', Disabled: ' disabled' });
  return `\n  <z-button${variant}${disabled}>${button.getString('Label')}</z-button>`;
};

const attr = (name: string, value: string) => (value ? ` ${name}="${value}"` : '');
const buttons = buttonLine('Button 1') + (instance.getBoolean('Zweiter Button') ? buttonLine('Button 2') : '');

export default {
  example: figma.code`<z-card${attr('kicker', kicker)} headline="${headline}"${attr('text', text)}>${badgeLine()}${buttons}
</z-card>`,
  imports: ["<script type=\"module\" src=\"/src/wc/index.js\"></script>"],
  id: 'z-card',
};
