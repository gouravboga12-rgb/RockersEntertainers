import React from 'react'
import LogoMarquee from '../components/LogoMarquee'

export default function About() {
  const values = [
    { title: 'Creativity', icon: 'fa-lightbulb' },
    { title: 'Professionalism', icon: 'fa-user-tie' },
    { title: 'Integrity', icon: 'fa-shield-alt' },
    { title: 'Commitment', icon: 'fa-handshake' },
    { title: 'Innovation', icon: 'fa-magic' },
    { title: 'Satisfaction', icon: 'fa-smile-beam' }
  ]

  const strengths = [
    { title: 'Event Professionals', desc: 'Experienced planners and logistics operators managing setups flawlessly.', icon: 'fa-users-cog' },
    { title: 'Creative Concepts', desc: 'Custom themes, floral designs, and balloon sets tailoring your preferences.', icon: 'fa-palette' },
    { title: 'Affordable Packages', desc: 'Transparent budgeting and competitive prices without quality compromises.', icon: 'fa-hand-holding-usd' },
    { title: 'Timely Delivery', desc: 'Strict scheduling guarantees setups are ready hours before the guests arrive.', icon: 'fa-clock' },
    { title: 'Customized Solutions', desc: 'From wedding stages to school annual days, customized layouts adapt to you.', icon: 'fa-sliders-h' },
    { title: 'Professional Execution', desc: 'Punctual coordination, reliable equipment checks, and clean venue cleanup.', icon: 'fa-briefcase' },
    { title: 'Trusted by Brands', desc: 'Longterm relationships with Infosys, TVS Motor Company, Wipro, and Apollo.', icon: 'fa-building' },
    { title: 'Customer-Centric', desc: 'Your satisfaction is our primary target. Responsive feedback loop at all times.', icon: 'fa-smile' }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-brand-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop" 
            alt="About Page Event Set Backdrop" 
            className="w-full h-full object-cover opacity-25"
            style={{ filter: 'brightness(0.4) contrast(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-gold-gradient">About Our Company</h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm font-light tracking-wider uppercase">
            Meet the planners, visual designers, and operational professionals shaping premium celebrations.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-radial-glow overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left" data-aos="fade-right">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-3 block">Corporate Background</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif text-brand-dark leading-tight">Transforming Ideas Into Flawless Realities</h2>
            <div className="w-12 h-[2px] bg-brand-gold mb-6"></div>
            <p className="text-gray-500 leading-relaxed mb-6 font-light text-sm">
              Rockers Entertainers is a professional event management and decoration company specializing in weddings, birthday celebrations, corporate events, educational institution programs, fashion shows, dance events, audio launches, and special occasions.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 font-light text-sm">
              We transform simple ideas into unforgettable experiences through custom theme creation, creative floral and structure design, reliable timeline management, and premium visual execution. We manage all visual, audio, layout, and hospitality assets to ensure stress-free event hosting.
            </p>
            <a 
              href="https://wa.me/919966468877?text=Hello%20Rockers%20Entertainers%2C%20I%20would%20like%20to%20know%20more%20about%20your%20company%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-red to-brand-darkred hover:from-brand-gold hover:to-brand-gold-dark text-white font-bold rounded-full shadow-lg transition duration-500 text-xs uppercase tracking-widest focus:outline-none"
            >
              <i className="fab fa-whatsapp text-base"></i> Consult With Our Team
            </a>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/10 rounded-2xl blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red/5 rounded-2xl blur-3xl"></div>
            <div className="relative z-10 border border-brand-gold/20 p-2.5 rounded-3xl bg-white shadow-2xl">
              <div className="zoom-img-container rounded-2xl overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" 
                     alt="Corporate Event Stage Setup" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-28 bg-brand-dark text-white border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
            {/* Vision */}
            <div className="bg-[#0d1220]/90 rounded-3xl p-8 sm:p-10 border border-brand-gold/15 flex gap-6 items-start hover:border-brand-gold/40 transition-all duration-500 backdrop-blur-xl shadow-2xl" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold text-2xl shrink-0 border border-brand-gold/15">
                <i className="fas fa-eye"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-serif text-brand-gold-light">Our Vision</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  To become one of the most trusted and innovative event management companies by delivering exceptional event experiences that exceed client expectations, creating standard benchmarks in event visual design and hospitality execution.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#0d1220]/90 rounded-3xl p-8 sm:p-10 border border-brand-gold/15 flex gap-6 items-start hover:border-brand-gold/40 transition-all duration-500 backdrop-blur-xl shadow-2xl" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold text-2xl shrink-0 border border-brand-gold/15">
                <i className="fas fa-bullseye"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-serif text-brand-gold-light">Our Mission</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  To provide creative, reliable, and customer-focused event solutions that transform every celebration into a memorable experience. We commit to professional integrity, detail coordination, and visual visual craftsmanship.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2 block">Our Code of Conduct</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif mb-4">Core Brand Values</h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            {values.map((v, index) => (
              <div 
                key={index}
                className="bg-[#0d1220]/90 hover:bg-[#11172a] border border-white/5 hover:border-brand-gold/30 rounded-2xl p-6 transition-all duration-500 flex flex-col items-center shadow-lg hover:shadow-brand-gold/5" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center text-xl mb-4 border border-brand-gold/15">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-300 font-serif">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Strengths Grid */}
      <section className="py-28 bg-brand-dark text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2 block">Our Advantages</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4">Why Clients Choose Us</h2>
            <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {strengths.map((s, idx) => (
              <div 
                key={idx}
                className="bg-[#0d1220]/80 border border-white/5 hover:border-brand-gold/30 rounded-3xl p-6 transition-all duration-500 shadow-xl"
                data-aos="fade-up"
                data-aos-delay={100 * (idx % 4 + 1)}
              >
                <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center text-lg mb-6 border border-brand-gold/15">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3 className="font-bold text-base mb-2 font-serif text-brand-gold-light">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Marquee */}
      <LogoMarquee />
    </div>
  )
}
