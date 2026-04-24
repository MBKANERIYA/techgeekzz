import { useState } from 'react';

const durations = [
  { label: '3 months', discount: null },
  { label: '6 months', discount: '10% off' },
  { label: '12 months', discount: '20% off' },
];

const plans = [
  {
    tag: 'Get started plan',
    hours: '40h',
    priceMonth: '$3200',
    priceHour: '$80',
    highlighted: false,
  },
  {
    tag: 'Boost plan',
    hours: '80h',
    priceMonth: '$5600',
    priceHour: '$70',
    highlighted: false,
  },
  {
    tag: 'Full force plan',
    hours: '160h',
    priceMonth: '$9600',
    priceHour: '$60',
    highlighted: true,
  },
  {
    tag: '👑 All inclusive',
    hours: 'Custom',
    priceMonth: '$20K-100K',
    priceHour: null,
    highlighted: false,
  },
];

const features = [
  'Access to all our services',
  'Access to the entire marketing team',
  'Dedicated marketing strategist',
  'Dedicated project manager',
  'Customized work plan',
  'Detailed monthly reports',
  'Weekly calls',
  'Real-time management dashboard',
  '24/5 timezone coverage',
];

const PricingSection = () => {
  const [activeDuration, setActiveDuration] = useState(0);

  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold fst-italic mb-3" style={{ letterSpacing: '-1px' }}>
          Select your plan
        </h2>
        <p className="text-secondary text-center small mb-4">
          You can change it whenever you need to
        </p>

        {/* Duration Toggle */}
        <div className="d-flex justify-content-center align-items-center gap-1 mb-5 p-1 rounded-pill mx-auto" style={{ background: '#141420', border: '1px solid rgba(255,255,255,0.06)', width: 'fit-content' }}>
          {durations.map((dur, i) => (
            <button
              key={i}
              className={`btn btn-sm rounded-pill px-4 py-2 fw-medium d-flex align-items-center gap-2 ${activeDuration === i ? 'text-white' : 'text-secondary'}`}
              style={{
                background: activeDuration === i ? '#1e1e2e' : 'transparent',
                border: activeDuration === i ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
                fontSize: '0.85rem',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setActiveDuration(i)}
            >
              {dur.label}
              {dur.discount && (
                <span
                  className="fw-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '0.75rem',
                  }}
                >
                  {dur.discount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="row g-3 mb-5">
          {plans.map((plan, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div
                className="rounded-4 p-4 text-center h-100 d-flex flex-column justify-content-center"
                style={{
                  background: plan.highlighted
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc, #e879f9)'
                    : '#111118',
                  border: plan.highlighted
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.06)',
                  minHeight: '220px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = plan.highlighted
                    ? '0 10px 40px rgba(139,92,246,0.3)'
                    : '0 10px 30px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Tag */}
                <div className="mb-3">
                  <span
                    className="rounded-pill px-3 py-1 small fw-medium"
                    style={{
                      background: plan.highlighted
                        ? 'rgba(255,255,255,0.2)'
                        : 'rgba(255,255,255,0.06)',
                      color: plan.highlighted ? '#fff' : 'rgba(255,255,255,0.6)',
                      fontSize: '0.75rem',
                      border: plan.highlighted
                        ? '1px solid rgba(255,255,255,0.3)'
                        : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {plan.tag}
                  </span>
                </div>

                {/* Hours */}
                <div className="mb-3">
                  <span className="text-white fw-bold" style={{ fontSize: '2.5rem', letterSpacing: '-1px' }}>
                    {plan.hours}
                  </span>
                  {plan.hours !== 'Custom' && (
                    <span className="text-secondary ms-1" style={{ fontSize: '0.9rem' }}>/ mo</span>
                  )}
                </div>

                {/* Pricing */}
                <div>
                  <span
                    className="fw-bold fst-italic"
                    style={{
                      background: plan.highlighted
                        ? 'none'
                        : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      WebkitBackgroundClip: plan.highlighted ? 'unset' : 'text',
                      WebkitTextFillColor: plan.highlighted ? '#fff' : 'transparent',
                      backgroundClip: plan.highlighted ? 'unset' : 'text',
                      color: plan.highlighted ? '#fff' : 'inherit',
                      fontSize: '1rem',
                    }}
                  >
                    {plan.priceMonth}
                  </span>
                  <span className={plan.highlighted ? 'text-white' : 'text-secondary'} style={{ fontSize: '0.8rem' }}> / mo</span>
                  {plan.priceHour && (
                    <>
                      <span className={`ms-2 fw-bold fst-italic ${plan.highlighted ? 'text-white' : ''}`}
                        style={!plan.highlighted ? {
                          background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontSize: '1rem',
                        } : { fontSize: '1rem' }}
                      >
                        {plan.priceHour}
                      </span>
                      <span className={plan.highlighted ? 'text-white' : 'text-secondary'} style={{ fontSize: '0.8rem' }}> / hr</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Plans Include */}
        <div
          className="rounded-4 p-4 p-lg-5 mb-4"
          style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="row align-items-start">
            <div className="col-lg-3 mb-3 mb-lg-0">
              <h4 className="text-white fw-bold fst-italic fs-5 mb-0">All plans include:</h4>
            </div>
            <div className="col-lg-9">
              <div className="row g-2">
                {features.map((feat, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="d-flex align-items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" className="flex-shrink-0 mt-1">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-secondary small">{feat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p
          className="fst-italic small mb-0"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Prices are valid for new customers only.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
