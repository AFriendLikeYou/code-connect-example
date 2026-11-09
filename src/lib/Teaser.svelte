<script>
  /**
   * Artikel-Teaser, aufgebaut wie zon-teaser auf zeit.de: Z+ und Kicker, Titel, Teasertext,
   * Autor, dazu Merken und Teilen. Figma: „Teaser“ (Layout Groß / Klein; Texte Kicker,
   * Headline, Text, Autor; Schalter Z+ und Aktionen).
   * @type {{
   *   layout?: 'large' | 'small',
   *   image: string,
   *   alt?: string,
   *   kicker: string,
   *   headline: string,
   *   text?: string,
   *   author?: string,
   *   zplus?: boolean,
   *   actions?: boolean,
   *   href?: string
   * }}
   */
  import Badge from './Badge.svelte';

  let {
    layout = 'large',
    image,
    alt = '',
    kicker,
    headline,
    text,
    author,
    zplus = false,
    actions = true,
    href = '#',
  } = $props();
</script>

<article class="zon-teaser zon-teaser--{layout}">
  <img class="zon-teaser__media" src={image} {alt} />
  <div class="zon-teaser__content">
    <p class="zon-teaser__kicker">
      {#if zplus}<Badge>Z+</Badge><span class="visually-hidden">(abopflichtiger Inhalt)</span>{/if}
      <span>{kicker}</span>
    </p>
    <h3 class="zon-teaser__title"><a class="zon-teaser__link" {href}>{headline}</a></h3>
    {#if text && layout === 'large'}<p class="zon-teaser__summary">{text}</p>{/if}
    {#if author || actions}
      <div class="zon-teaser__footer">
        {#if author}<p class="zon-teaser__author">{author}</p>{/if}
        {#if actions}
          <!-- Icons aus der ZDS-Icon-Library (bookmark, mail; Size 18). In Figma als SVG exportierbar. -->
          <div class="zon-teaser__actions">
            <button type="button" class="zon-teaser__action" aria-label="Merken">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6299 2C13.5158 2.00003 14.2344 2.71858 14.2344 3.60449V16.0576L9 13.0664L3.76562 16.0576V3.60449C3.76562 2.71856 4.48418 2 5.37012 2H12.6299ZM5.37012 3.5C5.31261 3.5 5.26562 3.54699 5.26562 3.60449V13.4727L9 11.3389L12.7344 13.4727V3.60449C12.7344 3.54701 12.6874 3.50003 12.6299 3.5H5.37012Z"
                />
              </svg>
            </button>
            <button type="button" class="zon-teaser__action" aria-label="Per E-Mail teilen">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9995 3.00024C16.5518 3.00024 16.9995 3.44797 16.9995 4.00024V14.0002C16.9992 14.5523 16.5516 14.9993 15.9995 14.9993H2.00049C1.44838 14.9993 1.00075 14.5523 1.00049 14.0002V4.00024C1.00049 3.44797 1.44822 3.00024 2.00049 3.00024H15.9995ZM9.00049 9.89673L2.50049 5.63794V13.4993H15.4995V5.63794L9.00049 9.89673ZM8.99951 8.10278L14.4995 4.50024H3.50049L8.99951 8.10278Z"
                />
              </svg>
            </button>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</article>

<style>
  .zon-teaser {
    display: flex;
    flex-direction: column;
    gap: var(--z-ds-space-m);
    max-width: 360px;
    position: relative;
    width: 100%;
  }

  .zon-teaser--small {
    flex-direction: row;
  }

  .zon-teaser__media {
    aspect-ratio: 3 / 2;
    border-radius: var(--z-ds-border-radius-4);
    display: block;
    object-fit: cover;
    width: 100%;
  }

  .zon-teaser--small .zon-teaser__media {
    flex: none;
    align-self: flex-start;
    width: 120px;
  }

  .zon-teaser__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--z-ds-space-xs);
    min-width: 0;
  }

  .zon-teaser__kicker,
  .zon-teaser__title,
  .zon-teaser__summary,
  .zon-teaser__author {
    margin: 0;
  }

  .zon-teaser__kicker {
    align-items: center;
    color: var(--z-ds-color-accent-100);
    display: flex;
    font: 700 14px/1 var(--z-ds-font);
    gap: var(--z-ds-space-xs);
  }

  .zon-teaser__title {
    color: var(--z-ds-color-text-100);
    font: 700 20px/1.2 var(--z-ds-font);
  }

  .zon-teaser--small .zon-teaser__title {
    font-size: 16px;
    line-height: 1;
  }

  .zon-teaser__summary {
    color: var(--z-ds-color-text-70);
    font: 400 16px/1.5 var(--z-ds-font);
  }

  .zon-teaser__footer {
    align-items: center;
    display: flex;
    gap: var(--z-ds-space-s);
  }

  .zon-teaser__author {
    color: var(--z-ds-color-text-55);
    flex: 1;
    font: 400 12px/1.5 var(--z-ds-font);
  }

  /* Der Titel-Link macht den ganzen Teaser klickbar, die Knöpfe liegen darüber. */
  .zon-teaser__link {
    color: inherit;
    text-decoration: none;
  }

  .zon-teaser__link::after {
    content: '';
    inset: 0;
    position: absolute;
  }

  .zon-teaser__link:focus-visible {
    outline: none;
  }

  .zon-teaser:has(.zon-teaser__link:focus-visible) {
    outline: 2px solid var(--z-ds-color-focus-100);
    outline-offset: 2px;
  }

  .zon-teaser__actions {
    display: flex;
    gap: var(--z-ds-space-s);
    position: relative;
  }

  .zon-teaser__action {
    background: none;
    border: 0;
    color: var(--z-ds-color-text-70);
    cursor: pointer;
    display: block;
    padding: 0;
  }

  .zon-teaser__action:focus-visible {
    outline: 2px solid var(--z-ds-color-focus-100);
    outline-offset: 2px;
  }

  .visually-hidden {
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
