import { brand, brandDisplay } from '@/lib/brand';

const accountBenefits = [
  'Save favourite holidays and compare shortlists',
  'Create future price alerts for flexible dates',
  'Keep booking history and traveller preferences ready'
];

export default function AccountPage() {
  return (
    <main className="account-page">
      <section className="container account-shell">
        <a className="account-home-link" href="/" aria-label={`${brandDisplay} homepage`}>{brand.name}<small>.{brand.suffix}</small></a>
        <div className="account-copy">
          <span className="micro-label">HTLY account</span>
          <h1>Sign in to plan your next escape.</h1>
          <p>Customer accounts are designed for saved holidays, favourites, booking history and tailored deal alerts as HTLY grows.</p>
          <ul>
            {accountBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </div>

        <div className="account-card glass-card" aria-label={`${brandDisplay} sign in form preview`}>
          <div className="account-tabs" aria-label="Account options">
            <button type="button" aria-pressed="true">Sign in</button>
            <button type="button" aria-pressed="false">Create account</button>
          </div>
          <form action="/account" className="account-form">
            <label>
              <span>Email address</span>
              <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter your password" autoComplete="current-password" />
            </label>
            <div className="account-form-row">
              <label className="remember-me"><input type="checkbox" name="remember" />Remember me</label>
              <a href="/help">Forgot password?</a>
            </div>
            <button type="submit">Sign in securely</button>
            <p>Auth wiring will be connected when the customer account backend is ready.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
