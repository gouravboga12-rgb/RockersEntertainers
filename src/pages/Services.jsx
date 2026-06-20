import React, { useState } from 'react'

export default function Services() {
  const [expanded, setExpanded] = useState({})

  const services = [
    {
      title: 'Birthday Decorations',
      shortDesc: 'Fairy-tale theme balloon arches and colorful setups for children\'s birthdays.',
      points: [
        'Custom Theme Backdrops',
        'Premium Balloon Sculptures',
        'Creative Cake Table Styling',
        'Kids Entertainment Activities',
        'Sound & Lights Installation'
      ],
      img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
      icon: 'fa-gift',
      whatsapp: 'Birthday Decorations'
    },
    {
      title: 'Sangeet Events',
      shortDesc: 'High-energy musical dance stage setups with premium lighting and crystal-clear sound.',
      points: [
        'Audio Setup & Subwoofers',
        'Ambient Lighting Control',
        'LED Screen Video Backdrop',
        'Custom Stage Scaffolding',
        'Family Choreography Support'
      ],
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
      icon: 'fa-music',
      whatsapp: 'Sangeet Events'
    },
    {
      title: 'Wedding Planning',
      shortDesc: 'Full-scale wedding stage decorations, mandap floristry, and coordination services.',
      points: [
        'Mandap Decoration & Floral Art',
        'Entrance Pathway Lighting',
        'Sound System Integration',
        'Catering Coordination Support',
        'Full Event Management'
      ],
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
      icon: 'fa-heart',
      whatsapp: 'Wedding Planning'
    },
    {
      title: 'House Warming Decorations',
      shortDesc: 'Traditional banana leaf and floral garlands for welcoming vibes into your new home.',
      points: [
        'Traditional Mango Leaf Toran',
        'Elegant Entrance Arch Florals',
        'Brass Lamp Setup Decoration',
        'Guest Seating Arrangements',
        'Pooja Room Background Styling'
      ],
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
      icon: 'fa-home',
      whatsapp: 'House Warming Decorations'
    },
    {
      title: 'Corporate, School & College Events',
      shortDesc: 'Large-scale audio, staging, hangar tents, and seating plans for grand organizations.',
      points: [
        'Seminar Stage Scaffolding',
        'High-Output Audio Grid Setups',
        'Hangar Tent Construction',
        'Artist & Guest Management',
        'Security Crowd Planning'
      ],
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
      icon: 'fa-building',
      whatsapp: 'Corporate, School and College Events'
    },
    {
      title: 'Audio Launch Events',
      shortDesc: 'High-tech audio launch stages with multi-screen setups, lighting arrays, and press media desks.',
      points: [
        'Live Subwoofer Audio Grids',
        'LED Video Screen Layouts',
        'Press & Media Seating Plan',
        'Dynamic Profile Spotlights',
        'Celebrity Security Protocols'
      ],
      img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop',
      icon: 'fa-bullhorn',
      whatsapp: 'Audio Launch Events'
    },
    {
      title: 'Fashion Shows & Dance Events',
      shortDesc: 'Choreographed dance setups and fashion ramp runways with spotlights and green rooms.',
      points: [
        'Custom Ramp Construction',
        'Spotlight & Profile Fixtures',
        'Backstage Green Rooms Setup',
        'Audio Mixing DJ System',
        'Live Video Multi-Cam Feeds'
      ],
      img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop',
      icon: 'fa-star',
      whatsapp: 'Fashion Shows and Dance Events'
    }
  ]

  const toggleExpand = (idx) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  const getWhatsAppLink = (serviceName) => {
    const text = `Hello Rockers Entertainers, I would like to inquire about your ${serviceName} services.`
    return `https://wa.me/919966468877?text=${encodeURIComponent(text)}`
  }

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-brand-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop" 
            alt="Services Event Set Backdrop" 
            className="w-full h-full object-cover opacity-25"
            style={{ filter: 'brightness(0.4) contrast(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-gold-gradient">Our Event Services</h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm font-light tracking-wider uppercase">
            From stage decorations to total logistical event management, we turn your celebration milestones into high-end experiences.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-radial-glow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 flex flex-col h-auto premium-card glow-border w-full ${
                idx === 6 ? 'col-span-1 sm:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={100 * (idx % 3 + 1)}
            >
              <div className="h-32 sm:h-56 overflow-hidden relative group">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/25 to-transparent"></div>
                <span className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6 text-white font-bold text-xs sm:text-xl flex items-center gap-1.5 sm:gap-2.5 font-serif text-gold-gradient">
                  <i className={`fas ${service.icon} text-brand-gold text-[10px] sm:text-base`}></i> {service.title}
                </span>
              </div>
              
              <div className="p-3 sm:p-6 flex-grow flex flex-col justify-between text-left">
                <div>
                  <p className="text-gray-500 text-[10px] sm:text-sm leading-relaxed mb-3 font-light">
                    {service.shortDesc}
                  </p>
                  
                  {/* Collapsible Points */}
                  <div className={`transition-all duration-300 overflow-hidden ${expanded[idx] ? 'max-h-60 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-1.5 sm:space-y-2 border-t border-gray-100 pt-3">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-gray-600 text-[9px] sm:text-xs flex items-start gap-1.5">
                          <i className="fas fa-check-circle text-brand-gold mt-0.5 shrink-0"></i>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => toggleExpand(idx)}
                    className="inline-flex items-center gap-1 text-[9px] sm:text-xs font-bold text-brand-red hover:text-brand-gold transition-colors duration-300 mb-4 focus:outline-none cursor-pointer"
                  >
                    <span>{expanded[idx] ? 'View Less' : 'View More'}</span>
                    <i className={`fas ${expanded[idx] ? 'fa-chevron-up' : 'fa-chevron-down'} text-[8px] sm:text-[10px]`}></i>
                  </button>
                </div>

                <a 
                  href={getWhatsAppLink(service.whatsapp)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center w-full py-2 sm:py-3.5 bg-gradient-to-r from-brand-red to-brand-darkred hover:from-brand-gold hover:to-brand-gold-dark text-white text-[9px] sm:text-xs uppercase tracking-widest font-bold rounded-xl shadow-md transition-all duration-500 overflow-hidden group/btn focus:outline-none"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <i className="fab fa-whatsapp mr-1 sm:mr-2 text-xs sm:text-base text-green-400 group-hover/btn:text-white transition-colors duration-300"></i> Inquire About This
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
