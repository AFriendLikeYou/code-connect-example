// url=<FIGMA_FILE>?node-id=1-43
// source=src/lib/Badge.svelte
// component=Badge
import figma from 'figma';

const instance = figma.selectedInstance;
const tone = instance.getEnum('Tone', { Neutral: '', Accent: ' tone="accent"' });
const label = instance.getString('Label');

export default {
  example: figma.code`<Badge${tone}>${label}</Badge>`,
  imports: ["import { Badge } from './lib';"],
  id: 'badge',
  metadata: { nestable: true },
};
