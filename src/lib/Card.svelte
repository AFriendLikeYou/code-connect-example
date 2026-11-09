<script>
  /**
   * Card. Figma: „Card“; die Ebenen heißen wie die Klassen hier (card__kicker …).
   * Eigenschaften: Texte Kicker, Headline, Text; Schalter für Kicker, Text, Badge und
   * zweiten Button). Badge und Buttons sind eigene Komponenten und kommen als Snippets.
   * @type {{
   *   kicker?: string,
   *   headline: string,
   *   text?: string,
   *   badge?: import('svelte').Snippet,
   *   children?: import('svelte').Snippet
   * }}
   */
  let { kicker, headline, text, badge, children } = $props();
</script>

<article class="card">
  {#if badge}<div class="card__badge">{@render badge()}</div>{/if}
  <div class="card__texts">
    {#if kicker}<p class="card__kicker">{kicker}</p>{/if}
    <h2 class="card__headline">{headline}</h2>
    {#if text}<p class="card__text">{text}</p>{/if}
  </div>
  {#if children}<div class="card__actions">{@render children()}</div>{/if}
</article>

<style>
  .card {
    box-sizing: border-box;
    background: var(--z-ds-color-background-0);
    border: 1px solid var(--z-ds-color-border-70);
    border-radius: var(--z-ds-border-radius-4);
    display: flex;
    flex-direction: column;
    gap: var(--z-ds-space-m);
    max-width: 360px;
    width: 100%;
    padding: var(--z-ds-space-l);
  }

  .card__texts {
    display: flex;
    flex-direction: column;
    gap: var(--z-ds-space-xs);
  }

  .card__kicker,
  .card__headline,
  .card__text {
    margin: 0;
  }

  .card__kicker {
    color: var(--z-ds-color-accent-100);
    font: 700 14px/1 var(--z-ds-font);
  }

  .card__headline {
    color: var(--z-ds-color-text-100);
    font: 700 20px/1.2 var(--z-ds-font);
  }

  .card__text {
    color: var(--z-ds-color-text-70);
    font: 400 16px/1.5 var(--z-ds-font);
  }

  .card__actions {
    display: flex;
    flex-direction: column;
    gap: var(--z-ds-space-s);
  }
</style>
