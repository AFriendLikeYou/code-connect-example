<script>
  import { Badge, Button, Card, MostRead, Newsletter, Teaser } from './lib';

  // ?nur=newsletter zeigt nur die Newsletter-Box, ohne Kopfzeile: Vorlage für Code → Figma.
  const nur = new URLSearchParams(location.search).get('nur');
</script>

{#if nur === 'newsletter'}
<main class="demo-content demo-content--allein">
  <Newsletter />
</main>
{:else}
<main class="demo-content">
  <Card
    kicker="Nur bis 30. November"
    headline="Ein Jahr ZEIT zum halben Preis"
    text="Alle Z+-Artikel und das E-Paper."
  >
    {#snippet badge()}<Badge>Nur kurze Zeit</Badge>{/snippet}
    <Button>4 Wochen für 1 € testen</Button>
    <Button variant="secondary">Alle Angebote ansehen</Button>
  </Card>

  <Teaser
    image="/teaser.jpg"
    alt="Bewaldete Hügel in Singapur, darüber dichter grauer Dunst"
    kicker="Singapur"
    headline="Wenn der Nachbar Feuer legt"
    text="Indonesische Plantagenbesitzer brennen Wälder nieder und verpesten so die Luft in Singapur. Jetzt wehrt sich der Stadtstaat und setzt Investoren und Konzerne unter Druck."
    author="Von Thomas Fischermann, Singapur"
  />
  <Teaser layout="small" image="/teaser.jpg" alt="" kicker="Singapur" headline="Wenn der Nachbar Feuer legt" author="Von Thomas Fischermann, Singapur" />

  <MostRead
    items={[
      { kicker: 'Singapur', title: 'Wenn der Nachbar Feuer legt', href: '#artikel-1' },
      { kicker: 'Krafttraining', title: '»Wir haben Krafttraining zu kompliziert gemacht«', href: '#artikel-2' },
      { kicker: 'Papiersammlung', title: 'Geliebtes Papier!', href: '#artikel-3' },
    ]}
  />

  <Newsletter />
</main>
{/if}
