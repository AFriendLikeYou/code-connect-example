// url=<FIGMA_FILE>?node-id=1-44
// source=src/lib/Card.svelte
// component=Card
import figma from 'figma';

// Badge und Buttons sind eigene Komponenten mit eigenem Code Connect: Die Card fragt
// ihre Snippets ab, statt sie nachzubauen.
const instance = figma.selectedInstance;
const kicker = instance.getBoolean('Kicker anzeigen') ? instance.getString('Kicker') : '';
const text = instance.getBoolean('Text anzeigen') ? instance.getString('Text') : '';
const headline = instance.getString('Headline');
const badge = instance.getBoolean('Badge anzeigen') ? instance.findInstance('Badge') : null;
const button1 = instance.findInstance('Button 1');
const button2 = instance.getBoolean('Zweiter Button') ? instance.findInstance('Button 2') : null;

const attr = (name: string, value: string) => (value ? `\n  ${name}="${value}"` : '');

export default {
  example: figma.code`<Card${attr('kicker', kicker)}
  headline="${headline}"${attr('text', text)}
>${badge ? figma.code`
  {#snippet badge()}${badge.executeTemplate().example}{/snippet}` : ''}
  ${button1.executeTemplate().example}${button2 ? figma.code`
  ${button2.executeTemplate().example}` : ''}
</Card>`,
  imports: ["import { Card } from './lib';"],
  id: 'card',
};
