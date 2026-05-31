export type BrandConfig = {
  name: string;
  suffix: string;
  tagline: string;
  siteUrl: string;
};

export const brand: BrandConfig = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || 'HTLY',
  suffix: process.env.NEXT_PUBLIC_BRAND_SUFFIX || 'co.uk',
  tagline: process.env.NEXT_PUBLIC_BRAND_TAGLINE || 'HOLIDAY DEALS MADE EASY',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://htly.co.uk'
};

export const brandDisplay = `${brand.name}.${brand.suffix}`;

export function brandUrl(path = '') {
  return new URL(path, brand.siteUrl).toString();
}

export function brandOrigin() {
  return new URL(brand.siteUrl).origin;
}
