// components-truck.jsx — Truck-specific shared bits (inquiry form with truck copy)

function TruckInquiryForm() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <form className="form" onSubmit={submit} style={{textAlign:'center', padding: '72px 40px'}}>
        <div style={{fontFamily:'var(--font-display)', fontSize:12, letterSpacing:'.22em', color:'var(--hl-coral)', textTransform:'uppercase', marginBottom:16}}>Truck booked — sort of</div>
        <h3 style={{fontFamily:'var(--font-display)', fontSize:32, textTransform:'uppercase', color:'var(--hl-navy)', margin:'0 0 14px', letterSpacing:'.01em'}}>We'll roll back within one business day.</h3>
        <p style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'var(--hl-charcoal-2)', margin:0}}>Your lobster guy is already checking the calendar.</p>
      </form>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-grid">
        <div className="field"><label>Your name</label><input type="text" placeholder="Alex Thompson" /></div>
        <div className="field"><label>Company / Host</label><input type="text" placeholder="Acme Inc." /></div>
        <div className="field"><label>Email</label><input type="email" placeholder="you@company.com" /></div>
        <div className="field"><label>Phone</label><input type="tel" placeholder="(312) 555-0100" /></div>
        <div className="field"><label>Event date</label><input type="date" /></div>
        <div className="field"><label>Guest count</label><input type="number" placeholder="150" min="30" /></div>
        <div className="field"><label>Event type</label>
          <select defaultValue="">
            <option value="" disabled>Choose one…</option>
            <option>Corporate / office lunch</option>
            <option>Wedding</option>
            <option>Festival / public event</option>
            <option>Brand activation</option>
            <option>Block party / neighborhood</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field"><label>Location</label>
          <select defaultValue="">
            <option value="" disabled>Where are we rolling?</option>
            <option>Chicago — downtown / Loop</option>
            <option>Chicago — North side</option>
            <option>Chicago — South / West side</option>
            <option>Chicagoland suburbs</option>
            <option>Out-of-town (ask us)</option>
          </select>
        </div>
        <div className="field"><label>Est. guest count</label>
          <select defaultValue="">
            <option value="" disabled>Ballpark…</option>
            <option>30 – 75</option>
            <option>75 – 150</option>
            <option>150 – 300</option>
            <option>300 – 600</option>
            <option>600+</option>
          </select>
        </div>
        <div className="field full"><label>Venue / address</label><input type="text" placeholder="Where should the truck park?" /></div>
        <div className="field full"><label>Tell us about it</label><textarea placeholder="Setup window, power/water access, ceremony timing, vibe — anything we should know." /></div>
      </div>
      <div className="form-cta">
        <span className="fine">We reply within one business day. Real people, real trucks, real lobster.</span>
        <button type="submit" className="bar-btn bar-btn-primary">Book the truck →</button>
      </div>
    </form>
  );
}

Object.assign(window, { TruckInquiryForm });
