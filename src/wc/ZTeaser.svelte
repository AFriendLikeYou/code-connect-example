<svelte:options
  customElement={{
    tag: 'z-teaser',
    props: {
      layout: { type: 'String' },
      image: { type: 'String' },
      alt: { type: 'String' },
      kicker: { type: 'String' },
      headline: { type: 'String' },
      text: { type: 'String' },
      author: { type: 'String' },
      zplus: { type: 'Boolean' },
      noActions: { type: 'Boolean', attribute: 'no-actions' },
      href: { type: 'String' },
    },
  }}
/>

<script>
  // <z-teaser layout="small" image="…" kicker="…" headline="…" author="…" zplus>
  // Merken und Teilen sind an, wie in Figma. Ausschalten mit dem Attribut no-actions.
  import Teaser from '../lib/Teaser.svelte';

  let { noActions = false, ...props } = $props();
</script>

<Teaser {...props} actions={!noActions} />

<style>
  :host {
    display: block;
    max-width: 360px;
    width: 100%;
  }
</style>
