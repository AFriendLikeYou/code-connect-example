<script>
  /**
   * Button. Figma: „Button“ (Variant × State, Text-Eigenschaft Label).
   * @type {{ variant?: 'primary' | 'secondary', disabled?: boolean, children: import('svelte').Snippet, [key: string]: unknown }}
   */
  let { variant = 'primary', disabled = false, children, ...rest } = $props();
</script>

<button type="button" class="button button--{variant}" {disabled} {...rest}>
  {@render children()}
</button>

<style>
  .button {
    align-items: center;
    border: 0;
    border-radius: var(--z-ds-border-radius-4);
    cursor: pointer;
    display: inline-flex;
    font: 700 16px/1 var(--z-ds-font);
    justify-content: center;
    padding: var(--z-ds-space-s) var(--z-ds-space-m);
    transition: background-color 150ms ease-out;
  }

  .button--primary {
    background: var(--z-ds-color-text-100);
    color: var(--z-ds-color-background-0);
  }

  .button--secondary {
    background: var(--z-ds-color-background-10);
    color: var(--z-ds-color-text-100);
  }

  .button:focus-visible {
    outline: 2px solid var(--z-ds-color-focus-100);
    outline-offset: 2px;
  }

  .button:disabled {
    cursor: default;
    opacity: 0.4;
  }
</style>
