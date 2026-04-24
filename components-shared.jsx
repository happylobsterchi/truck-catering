// Shared components for HL Bar landing page (Nav, Footer, Form, Marquee)

function BarNav({ variant = 'navy', activeKey = 'bar' }) {
  const ac = (k) => activeKey === k ? 'active' : '';
  return (
    <>
      <div className="bar-announce">Food Truck Season is BACK! <a>Click here to see where we roll.</a></div>
      <nav className={"bar-nav " + (variant === 'cream' ? 'cream' : '')}>
        <a className="bar-brand">
          <img src="assets/HLChi_Claw_badge-transparent.png" alt="Happy Lobster" />
          <div className="bar-brand-wm">Happy Lobster</div>
        </a>
        <div className="bar-links">
          <a className={ac('menus')}>Menus</a>
          <a className={ac('catering')}>Catering</a>
          <a className={ac('bar')}>The Bar</a>
          <a className={ac('truck')}>The Truck</a>
          <a className={ac('party')}>Party Kits</a>
          <a className={ac('about')}>About</a>
        </div>
        <div className="bar-nav-icons" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
        </div>
      </nav>
    </>
  );
}

function BarFooter() {
  return (
    <footer className="bar-footer">
      <div className="bar-wrap">
        <div className="bar-footer-grid">
          <div>
            <img src="assets/HLChi_Claw_badge-transparent.png" alt="" style={{width:68, borderRadius:'50%'}} />
            <div className="wm">Happy Lobster<span className="wm-script">Chicago</span></div>
            <p className="tag">Sourced in Maine. Perfected in the 312.</p>
          </div>
          <div>
            <h5>Eat</h5>
            <a>Menus</a><a>Washington Hall</a><a>Truck stops</a><a>Party kits</a>
          </div>
          <div>
            <h5>Book</h5>
            <a>The Happy Lobster Bar</a><a>Truck catering</a><a>Drop-off catering</a>
          </div>
          <div>
            <h5>Hi</h5>
            <a>Instagram · @happylobsterchi</a><a>Press kit</a><a>Contact</a>
          </div>
        </div>
        <div className="fine">
          <div>© 2026 Happy Lobster Chicago · 2300 S Throop St</div>
          <div>Claws. Rolls. Respect.</div>
        </div>
      </div>
    </footer>
  );
}

// Inquiry form — detailed (used in both directions, styled by parent scope)
function InquiryForm({ variant = 'A' }) {
  const cls = variant === 'A' ? 'dirA' : 'dirB';
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <form className="form" onSubmit={submit} style={{textAlign:'center', padding: '72px 40px'}}>
        <div style={{fontFamily:'var(--font-display)', fontSize:12, letterSpacing:'.22em', color:'var(--hl-coral)', textTransform:'uppercase', marginBottom:16}}>Inquiry received</div>
        <h3 style={{fontFamily:'var(--font-display)', fontSize:32, textTransform:'uppercase', color:'var(--hl-navy)', margin:'0 0 14px', letterSpacing:'.01em'}}>We'll be in touch within one business day.</h3>
        <p style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'var(--hl-charcoal-2)', margin:0}}>In the meantime — your lobster guy says thanks.</p>
      </form>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-grid">
        <div className="field"><label>Your name</label><input type="text" placeholder="Alex Thompson" defaultValue="" /></div>
        <div className="field"><label>Company / Host</label><input type="text" placeholder="Acme Inc." /></div>
        <div className="field"><label>Email</label><input type="email" placeholder="you@company.com" /></div>
        <div className="field"><label>Phone</label><input type="tel" placeholder="(312) 555-0100" /></div>
        <div className="field"><label>Event date</label><input type="date" /></div>
        <div className="field"><label>Guest count</label><input type="number" placeholder="75" min="20" /></div>
        <div className="field"><label>Event type</label>
          <select defaultValue="">
            <option value="" disabled>Choose one…</option>
            <option>Corporate / office party</option>
            <option>Wedding</option>
            <option>Private home party</option>
            <option>Brand activation</option>
            <option>Holiday party</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field"><label>Budget range</label>
          <select defaultValue="">
            <option value="" disabled>Ballpark…</option>
            <option>Under $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field full"><label>Venue / address</label><input type="text" placeholder="Where are we rolling up?" /></div>
        <div className="field full"><label>Tell us about it</label><textarea placeholder="Guests, vibe, dietary restrictions, caviar upgrade — anything we should know." /></div>
      </div>
      <div className="form-cta">
        <span className="fine">We respond within one business day. No bots, no waitlists, just your lobster guy.</span>
        <button type="submit" className="bar-btn bar-btn-primary">Book the bar →</button>
      </div>
    </form>
  );
}

Object.assign(window, { BarNav, BarFooter, InquiryForm });
