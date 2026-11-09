// url=<FIGMA_FILE>?node-id=1-1110
// source=src/lib/Teaser.svelte
// component=Teaser
import figma from 'figma';

const instance = figma.selectedInstance;
const layout = instance.getEnum('Layout', { Groß: '', Klein: '\n  layout="small"' });
const isLarge = layout === '';
const text = isLarge ? `\n  text="${instance.getString('Text')}"` : '';
const zplus = instance.getBoolean('Z+') ? '\n  zplus' : '';
const actions = instance.getBoolean('Aktionen') ? '' : '\n  actions={false}';

export default {
  example: figma.code`<Teaser${layout}
  image="/teaser.jpg"
  alt="<Bildbeschreibung>"
  kicker="${instance.getString('Kicker')}"
  headline="${instance.getString('Headline')}"${text}
  author="${instance.getString('Autor')}"${zplus}${actions}
/>`,
  imports: ["import { Teaser } from './lib';"],
  id: 'teaser',
  metadata: { nestable: true },
};
