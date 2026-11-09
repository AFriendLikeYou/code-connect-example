// Gemeinsame Kopfzeile beider Demo-Seiten: wo bin ich (Svelte oder Web Components) und in
// welchem Modus (Light oder Dark). Der Modus gilt für beide Seiten und bleibt beim Wechsel.
import './nav.css';

const KEY = 'devmode-demo:theme';

const readTheme = () => {
  try {
    return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // ohne Speicher gilt der Modus nur auf dieser Seite
  }
};

applyTheme(readTheme());

const isWebComponents = location.pathname.includes('web-components');
const hint = isWebComponents
  ? 'Dieselben Komponenten als Web Components: reines HTML, kein Svelte auf der Seite.'
  : 'Die Komponenten als Svelte, so wie sie in einer Svelte-App stehen.';

const nav = document.getElementById('demo-nav');
// ?nur=… zeigt eine Komponente allein (Vorlage für Code → Figma), dann ohne Kopfzeile.
nav.hidden = new URLSearchParams(location.search).has('nur');
nav.innerHTML = `
  <div class="demo-nav__row">
    <nav class="demo-nav__group" aria-label="Umsetzung">
      <a class="demo-nav__item" href="/" ${isWebComponents ? '' : 'aria-current="page"'}>Svelte</a>
      <a class="demo-nav__item" href="/web-components.html" ${isWebComponents ? 'aria-current="page"' : ''}>Web Components</a>
    </nav>
    <div class="demo-nav__group" role="group" aria-label="Farbmodus">
      <button type="button" class="demo-nav__item" data-theme-value="light">Light</button>
      <button type="button" class="demo-nav__item" data-theme-value="dark">Dark</button>
    </div>
  </div>
  <p class="demo-nav__hint">${hint}</p>
`;

const syncButtons = () => {
  for (const button of nav.querySelectorAll('[data-theme-value]')) {
    button.setAttribute('aria-pressed', String(button.dataset.themeValue === document.documentElement.dataset.theme));
  }
};

nav.addEventListener('click', (event) => {
  const button = event.target.closest('[data-theme-value]');
  if (!button) return;
  applyTheme(button.dataset.themeValue);
  syncButtons();
});

syncButtons();
