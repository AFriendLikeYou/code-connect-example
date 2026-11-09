<svelte:options customElement={{ tag: 'z-badge', props: { tone: { type: 'String' } } }} />

<script>
  // <z-badge tone="accent">Label</z-badge>
  import Badge from '../lib/Badge.svelte';

  let { tone = 'neutral' } = $props();
</script>

<Badge {tone}><slot /></Badge>

<style>
  :host {
    display: inline-block;
  }
</style>
