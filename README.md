# HTLY

High-fidelity Next.js implementation of the HTLY-style holiday homepage.

The site has been built to follow the supplied render closely: white OTA-style header, resort hero, floating tabbed search panel, trust strip, featured holiday deals, popular destinations, why-book cards, blue promo banner, traveller reviews and dense footer.

## Brand switching

The brand can stay as `HTLY` or be switched later to `PickyHoliday` without changing the core code.

```env
NEXT_PUBLIC_BRAND_NAME=HTLY
NEXT_PUBLIC_BRAND_SUFFIX=co.uk
NEXT_PUBLIC_BRAND_TAGLINE=HOLIDAY DEALS MADE EASY
NEXT_PUBLIC_SITE_URL=https://htly.co.uk
```

For PickyHoliday:

```env
NEXT_PUBLIC_BRAND_NAME=PickyHoliday
NEXT_PUBLIC_BRAND_SUFFIX=co.uk
NEXT_PUBLIC_BRAND_TAGLINE=HOLIDAY DEALS MADE EASY
NEXT_PUBLIC_SITE_URL=https://pickyholiday.co.uk
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

The first PR focuses on the exact homepage visual foundation. Further PRs can add live travel APIs, payments, auth, dashboards and group-trip workflows once the visual base is approved.
