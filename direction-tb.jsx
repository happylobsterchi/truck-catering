// direction-tb.jsx — Full-bleed rainbow hero, editorial photo-first

function TruckDirectionB() {
  return (
    <div className="dirTB">
      <BarNav variant="navy" activeKey="truck" />

      {/* HERO — full bleed */}
      <section className="hero">
        <div className="hero-bg">
          <img src="assets/truck-rainbow.png" alt="Happy Lobster Truck under a rainbow in Chicago" />
        </div>
        <div className="bar-wrap hero-overlay">
          <div className="hero-top">
            <div />
            <div className="hero-badge"><img src="assets/HLT_Claw_badge-transparent.png" alt="Happy Lobster Truck badge" /></div>
          </div>
          <div className="hero-bot">
            <div className="hero-copy">
              <div className="hero-claim">Level up your event</div>
              <h1>Chicago's Premier <em>Food</em> Truck</h1>
              <p className="hero-sub">From backyard blowouts to full-tilt events, we always show up, claws up and ready to roll!</p>
            </div>
            <div className="hero-ctas">
              <a className="bar-btn bar-btn-primary">Book the truck</a>
              <a className="bar-btn" style={{background:'transparent', color:'#fff', border:'1px solid rgba(255,255,255,.5)'}}>See the menu</a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              <span>Weddings</span><span className="dot"></span>
              <span>Corporate lunches</span><span className="dot"></span>
              <span>Festivals</span><span className="dot"></span>
              <span>Brand activations</span><span className="dot"></span>
              <span>Block parties</span><span className="dot"></span>
              <span>Your backyard, probably</span><span className="dot"></span>
            </span>
          ))}
        </div>
      </div>

      {/* Event Ideas */}
      <section className="offering">
        <div className="bar-wrap">
          <div className="off-head centered">
            <h2 className="two-tone centered"><span className="blue">One Truck.</span><br /><span className="coral">Every Occasion.</span></h2>
          </div>
          <div className="off-grid">
            <div className="off-card">
              <div className="photo"><img src="assets/truck-wedding.png" alt="A couple at the Happy Lobster Truck on their wedding day" /></div>
              <div className="body">
                <div className="n">01</div>
                <h3>Weddings</h3>
                <p>Here comes the bride (and the lobster).</p>
              </div>
            </div>
            <div className="off-card">
              <div className="photo"><img src="assets/truck-event-dusk.png" alt="A corporate event at the Happy Lobster Truck at dusk" /></div>
              <div className="body">
                <div className="n">02</div>
                <h3>Corporate Events</h3>
                <p>Your team deserves lobster.</p>
              </div>
            </div>
            <div className="off-card">
              <div className="photo"><img src="assets/truck-rainbow.png" alt="The truck under a rainbow" /></div>
              <div className="body">
                <div className="n">03</div>
                <h3>You Name It</h3>
                <p>We roll wherever the party is.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jeff Mauro pull quote */}
      <section className="pullquote">
        <div className="bar-wrap">
          <blockquote>This is how Chicago does a lobster roll.</blockquote>
          <cite>Jeff Mauro<span className="role">Food Network</span></cite>
        </div>
      </section>

      {/* Booking steps */}
      <section className="how">
        <div className="bar-wrap">
          <div className="how-head centered">
            <h2>From inquiry to <br/>"this party is lit"</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">01</div>
              <h3>Tell us where</h3>
              <p>Fill the form out below to start your inquiry (does not commit you).</p>
            </div>
            <div className="step">
              <div className="num">02</div>
              <h3>Quote</h3>
              <p>We'll get back to you within 24 hours with a quote on your event.</p>
            </div>
            <div className="step">
              <div className="num">03</div>
              <h3>Lock in the date</h3>
              <p>Now it's time to get excited.</p>
            </div>
            <div className="step">
              <div className="num">04</div>
              <h3>Truck day</h3>
              <p>Congratulations — your party just became memorable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry — cream panel */}
      <section className="inquiry">
        <div className="bar-wrap inquiry-grid">
          <div className="inquiry-lede">
            <div className="eye">Book the truck</div>
            <h2>Ready to <em className="roll">Roll?</em></h2>
            <p>The truck is the easy part. We handle setup, permits, power, and cleanup. You pick a date and we roll up.</p>
            <div className="contact-card">
              <div className="row"><span className="lbl">Call</span> <span className="val">(312) 555-0101</span></div>
              <div className="row"><span className="lbl">Text</span> <span className="val">Same number, usually faster</span></div>
              <div className="row"><span className="lbl">Email</span> <span className="val">truck@happylobsterchicago.com</span></div>
              <div className="row"><span className="lbl">Lead time</span> <span className="val">Two weeks minimum, sooner we'll try</span></div>
            </div>
          </div>
          <TruckInquiryForm />
        </div>
      </section>

      <BarFooter />
    </div>
  );
}

Object.assign(window, { TruckDirectionB });
