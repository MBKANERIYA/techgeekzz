const tiers = [
  {
    icon: "", name: "Bronze", referrals: "1–2", commission: "5%",
    perks: ["Exclusive swag kit", "Monthly newsletter", "Community access"],
    color: "#cd7f32",
    bg: "linear-gradient(135deg, rgba(205,127,50,0.12), rgba(205,127,50,0.03))",
    border: "rgba(205,127,50,0.25)",
  },
  {
    icon: "", name: "Silver", referrals: "3–5", commission: "10%",
    perks: ["Everything in Bronze", "Priority support", "Co-branded case study"],
    color: "#a8a8a8",
    bg: "linear-gradient(135deg, rgba(168,168,168,0.12), rgba(168,168,168,0.03))",
    border: "rgba(168,168,168,0.25)",
  },
  {
    icon: "", name: "Gold", referrals: "6–10", commission: "15%",
    perks: ["Everything in Silver", "1-on-1 strategy call", "VIP event access"],
    color: "#fbbf24",
    bg: "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.03))",
    border: "rgba(251,191,36,0.3)",
    featured: true,
  },
  {
    icon: "", name: "Diamond", referrals: "10+", commission: "20%",
    perks: ["Everything in Gold", "Revenue share model", "Dedicated partner manager"],
    color: "#a500fd",
    bg: "rgba(165,0,253,0.12)",
    border: "rgba(165,0,253,0.35)",
  },
];

const ReferralTiers = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Earn More, Tier Up</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Commission <span className="hero-gradient-text fst-italic">Tiers</span></h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 520, fontSize: '0.9rem' }}>The more clients you refer, the higher your recurring commission rate.</p>
        </div>

        <div className="row g-4">
          {tiers.map((tier, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="rounded-4 p-4 h-100 position-relative overflow-hidden" style={{ background: tier.bg, border: `1px solid ${tier.border}`, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${tier.border}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {tier.featured && <div className="position-absolute top-0 end-0 rounded-bl-3 px-3 py-1" style={{ background: '#a500fd', fontSize: '0.7rem', fontWeight: 700, color: '#fff' }}>POPULAR</div>}
                <div className="text-center mb-3">
                  <span style={{ fontSize: '2.2rem' }}>{tier.icon}</span>
                </div>
                <h4 className="text-center fw-bold mb-1" style={{ color: tier.color, fontSize: '1.15rem' }}>{tier.name}</h4>
                <p className="text-center text-secondary mb-3" style={{ fontSize: '0.78rem' }}>{tier.referrals} referrals</p>
                <div className="text-center mb-4">
                  <span className="fw-bold" style={{ fontSize: '2.5rem', color: '#fff' }}>{tier.commission}</span>
                  <span className="text-secondary ms-1" style={{ fontSize: '0.85rem' }}>recurring</span>
                </div>
                <ul className="list-unstyled mb-0">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="d-flex align-items-start gap-2 mb-2">
                      <span style={{ color: tier.color, fontSize: '0.7rem', marginTop: 4 }}></span>
                      <span className="text-secondary" style={{ fontSize: '0.8rem' }}>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralTiers;
