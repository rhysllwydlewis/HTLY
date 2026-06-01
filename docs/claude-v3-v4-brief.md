# Claude v3-v4 implementation brief

This branch records the review of the uploaded Claude patch for HTLY.

The uploaded patch contains two commits and targets these areas:

- Search tabs and HeroSearch client behaviour
- Destination, holiday, hotel and inspiration page upgrades
- Deal listing and deal detail page improvements
- Expanded holiday data and inspiration article data
- Custom 404, help, terms, privacy and search pages
- Homepage inspiration teaser and newsletter banner
- Additional visual polish in app/polish.css

The full uploaded patch was inspected locally as 4670 lines. It should be applied from the original uploaded file in a checkout, followed by lint and production build checks before merge.

Review focus:

- Confirm HeroSearch is safe as a client component.
- Confirm new data fields match the components that consume them.
- Confirm all new routes compile under the Next app router.
- Confirm app/polish.css overrides do not damage existing card grids.
- Confirm npm run lint and npm run build pass before merge.
