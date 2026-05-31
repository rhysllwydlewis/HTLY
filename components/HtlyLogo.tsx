import { brand, brandDisplay } from '@/lib/brand';

export function HtlyLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a className="brand" href="/" aria-label={`${brandDisplay} homepage`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="sun" />
        <span className="ray ray-one" />
        <span className="ray ray-two" />
        <span className="ray ray-three" />
        <span className="wave wave-one" />
        <span className="wave wave-two" />
      </span>
      <span className="brand-text">
        <span className="name">{brand.name}<small>.{brand.suffix}</small></span>
        {!footer && <span className="tagline">{brand.tagline}</span>}
      </span>
    </a>
  );
}
