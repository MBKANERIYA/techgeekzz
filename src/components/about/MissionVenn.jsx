const MissionVenn = () => {
  return (
    <section className="py-5" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: '#1a1a2e', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', lineHeight: 1.2, maxWidth: '500px' }}>
          The key to our success?<br />We bring personal to digital
        </h2>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="position-relative" style={{ width: '380px', height: '380px' }}>
              <svg width="380" height="380" viewBox="0 0 380 380" fill="none">
                <circle cx="190" cy="140" r="100" stroke="rgba(0,0,0,0.12)" strokeWidth="1" fill="none" />
                <circle cx="140" cy="230" r="100" stroke="rgba(0,0,0,0.12)" strokeWidth="1" fill="none" />
                <circle cx="240" cy="230" r="100" stroke="rgba(0,0,0,0.12)" strokeWidth="1" fill="none" />
                <g transform="translate(225, 55)">
                  <rect x="0" y="0" width="90" height="26" rx="4" fill="none" stroke="rgba(200,120,50,0.4)" strokeWidth="1" />
                  <text x="45" y="17" textAnchor="middle" fill="rgba(200,120,50,0.8)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Innovation</text>
                </g>
                <path d="M250 82 L220 110" stroke="rgba(200,120,50,0.3)" strokeWidth="1" markerEnd="url(#arrowOrange)" />
                <g transform="translate(30, 215)">
                  <rect x="0" y="0" width="105" height="26" rx="4" fill="none" stroke="rgba(100,130,200,0.4)" strokeWidth="1" />
                  <text x="52" y="17" textAnchor="middle" fill="rgba(100,130,200,0.8)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Transparency</text>
                </g>
                <path d="M108 228 L125 228" stroke="rgba(100,130,200,0.3)" strokeWidth="1" markerEnd="url(#arrowBlue)" />
                <g transform="translate(265, 310)">
                  <rect x="0" y="0" width="105" height="26" rx="4" fill="none" stroke="rgba(80,130,100,0.4)" strokeWidth="1" />
                  <text x="52" y="17" textAnchor="middle" fill="rgba(80,130,100,0.8)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">Collaboration</text>
                </g>
                <path d="M280 310 L258 280" stroke="rgba(80,130,100,0.3)" strokeWidth="1" markerEnd="url(#arrowGreen)" />
                <g transform="translate(165, 185)">
                  <path d="M0 30L12 10L24 30H0Z" fill="#1a1a2e" />
                  <path d="M14 30L26 10L38 30H14Z" fill="#1a1a2e" opacity="0.6" />
                </g>
                <defs>
                  <marker id="arrowOrange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="rgba(200,120,50,0.4)" /></marker>
                  <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="rgba(100,130,200,0.4)" /></marker>
                  <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="rgba(80,130,100,0.4)" /></marker>
                </defs>
              </svg>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3" style={{ color: '#1a1a2e', fontSize: '1.4rem' }}>Our Mission and Values</h3>
            <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.8 }}>
              At the heart of our company is a commitment to driving sustainable growth for our clients through cutting-edge, data-driven marketing solutions.
            </p>
            <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.8 }}>
              Our mission is to empower businesses to reach new heights by crafting tailored strategies that not only meet immediate goals but also pave the way for long-term success. We understand that every business is unique, which is why we take a personalized approach to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVenn;
