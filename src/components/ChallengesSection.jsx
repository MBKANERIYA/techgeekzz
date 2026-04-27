import { useState } from 'react';

const challenges = [
  {
    question: "I don't really understand how a marketing subscription works — or why it's better.",
    answer: "We simplify everything. You pay a monthly fee and get a cross-functional team — from SEO to PPC to design — focused on results, not billable hours.",
  },
  {
    question: "Why would I switch to a subscription model instead of using freelancers or agencies?",
    answer: "Because you get predictable costs, faster turnarounds, and a dedicated team that actually understands your brand — not a revolving door of freelancers.",
  },
  {
    question: "I've tried digital marketing before. It was slow, expensive, and didn't deliver.",
    answer: "We hear this a lot. That's exactly why we built a model focused on speed, transparency, and measurable results from day one.",
  },
  {
    question: "I never know what I'm paying for — or what's being done.",
    answer: "Full transparency is baked into how we work. You'll get real-time dashboards, weekly updates, and clear hourly breakdowns.",
  },
  {
    question: "Our SEO, ads, and content all feel disconnected.",
    answer: "That's because they probably are. We run everything under one roof so every channel works together toward the same goals.",
  },
  {
    question: "I need flexibility. What if our priorities change mid-month?",
    answer: "No problem. Our subscription model lets you pivot anytime — reallocate hours, shift focus, or add new services on the fly.",
  },
  {
    question: "I don't want to get locked into another long-term contract.",
    answer: "Neither do we. Our subscriptions are month-to-month. Stay because it works, not because you're stuck.",
  },
  {
    question: "We don't have time to micromanage every task.",
    answer: "You won't have to. We assign a dedicated project manager who handles everything so you can focus on running your business.",
  },
  {
    question: "I want results — not endless strategy decks.",
    answer: "Same. We move fast, test constantly, and optimize relentlessly. Strategy is important, but execution is everything.",
  },
];

const ChallengesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold mb-4" style={{ letterSpacing: '-1px' }}>
          Challenges Our Clients Faced
          <br />
          Before Working With Us
        </h2>

        <p className="text-secondary text-center mx-auto mb-5 small fst-italic" style={{ maxWidth: '700px', lineHeight: 1.7 }}>
          For over 8 years, we've rolled up our sleeves with hundreds of clients across a variety of industries to turn SEO
          headaches into measurable wins. I don't really understand how a marketing subscription works — or why it's better.
          Why would I switch to a subscription model
        </p>

        {/* Cards Grid */}
        <div className="row g-3 mb-5">
          {challenges.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`challenge-card rounded-4 p-4 h-100 d-flex flex-column ${hoveredIndex === index ? 'challenge-card-active' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                  transition: 'all 1s ease',
                  minHeight: '220px',
                }}
              >
                {/* Quote Icon */}
                <div className="mb-auto pb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" opacity="0.3">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="#666"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="#666"/>
                  </svg>
                </div>

                {/* Question */}
                <p className="text-white fw-semibold mb-2" style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {item.question}
                </p>

                {/* Answer - shown on hover */}
                <div
                  className="challenge-answer"
                  style={{
                    maxHeight: hoveredIndex === index ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 1.2s ease, opacity 1s ease',
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  <p className="text-secondary small mb-0 mt-2" style={{ lineHeight: 1.6 }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none fs-6">
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
