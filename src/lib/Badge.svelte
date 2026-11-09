<script>
  /**
   * Badge. Figma: „Badge“ (Tone, Text-Eigenschaft Label).
   * @type {{ tone?: 'neutral' | 'accent', children: import('svelte').Snippet }}
   */
  let { tone = 'neutral', children } = $props();
</script>

<span class="badge badge--{tone}">{@render children()}</span>

<style>
  .badge {
    background: var(--z-ds-color-background-10);
    border-radius: var(--z-ds-border-radius-4);
    color: var(--z-ds-color-text-70);
    display: inline-block;
    font: 400 12px/1.5 var(--z-ds-font);
    padding: 0 var(--z-ds-space-xxs);
  }

  .badge--accent {
    background: var(--z-ds-color-accent-100);
    color: var(--z-ds-color-background-0);
  }
</style>
