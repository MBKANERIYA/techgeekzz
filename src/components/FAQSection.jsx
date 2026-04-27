import { useState } from 'react';

const faqs = [
  {
    question: 'Does the subscription have limits?',
    answer: "No. Your subscription gives you access to a full marketing team across all channels. The only limit is the number of hours in your plan — and you can always scale up or shift focus between services as needed.",
  },
  {
    question: 'Can I cancel the subscription anytime?',
    answer: "Yes. We believe in earning your business every month. You can cancel your subscription at the end of any billing cycle — no penalties, no lock-ins, no fine print.",
  },
  {
    question: 'Can I choose the team I work with?',
    answer: "Absolutely. You'll be matched with a dedicated team based on your industry and goals. Once assigned, they stay with you for consistency — but if you ever want to adjust, we'll make it happen.",
  },
  {
    question: 'What if I only need certain services?',
    answer: "That's the beauty of it. Your hours are fully flexible — use them for SEO one month, paid ads the next, or split them across multiple channels. You're never locked into a fixed scope.",
  },
  {
    question: 'Can I try it for just one month?',
    answer: "Yes, you can start with a single month to test the waters. However, we recommend a minimum of 3 months to see meaningful results, as most marketing strategies need time to ramp up and deliver ROI.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-3">
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold fst-italic mb-5" style={{ letterSpacing: '-1px' }}>
          FAQ
        </h2>

        {/* FAQ Items */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <button
                  className="d-flex align-items-center justify-content-between w-100 text-start py-4 border-0"
                  style={{
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-white fw-medium" style={{ fontSize: '1rem' }}>
                    {faq.question}
                  </span>
                  <span
                    className="text-secondary flex-shrink-0 ms-3 d-flex align-items-center justify-content-center"
                    style={{
                      fontSize: '1.3rem',
                      width: '28px',
                      height: '28px',
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="pb-4 mb-0"
                    style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7 }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
