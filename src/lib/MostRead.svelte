<script>
  /**
   * Meistgelesen. Figma: Rahmen „Meistgelesen“ (Seite „Präsentation“, Folie 09).
   * Nummerierte Liste mit Dachzeile und Titel je Eintrag, darunter Button „Alle Artikel“.
   * Die Ziffern kommen aus der <ol> (counter list-item), nicht aus dem Inhalt.
   * @type {{
   *   heading?: string,
   *   items: { kicker: string, title: string, href: string }[],
   *   moreLabel?: string,
   *   onmore?: (event: MouseEvent) => void
   * }}
   */
  import Button from './Button.svelte';

  let { heading = 'Meistgelesen', items, moreLabel = 'Alle Artikel', onmore } = $props();
</script>

<section class="most-read" aria-labelledby="most-read-heading">
  <h2 class="most-read__heading" id="most-read-heading">{heading}</h2>
  <ol class="most-read__list">
    {#each items as item (item.href)}
      <li class="most-read__item">
        <a class="most-read__link" href={item.href}>
          <span class="most-read__texts">
            <span class="most-read__kicker">{item.kicker}</span>
            <span class="most-read__title">{item.title}</span>
          </span>
        </a>
      </li>
    {/each}
  </ol>
  <div class="most-read__more">
    <Button variant="secondary" onclick={onmore}>{moreLabel}</Button>
  </div>
</section>

<style>
  .most-read {
    background: var(--z-ds-color-background-0);
    border: 1px solid var(--z-ds-color-border-70);
    border-radius: var(--z-ds-border-radius-4);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: var(--z-ds-space-m);
    max-width: 360px;
    padding: var(--z-ds-space-l);
    width: 100%;
  }

  .most-read__heading {
    color: var(--z-ds-color-text-100);
    font: 700 20px/1.2 var(--z-ds-font);
    margin: 0;
  }

  .most-read__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .most-read__item {
    border-top: 1px solid var(--z-ds-color-border-70);
  }

  .most-read__link {
    align-items: flex-start;
    color: inherit;
    display: flex;
    gap: var(--z-ds-space-m);
    padding: var(--z-ds-space-s) 0;
    text-decoration: none;
  }

  /* Ziffer aus der Liste; für Screenreader liefert die <ol> die Position. */
  .most-read__link::before {
    color: var(--z-ds-color-accent-100);
    content: counter(list-item);
    flex: none;
    font: 700 20px/1.2 var(--z-ds-font);
  }

  .most-read__link:focus-visible {
    outline: 2px solid var(--z-ds-color-focus-100);
    outline-offset: 2px;
  }

  .most-read__texts {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--z-ds-space-xxs);
    min-width: 0;
  }

  .most-read__kicker {
    color: var(--z-ds-color-accent-100);
    font: 700 14px/1 var(--z-ds-font);
  }

  .most-read__title {
    color: var(--z-ds-color-text-100);
    font: 700 16px/1 var(--z-ds-font);
  }

  /* Button füllt die Breite wie in Figma (Fill container). */
  .most-read__more {
    display: flex;
    flex-direction: column;
  }
</style>
