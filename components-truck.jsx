// components-truck.jsx — Truck-specific shared bits (inquiry form with truck copy)

function TruckInquiryForm() {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Replace this with your Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqkblaw";

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const formData = new FormData(e.target);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again or email hello@happylobsterchicago.com.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again or email hello@happylobsterchicago.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <form className="form" style={{textAlign:'center', padding: '72px 40px'}}>
        <div style={{fontFamily:'var(--font-display)', fontSize:12, letterSpacing:'.22em', color:'var(--hl-coral)', textTransform:'uppercase', marginBottom:16}}>Truck booked — sort of</div>
        <h3 style={{fontFamily:'var(--font-display)', fontSize:32, textTransform:'uppercase', color:'var(--hl-navy)', margin:'0 0 14px', letterSpacing:'.01em'}}>We'll roll back within one business day.</h3>
        <p style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'var(--hl-charcoal-2)', margin:0}}>Your lobster guy is already checking the calendar.</p>
      </form>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <input type="hidden" name="_subject" value="New Happy Lobster Truck inquiry" />
      <div className="form-grid">
        <div className="field"><label>Your name</label><input name="name" type="text" placeholder="Alex Thompson" required /></div>
        <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@company.com" required /></div>
        <div className="field"><label>Phone</label><input name="phone" type="tel" placeholder="(312) 555-0100" required /></div>
        <div className="field"><label>Event date</label><input name="event_date" type="date" required /></div>
        <div className="field"><label>Guest count</label><input name="guest_count" type="number" placeholder="150" min="30" required /></div>
        <div className="field"><label>Event type</label>
          <select name="event_type" defaultValue="" required>
            <option value="" disabled>Choose one…</option>
            <option>Corporate / office lunch</option>
            <option>Wedding</option>
            <option>Festival / public event</option>
            <option>Brand activation</option>
            <option>Block party / neighborhood</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field full"><label>Venue / address</label><input name="venue" type="text" placeholder="Where should the truck park?" required /></div>
        <div className="field full"><label>Tell us about it</label><textarea name="notes" placeholder="Setup window, power/water access, ceremony timing, vibe — anything we should know." required /></div>
      </div>
      {error && <div style={{color:'var(--hl-coral)', fontFamily:'var(--font-serif)', fontStyle:'italic', margin:'12px 0'}}>{error}</div>}
      <div className="form-cta">
        <span className="fine">We reply within one business day. Real people, real trucks, real lobster.</span>
        <button type="submit" className="bar-btn bar-btn-primary" disabled={submitting}>{submitting ? "Sending…" : "Book the truck →"}</button>
      </div>
    </form>
  );
}

Object.assign(window, { TruckInquiryForm });
