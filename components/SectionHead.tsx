import { Icon } from '@/components/Icon';

type SectionHeadProps = {
  title: string;
  kicker: string;
  link?: string;
  href?: string;
};

export function SectionHead({ title, kicker, link, href }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div>
        <span className="micro-label">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {link && href ? (
        <a href={href} className="section-head-link">
          {link}
          <Icon name="arrowRight" aria-hidden="true" className="section-head-arrow" />
        </a>
      ) : null}
    </div>
  );
}
