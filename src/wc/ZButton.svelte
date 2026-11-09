<svelte:options
  customElement={{
    tag: 'z-button',
    props: { variant: { type: 'String' }, disabled: { type: 'Boolean' } },
  }}
/>

<script>
  // <z-button variant="secondary" disabled>Label</z-button>: dieselbe Button.svelte, als Web Component.
  import Button from '../lib/Button.svelte';

  let { variant = 'primary', disabled = false } = $props();
</script>

<Button {variant} {disabled}><slot /></Button>

<style>
  :host {
    display: inline-flex;
    flex-direction: column;
  }
</style>
