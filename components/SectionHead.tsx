export function SectionHead({ title, kicker, link, href }: { title: string; kicker: string; link?: string; href?: string }) {
  return (
    <div className="section-head">
      <div>
        <span className="micro-label">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {link && href ? <a href={href}>{link} <span aria-hidden="true">›</span></a> : null}
    </div>
  );
}
