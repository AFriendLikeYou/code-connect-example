<svelte:options
  customElement={{
    tag: 'z-card',
    props: { kicker: { type: 'String' }, headline: { type: 'String' }, text: { type: 'String' } },
  }}
/>

<script>
  // <z-card kicker headline text> mit <z-badge slot="badge"> und Buttons als Inhalt.
  import Card from '../lib/Card.svelte';

  let { kicker, headline, text } = $props();
  const hasBadge = $host().querySelector(':scope > [slot="badge"]') !== null;
</script>

<!-- hasBadge im Snippet hält es in der Komponente; sonst fehlt dem Slot der Bezug -->
{#snippet badgeSlot()}{#if hasBadge}<slot name="badge" />{/if}{/snippet}

<Card {kicker} {headline} {text} badge={hasBadge ? badgeSlot : undefined}><slot /></Card>

<style>
  :host {
    display: block;
    max-width: 360px;
    width: 100%;
  }
</style>
