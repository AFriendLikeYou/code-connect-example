# Meistgelesen

Kasten mit den drei meistgelesenen Artikeln, für die Seitenleiste auf zeit.de.
Entwurf in Figma: Rahmen „Meistgelesen“ auf der Seite „Präsentation“, Folie 09.

## Ziel

Leserinnen und Leser sehen auf einen Blick, was gerade viel gelesen wird, und kommen mit
einem Klick zum Artikel.

## Inhalt

- Überschrift „Meistgelesen“
- Drei Einträge, nummeriert 1 bis 3, je mit Dachzeile und Titel
- Darunter der Button „Alle Artikel“ (Variante Secondary)

## Bauen

- Datei: `src/lib/MostRead.svelte`, eingebunden in `App.svelte`
- Vorhandene Komponenten nutzen: `Button` aus `src/lib`
- Nur Token aus `tokens.css`, keine neuen Farben oder Abstände
- Dachzeile in Accent/100, Titel in Text/100, Trennlinien in Border/70
- Light und Dark müssen ohne Zusatzcode funktionieren

## Barrierefreiheit

- Die Einträge sind eine nummerierte Liste (`<ol>`), die Ziffern kommen aus der Liste
- Jeder Eintrag ist ein Link auf den ganzen Eintrag, mit sichtbarem Fokus
- Überschrift als `<h2>`

## Offen

- Wie viele Einträge auf dem Handy? Vorschlag: auch drei.
- Lange Titel umbrechen, nicht kürzen.
