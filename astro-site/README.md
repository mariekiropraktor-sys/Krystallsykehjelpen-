# Krystallsykehjelpen – Astro-prosjekt

## Hva er dette?
Dette er den nye, komponentbaserte versjonen av nettsiden, bygget med **Astro** (et rammeverk laget for raske, SEO-vennlige innholdssider). Det sender null unødvendig JavaScript til besøkende som standard, noe som gir god ytelse og gode Core Web Vitals-tall.

## Mappestruktur
```
src/
  layouts/Layout.astro     ← felles HTML-skjelett, SEO-metadata, fonter
  components/Header.astro  ← navigasjon
  components/Footer.astro  ← bunntekst
  pages/index.astro        ← forsiden
  pages/om-oss/index.astro ← "Om krystallsykehjelpen" (placeholder, bygges videre)
  pages/krystallsyken/     ← (placeholder, bygges videre)
  pages/ovelsesbibliotek/  ← (placeholder, bygges videre)
  pages/kontakt/           ← (placeholder, bygges videre)
  styles/global.css        ← designtokens (farger, fonter) – blå/turkis-paletten
astro.config.mjs           ← husk å bytte "site" til ekte domene før lansering
```

## Slik publiserer du (ingen installasjon nødvendig)

### Steg 1: Opprett en GitHub-konto
Gå til [github.com](https://github.com) og lag en gratis konto hvis du ikke har en.

### Steg 2: Last opp prosjektet
1. Last ned denne mappen fra Claude
2. På github.com: trykk **New repository**, gi det et navn (f.eks. `krystallsykehjelpen`)
3. Følg GitHubs "uploading an existing file"-flyt for å laste opp alle filene og mappene

### Steg 3: Opprett en Vercel-konto
Gå til [vercel.com](https://vercel.com) → **Sign up** → velg **Continue with GitHub** (da kobles kontoene automatisk sammen).

### Steg 4: Importer prosjektet
1. I Vercel: trykk **Add New → Project**
2. Velg GitHub-repoet du nettopp lastet opp
3. Vercel oppdager automatisk at det er et Astro-prosjekt – trykk **Deploy**
4. Etter 1–2 minutter får du en gratis lenke (f.eks. `krystallsykehjelpen.vercel.app`) hvor siden er live

### Steg 5: Koble til ekte domene
I Vercel-prosjektet: **Settings → Domains** → skriv inn `krystallsykehjelpen.no` og følg instruksjonene for å peke domenet dit (gjøres hos den du kjøpte domenet av, f.eks. Domeneshop).

## Videre arbeid med meg
Når du vil ha en endring:
1. Si fra hva du vil endre
2. Jeg oppdaterer filene her
3. Du laster opp de endrede filene til GitHub igjen (eller drar dem inn i repoet på nytt)
4. Vercel bygger automatisk på nytt – ingen ekstra steg fra deg

## Status akkurat nå
- ✅ Arkitektur, layout, header/footer, designtokens
- ✅ Forsiden ferdig bygget
- 🚧 De fire andre sidene er placeholder – bygges videre i neste runde
- 🚧 Ekte bilder mangler (plassholdere markert i koden)
- 🚧 Strukturert data (schema.org) for SEO kommer i en senere fase
