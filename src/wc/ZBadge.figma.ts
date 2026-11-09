// url=<FIGMA_FILE>?node-id=1-43
// source=src/wc/ZBadge.svelte
// component=z-badge
import figma from 'figma';

const instance = figma.selectedInstance;
const tone = instance.getEnum('Tone', { Neutral: '', Accent: ' tone="accent"' });
const label = instance.getString('Label');

export default {
  example: figma.code`<z-badge${tone}>${label}</z-badge>`,
  imports: ["<script type=\"module\" src=\"/src/wc/index.js\"></script>"],
  id: 'z-badge',
  metadata: { nestable: true },
};
