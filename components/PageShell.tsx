export function PageShell({ title, text }: { title: string; text: string }) {
  return (
    <main className="placeholder-page">
      <section className="container placeholder-card">
        <span className="placeholder-eyebrow">HTLY</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <a href="/" className="placeholder-link">Back to homepage</a>
      </section>
    </main>
  );
}
