import React from 'react'

export default function LogoMarquee() {
  const clientLogos = [
    // Apollo Hospitals
    (
      <svg key="apollo" viewBox="0 0 170 50" className="h-16 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <g transform="translate(5, 5)">
          <rect x="15" y="5" width="10" height="30" fill="#006699" rx="2" />
          <rect x="5" y="15" width="30" height="10" fill="#006699" rx="2" />
          <path d="M20 5 C16 12, 24 16, 20 22 C26 16, 22 10, 20 5" fill="#FF9900" />
        </g>
        <text x="50" y="26" fontFamily="sans-serif" fontWeight="bold" fontSize="17" fill="#006699">Apollo</text>
        <text x="50" y="38" fontFamily="sans-serif" fontSize="9" letterSpacing="1" fill="#666666">HOSPITALS</text>
      </svg>
    ),
    // Infosys
    (
      <svg key="infosys" viewBox="0 0 110 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <text x="5" y="35" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="#0066cc" letterSpacing="-0.5">Infosys</text>
      </svg>
    ),
    // ValueLabs
    (
      <svg key="valuelabs" viewBox="0 0 140 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <text x="5" y="34" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#004488">Value</text>
        <rect x="62" y="12" width="55" height="26" fill="#D32F2F" rx="3" />
        <text x="69" y="31" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="#FFFFFF">Labs</text>
      </svg>
    ),
    // Colgate
    (
      <svg key="colgate" viewBox="0 0 130 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <rect x="5" y="8" width="120" height="34" fill="#E53935" rx="4" />
        <text x="15" y="33" fontFamily="serif" fontStyle="italic" fontWeight="bold" fontSize="22" fill="#FFFFFF" letterSpacing="-1">Colgate</text>
      </svg>
    ),
    // Dr. Reddy's
    (
      <svg key="drreddy" viewBox="0 0 160 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <text x="5" y="32" fontFamily="sans-serif" fontWeight="bold" fontSize="19" fill="#5E35B1">Dr.Reddy's</text>
        <circle cx="115" cy="25" r="6" fill="#5E35B1" />
        <circle cx="127" cy="18" r="4.5" fill="#7E57C2" />
        <circle cx="133" cy="28" r="5" fill="#5E35B1" />
        <circle cx="123" cy="33" r="4.5" fill="#7E57C2" />
      </svg>
    ),
    // Hero Honda
    (
      <svg key="herohonda" viewBox="0 0 150 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <text x="5" y="32" fontFamily="sans-serif" fontWeight="900" fontSize="20" fill="#111111" letterSpacing="-0.5">HERO</text>
        <text x="70" y="32" fontFamily="sans-serif" fontWeight="800" fontSize="17" fill="#E53935">HONDA</text>
      </svg>
    ),
    // ICICI Prudential
    (
      <svg key="icici" viewBox="0 0 170 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <path d="M10 5 L30 5 L25 45 L5 45 Z" fill="#0D47A1" />
        <text x="12" y="29" fontFamily="sans-serif" fontWeight="900" fontSize="17" fill="#FF9900" fontStyle="italic">i</text>
        <text x="38" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#0D47A1">ICICI PRUDENTIAL</text>
        <text x="38" y="38" fontFamily="sans-serif" fontSize="9" fill="#E53935" fontWeight="semibold">LIFE INSURANCE</text>
      </svg>
    ),
    // International Delight
    (
      <svg key="delight" viewBox="0 0 140 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <ellipse cx="25" cy="25" rx="18" ry="14" fill="#0D47A1" />
        <text x="13" y="29" fontFamily="serif" fontWeight="bold" fontSize="10" fill="#FFFFFF">Delight</text>
        <text x="50" y="31" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#0D47A1">Delight</text>
      </svg>
    ),
    // Mangatrai Pearls
    (
      <svg key="mangatrai" viewBox="0 0 150 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <rect x="5" y="8" width="140" height="34" fill="#111111" rx="2" />
        <text x="12" y="30" fontFamily="serif" fontStyle="italic" fontSize="17" fill="#D4AF37">Mangatrai</text>
        <text x="90" y="28" fontFamily="sans-serif" fontSize="8" fill="#FFFFFF" letterSpacing="0.5">PEARLS & GEMS</text>
      </svg>
    ),
    // Mercedes-Benz
    (
      <svg key="mercedes" viewBox="0 0 170 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <circle cx="22" cy="25" r="16" stroke="#777777" strokeWidth="2" fill="none" />
        <path d="M22 25 L22 10 L19 23 Z" fill="#777777" />
        <path d="M22 25 L22 10 L25 23 Z" fill="#999999" />
        <path d="M22 25 L9 32 L20 27 Z" fill="#777777" />
        <path d="M22 25 L9 32 L11 35 Z" fill="#999999" />
        <path d="M22 25 L35 32 L24 27 Z" fill="#999999" />
        <path d="M22 25 L35 32 L33 35 Z" fill="#777777" />
        <text x="46" y="31" fontFamily="sans-serif" fontSize="13" fill="#333333" letterSpacing="1">Mercedes-Benz</text>
      </svg>
    ),
    // Malla Reddy Group
    (
      <svg key="mallareddy" viewBox="0 0 180 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <g transform="translate(5, 5)">
          <path d="M15 5 C8 12, 8 25, 15 35 C22 25, 22 12, 15 5" fill="#0D47A1" />
          <path d="M15 5 C11 12, 19 20, 15 35" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        </g>
        <text x="38" y="23" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#0D47A1">MALLA REDDY</text>
        <text x="38" y="36" fontFamily="sans-serif" fontSize="9" fill="#555555">GROUP OF INSTITUTIONS</text>
      </svg>
    ),
    // Thums Up
    (
      <svg key="thumsup" viewBox="0 0 130 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <rect x="5" y="5" width="120" height="40" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="1.5" rx="4" />
        <path d="M18 33 L18 20 C18 18, 22 15, 22 11 C22 9, 26 9, 26 12 L24 20 L32 20 C35 20, 35 24, 32 26 L29 33 Z" fill="#D32F2F" />
        <text x="40" y="29" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#0D47A1" fontStyle="italic">Thums Up</text>
      </svg>
    ),
    // TVS
    (
      <svg key="tvs" viewBox="0 0 110 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <path d="M10 25 C14 17, 22 19, 30 17 C26 23, 22 25, 14 31 Z" fill="#E53935" />
        <text x="38" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="#0D47A1" fontStyle="italic">TVS</text>
      </svg>
    ),
    // Videocon
    (
      <svg key="videocon" viewBox="0 0 130 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <path d="M15 12 C11 23, 22 35, 30 35 C26 27, 18 18, 22 10 Z" fill="#4CAF50" />
        <text x="38" y="32" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fill="#111111" letterSpacing="0.5">VIDEOCON</text>
      </svg>
    ),
    // Wipro
    (
      <svg key="wipro" viewBox="0 0 120 50" className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300">
        <g transform="translate(20, 25)">
          <circle cx="0" cy="0" r="13" fill="none" stroke="#2196F3" strokeWidth="1.5" strokeDasharray="2,2" />
          <circle cx="0" cy="0" r="9" fill="none" stroke="#E91E63" strokeWidth="1.5" strokeDasharray="1.5,1.5" />
          <circle cx="0" cy="0" r="6" fill="none" stroke="#FFEB3B" strokeWidth="1.5" strokeDasharray="1,1" />
        </g>
        <text x="42" y="32" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="#333333">wipro</text>
      </svg>
    )
  ]

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center" data-aos="fade-up">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold">Trusted Partners</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 font-serif text-brand-dark">Clients We Have Served</h2>
      </div>
      
      {/* Infinite Slider Container */}
      <div className="relative w-full flex items-center justify-center bg-gray-50 py-12 border-y border-gray-100 select-none">
        {/* Gradient overlays to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-20">
          {/* First loop of client logo badges */}
          {clientLogos.map((logo, idx) => (
            <div key={`marquee-1-${idx}`} className="flex items-center justify-center shrink-0 min-w-[200px] h-16">
              {logo}
            </div>
          ))}

          {/* Second loop of client logo badges */}
          {clientLogos.map((logo, idx) => (
            <div key={`marquee-2-${idx}`} className="flex items-center justify-center shrink-0 min-w-[200px] h-16">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
