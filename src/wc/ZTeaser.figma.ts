// url=<FIGMA_FILE>?node-id=1-1110
// source=src/wc/ZTeaser.svelte
// component=z-teaser
import figma from 'figma';

const instance = figma.selectedInstance;
const layout = instance.getEnum('Layout', { Groß: '', Klein: ' layout="small"' });
const text = layout === '' ? ` text="${instance.getString('Text')}"` : '';
const zplus = instance.getBoolean('Z+') ? ' zplus' : '';
const actions = instance.getBoolean('Aktionen') ? '' : ' no-actions';

export default {
  example: figma.code`<z-teaser${layout} image="/teaser.jpg" alt="<Bildbeschreibung>" kicker="${instance.getString('Kicker')}" headline="${instance.getString('Headline')}"${text} author="${instance.getString('Autor')}"${zplus}${actions}></z-teaser>`,
  imports: ['<script type="module" src="/src/wc/index.js"></script>'],
  id: 'z-teaser',
  metadata: { nestable: true },
};
