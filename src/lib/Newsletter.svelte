<script>
  /**
   * Newsletter-Anmeldung. Gibt es nur im Code, nicht in Figma: Testfall für die Richtung
   * Code → Figma (Folie 10). Nutzt Badge und Button aus src/lib und nur Token aus tokens.css.
   * Ansicht allein: http://localhost:5190/?nur=newsletter
   * @type {{
   *   badge?: string,
   *   heading?: string,
   *   text?: string,
   *   buttonLabel?: string,
   *   note?: string,
   *   onsubmit?: (event: SubmitEvent) => void
   * }}
   */
  import Badge from './Badge.svelte';
  import Button from './Button.svelte';

  let {
    badge = 'Kostenlos',
    heading = 'Was jetzt?',
    text = 'Der Morgen-Newsletter der ZEIT: kurz, klar und jeden Werktag um 6 Uhr in deinem Postfach.',
    buttonLabel = 'Newsletter abonnieren',
    note = 'Abmelden geht jederzeit mit einem Klick.',
    onsubmit = (event) => event.preventDefault(),
  } = $props();

  const id = 'newsletter-email';
</script>

<section class="newsletter" aria-labelledby="newsletter-heading">
  <div class="newsletter__badge"><Badge tone="accent">{badge}</Badge></div>
  <div class="newsletter__texts">
    <h2 class="newsletter__heading" id="newsletter-heading">{heading}</h2>
    <p class="newsletter__text">{text}</p>
  </div>
  <form class="newsletter__form" {onsubmit}>
    <label class="newsletter__label" for={id}>E-Mail-Adresse</label>
    <input
      class="newsletter__input"
      {id}
      type="email"
      name="email"
      autocomplete="email"
      placeholder="name@beispiel.de"
      required
    />
    <Button type="submit">{buttonLabel}</Button>
  </form>
  <p class="newsletter__note">{note}</p>
</section>

<style>
  .newsletter {
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

  .newsletter__badge {
    display: flex;
  }

  .newsletter__texts {
    display: flex;
    flex-direction: column;
    gap: var(--z-ds-space-xs);
  }

  .newsletter__heading,
  .newsletter__text,
  .newsletter__note {
    margin: 0;
  }

  .newsletter__heading {
    color: var(--z-ds-color-text-100);
    font: 700 20px/1.2 var(--z-ds-font);
  }

  .newsletter__text {
    color: var(--z-ds-color-text-70);
    font: 400 16px/1.5 var(--z-ds-font);
  }

  .newsletter__form {
    display: flex;
    flex-direction: column;
    gap: var(--z-ds-space-xs);
  }

  .newsletter__label {
    color: var(--z-ds-color-text-100);
    font: 700 14px/1 var(--z-ds-font);
  }

  .newsletter__input {
    background: var(--z-ds-color-background-0);
    border: 1px solid var(--z-ds-color-text-55);
    border-radius: var(--z-ds-border-radius-4);
    box-sizing: border-box;
    color: var(--z-ds-color-text-100);
    font: 400 16px/1 var(--z-ds-font);
    padding: var(--z-ds-space-s);
    width: 100%;
  }

  .newsletter__input::placeholder {
    color: var(--z-ds-color-text-55);
  }

  .newsletter__input:focus-visible {
    outline: 2px solid var(--z-ds-color-focus-100);
    outline-offset: 2px;
  }

  .newsletter__note {
    color: var(--z-ds-color-text-55);
    font: 400 14px/1.4 var(--z-ds-font);
  }
</style>
