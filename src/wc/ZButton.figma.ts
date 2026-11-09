// url=<FIGMA_FILE>?node-id=1-38
// source=src/wc/ZButton.svelte
// component=z-button
import figma from 'figma';

const instance = figma.selectedInstance;
const variant = instance.getEnum('Variant', { Primary: '', Secondary: ' variant="secondary"' });
const disabled = instance.getEnum('State', { Default: '', Focus: '', Disabled: ' disabled' });
const label = instance.getString('Label');

export default {
  example: figma.code`<z-button${variant}${disabled}>${label}</z-button>`,
  imports: ["<script type=\"module\" src=\"/src/wc/index.js\"></script>"],
  id: 'z-button',
  metadata: { nestable: true },
};
