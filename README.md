# Dev-Mode-Demo

Begleitprojekt zur Präsentation „How to: Dev Mode“ in der Figma-Datei
[Dev-Mode](https://www.figma.com/design/aldKfnvuW7isNBP59Lq1kp/Dev-Mode), Seite „Präsentation“.

Die Figma-Datei zeigt, was Dev Mode kann. Dieses Repo ist die Code-Seite dazu: dieselben
Komponenten mit denselben Namen, Eigenschaften und Token. Wer im Dev Mode eine Komponente
anklickt, sieht dort den Code aus diesem Repo und kann beides direkt vergleichen.

## Starten

```bash
npm install
npm run dev
```

- http://localhost:5190 zeigt alle Komponenten als Svelte.
- http://localhost:5190/web-components.html zeigt dieselben Komponenten als Web Components, ohne Svelte.
- http://localhost:5190/?nur=newsletter zeigt nur die Newsletter-Box, als Vorlage für den Test auf Folie 10.

Oben auf der Seite schaltest du zwischen Light und Dark um.

## Wie Figma und Code zusammenhängen

| In Figma | Im Code | Wo man es sieht |
|---|---|---|
| Komponente, z. B. „Card“ | `src/lib/Card.svelte` | Dev Mode, Abschnitt „Code Connect“ |
| Eigenschaft, z. B. „Headline“ | Prop `headline` | Playground und Code-Snippet im Dev Mode |
| Variable, z. B. Text/100 oder M | `var(--z-ds-color-text-100)`, `var(--z-ds-space-m)` in `tokens.css` | Dev Mode zeigt den CSS-Namen als Code-Namen |
| Ebene, z. B. `card__headline` | Klasse `.card__headline` | Ebenenliste in Figma und Elemente im Browser |
| Auto Layout (Abstand, Innenabstand) | Flexbox mit `gap` und `padding` aus den Token | Dev Mode, Inspect-Panel |
| Status „Ready for dev“ | alles, was gebaut werden darf | Dev Mode, Liste „Ready for dev“ |

Die Token-Werte in `src/lib/tokens.css` stammen aus der Figma-Library „❖ ZDS“, für Light und Dark.
Neue Farben oder Abstände gibt es im Code nicht, nur diese Token.

### Code Connect

Code Connect sorgt dafür, dass Dev Mode bei einer Komponente unseren echten Code zeigt und nicht
generiertes CSS. Neben jeder Komponente liegt eine Vorlage (`*.figma.ts`). Sie läuft in Figma,
liest die Eigenschaften der gewählten Instanz und baut daraus das Snippet.

| Figma-Komponente | Svelte | Web Component | Vorlagen |
|---|---|---|---|
| [Button](https://www.figma.com/design/aldKfnvuW7isNBP59Lq1kp/Dev-Mode?node-id=1-38) | `src/lib/Button.svelte` | `<z-button>` | `Button.figma.ts`, `ZButton.figma.ts` |
| [Badge](https://www.figma.com/design/aldKfnvuW7isNBP59Lq1kp/Dev-Mode?node-id=1-43) | `src/lib/Badge.svelte` | `<z-badge>` | `Badge.figma.ts`, `ZBadge.figma.ts` |
| [Card](https://www.figma.com/design/aldKfnvuW7isNBP59Lq1kp/Dev-Mode?node-id=1-44) | `src/lib/Card.svelte` | `<z-card>` | `Card.figma.ts`, `ZCard.figma.ts` |
| [Teaser](https://www.figma.com/design/aldKfnvuW7isNBP59Lq1kp/Dev-Mode?node-id=1-1110) | `src/lib/Teaser.svelte` | `<z-teaser>` | `Teaser.figma.ts`, `ZTeaser.figma.ts` |

Im Dev Mode gibt es dafür ein Auswahlmenü mit „Svelte“ und „Web Components“. Dahinter stehen
zwei Konfigurationen: `figma.config.json` und `figma.wc.config.json`. Die Card baut Badge und
Buttons nicht nach, sondern fragt deren eigene Snippets ab. Beim Teaser schaltet die Eigenschaft
„Aktionen“ (Merken und Teilen) in Svelte `actions={false}` und als Web Component das Attribut
`no-actions`.

Vorlagen ändern und hochladen:

```bash
npm run figma:parse     # Vorlagen prüfen, ohne etwas hochzuladen
cp .env.example .env    # Figma-Token eintragen, Erklärung steht in der Datei
npm run figma:dry-run   # gegen Figma prüfen
npm run figma:publish   # hochladen
```

Voraussetzung ist, dass die Komponenten der Figma-Datei als Library veröffentlicht sind.

## Was zu welcher Folie gehört

| Folie | Thema | Im Code |
|---|---|---|
| 00 | Intro | `Teaser.svelte` |
| 02 | Werte ablesen | `Card.svelte`, `tokens.css`, Klassen gleich Ebenennamen |
| 03 | Light und Dark | `tokens.css`, Umschalter oben auf der Seite |
| 04 | Assets exportieren | `Teaser.svelte` (Bild und Icons) |
| 05 | Playground und Zustände | `Button.svelte` (Primary, Secondary, Focus, Disabled) |
| 08 | Code Connect | alle `*.figma.ts` |
| 09 | MCP: Figma → Code | `MostRead.svelte`, gebaut von der KI aus dem Rahmen „Meistgelesen“ und `docs/spec-meistgelesen.md` |
| 10 | MCP: Code → Figma | `Newsletter.svelte`, gibt es nur im Code und wird nach Figma geholt |

Die Folien 01, 06 und 07 (Dev Mode öffnen, Anmerkungen und Kommentare, Compare changes) zeigen
Funktionen von Figma und brauchen keinen eigenen Code.

### Folie 09: Figma → Code

Den Rahmen „Meistgelesen“ in Figma auswählen und per „Copy link to selection“ den Link kopieren.
Dann in Claude Code oder VS Code mit Figma-MCP:

> Baue den Rahmen „Meistgelesen“ aus Figma als src/lib/MostRead.svelte: <Link>. Nutze die
> Komponenten aus src/lib und die Token aus tokens.css, keine neuen Farben oder Abstände.
> Zeig ihn in App.svelte.

### Folie 10: Code → Figma

Zwei Wege. Getestet ist bisher nur der zweite, über Figma Console MCP:

- **Figmas MCP-Server aus dem Netz** (`generate_figma_design`): erfasst die laufende Seite im
  Browser. Heraus kommen Ebenen, keine Komponenten. Farben und Abstände mit Library-Werten werden
  zu Variablen. Einrichtung:

  ```sh
  claude mcp add --transport http figma https://mcp.figma.com/mcp
  # danach in Claude Code: /mcp → figma → Authenticate
  ```

- **Figma Console MCP** von Southleft, über das Desktop-Plugin: Die KI liest `Newsletter.svelte`
  und baut die Box in Figma nach, mit echten Instanzen von Badge und Button, Variablen und
  Textstilen. Die Ebenen heißen wie die Klassen.

Prompt, mit dem Link zum Rahmen „Ziel: Newsletter“:

> Starte den Dev-Server in ~/devmode-demo und übertrage die Newsletter-Box von
> http://localhost:5190/?nur=newsletter nach Figma in den Rahmen „Ziel: Newsletter“: <Link>

## Was wo liegt

```
src/lib/tokens.css        Token: Namen und Werte wie in der Figma-Library „❖ ZDS“, Light und Dark
src/lib/Button.svelte     Figma „Button“ (Variant × State, Label)
src/lib/Badge.svelte      Figma „Badge“ (Tone, Label)
src/lib/Card.svelte       Figma „Card“ (Kicker, Headline, Text, Badge, Buttons)
src/lib/Teaser.svelte     Figma „Teaser“ (Layout groß und klein, Z+, Aktionen)
src/lib/MostRead.svelte   Folie 09: von der KI aus Figma gebaut
src/lib/Newsletter.svelte Folie 10: gibt es nur im Code
src/lib/*.figma.ts        Code-Connect-Vorlagen für „Svelte“
src/wc/Z*.svelte          dieselben Komponenten als Web Components: <z-card>, <z-button> …
src/wc/*.figma.ts         Code-Connect-Vorlagen für „Web Components“
src/App.svelte            Demo-Seite in Svelte
web-components.html       Demo-Seite in reinem HTML
src/nav.js, nav.css       Kopfzeile der Demo-Seiten (Svelte oder Web Components, Light oder Dark)
docs/                     Specs für die KI, z. B. spec-meistgelesen.md
```

## Regel

Ändert sich eine Komponente, ändern sich drei Dinge zusammen: die Svelte-Datei, die
Code-Connect-Vorlage und die Figma-Komponente. Eigenschaften heißen in Figma und Code gleich.
Ebenen in Figma heißen wie die Klassen im Code. Token tragen in Figma den CSS-Namen als Code-Namen.

## Bildrechte

`public/teaser.jpg`: Dunst über Singapur während des Southeast Asian Haze 2013, Foto von Oliverlyc.,
[Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Effects_of_2013_Southeast_Asian_haze_on_Singapore.jpg),
gemeinfrei (CC0). Auf 3:2 zugeschnitten. Dasselbe Bild steckt in der Figma-Komponente „Teaser“.
