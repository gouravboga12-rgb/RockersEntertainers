import React, { useState, useEffect } from 'react'
import LogoMarquee from '../components/LogoMarquee'

function Typewriter({ text, delay = 80, className = "", startDelay = 0 }) {
  const [currentText, setCurrentText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [started, text, delay]);

  return <span className={className}>{currentText}</span>;
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Gallery States for Home Page Preview
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Contact Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const testimonials = [
    { name: 'Corporate Client', icon: 'fa-building', review: 'Excellent planning, outstanding execution, and highly professional service. They handled our conference and award show flawlessly.' },
    { name: 'Wedding Client', icon: 'fa-heart', review: 'Beautiful decorations and seamless coordination. Everything exceeded expectations. The floral entrance and stage design were spectacular.' },
    { name: 'Institution Client', icon: 'fa-university', review: 'Managed our event perfectly with creativity, professionalism, and attention to detail. The college cultural fest was a massive success!' }
  ]

  const values = [
    { title: 'Creativity', icon: 'fa-lightbulb' },
    { title: 'Professionalism', icon: 'fa-user-tie' },
    { title: 'Integrity', icon: 'fa-shield-alt' },
    { title: 'Commitment', icon: 'fa-handshake' },
    { title: 'Innovation', icon: 'fa-magic' },
    { title: 'Satisfaction', icon: 'fa-smile-beam' }
  ]

  const [expandedServices, setExpandedServices] = useState({})

  const toggleServiceExpand = (idx) => {
    setExpandedServices(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

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
    }
  ]

  // 8 Preview Photos for Home Page Gallery
  const rawItems = [
    { name: "p20.jpeg", cat: "Weddings", title: "Traditional Floral Wedding Stage" },
    { name: "p22.jpeg", cat: "Weddings", title: "South Indian Temple Mandap" },
    { name: "p7 birthday.jpeg", cat: "Birthdays", title: "Theme Birthday Party Backdrop" },
    { name: "p8 birthday.jpeg", cat: "Birthdays", title: "Elegant Birthday Stage Decor" },
    { name: "p1.jpeg", cat: "Corporate Events", title: "TVS NTORQ Launch Stage Setup" },
    { name: "p3 gulf.jpeg", cat: "Corporate Events", title: "Gulf Oil Corporate Launch Stage" },
    { name: "p33.jpeg", cat: "Dance Events", title: "Moulin Rouge Theme Dance" },
    { name: "p48 house Warming.jpeg", cat: "House Warming", title: "Traditional House Warming Decor" }
  ]

  const previewGalleryItems = rawItems.map(item => ({
    category: item.cat,
    title: item.title,
    img: `/photos/${item.name}`,
    isVideo: false
  }))

  const openLightbox = (idx) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + previewGalleryItems.length) % previewGalleryItems.length)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % previewGalleryItems.length)
  }

  const getWhatsAppLink = (serviceName) => {
    const text = `Hello Rockers Entertainers, I would like to inquire about your ${serviceName} services.`
    return `https://wa.me/919966468877?text=${encodeURIComponent(text)}`
  }

  const getGalleryWhatsAppLink = (title) => {
    const text = `Hello Rockers Entertainers, I am interested in an event similar to the gallery item: ${title}`
    return `https://wa.me/919966468877?text=${encodeURIComponent(text)}`
  }

  // Contact Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const { name, phone, email, eventType, message } = formData
    if (!name || !phone || !email) {
      alert('Please fill out your Name, Phone Number, and Email Address.')
      return
    }
    setIsSubmitting(true)
    const whatsappNumber = '919966468877'
    const text = `Hello Rockers Entertainers,

I would like to make an inquiry for an event. Here are the details:
- *Full Name*: ${name}
- *Phone Number*: ${phone}
- *Email*: ${email}
- *Event Type*: ${eventType || 'General Inquiry'}
- *Message*: ${message}

Looking forward to your response!`
    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        message: ''
      })
    }, 1200)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Gallery Key Listeners for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft' && lightboxOpen) prevImage()
      if (e.key === 'ArrowRight' && lightboxOpen) nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, lightboxOpen])

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start bg-brand-dark text-white overflow-hidden py-24">
        {/* Background Image & Dual Gradient Overlays (inspired by nikhilevents.com) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_background.jpg" 
            alt="Luxury Event Setup Backdrop" 
            className="w-full h-full object-cover object-center opacity-75 scale-105 transition-transform duration-1000"
            style={{ filter: 'brightness(0.8) contrast(1.1)' }}
          />
          {/* Left-to-right dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/60 to-transparent"></div>
          {/* Bottom-to-top gradient for blending with next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-brand-darker/35"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <div className="max-w-3xl">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold-light text-xs font-bold tracking-widest uppercase mb-6"
            >
              <i className="fas fa-star text-[10px] animate-pulse text-brand-gold"></i> Event Styling & Planning Specialists
            </span>

            <h1 
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-[1.1] uppercase font-sans"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)', minHeight: '1.2em' }}
            >
              <Typewriter text="Rockers" delay={80} startDelay={0} /> <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-[#e27478] to-brand-gold">
                <Typewriter text="Entertainers" delay={80} startDelay={600} />
              </span>
            </h1>

            <h2 
              className="text-lg sm:text-xl md:text-2xl font-serif italic text-brand-gold-light mb-6 leading-relaxed font-light"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)', minHeight: '1.5em' }}
            >
              <Typewriter text='"Turning Celebrations Into Unforgettable Experiences"' delay={40} startDelay={1500} />
            </h2>

            <p 
              className="text-sm sm:text-base text-gray-300 mb-10 max-w-2xl font-light leading-relaxed tracking-wide"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
            >
              Professional event planning, decoration, entertainment management, and execution services for weddings, birthdays, corporate affairs, and special occasions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <div className="w-full sm:w-auto opacity-0 animate-popup-1">
                <a 
                  href="/contact.html#contact-form"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-brand-red to-brand-gold hover:from-brand-gold hover:to-brand-gold-dark text-white font-bold rounded-full shadow-xl shadow-brand-red/30 hover:scale-105 active:scale-95 transform transition-all duration-300 text-xs uppercase tracking-widest focus:outline-none cursor-pointer"
                >
                  <i className="fas fa-calendar-check mr-2 text-sm"></i> Book Your Event
                </a>
              </div>
              <div className="w-full sm:w-auto opacity-0 animate-popup-2">
                <a 
                  href="/services.html" 
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95 transform transition-all duration-300 text-xs uppercase tracking-widest backdrop-blur-md"
                >
                  <i className="fas fa-sparkles mr-2 text-brand-gold text-base"></i> View Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Mouse Icon (inspired by nikhilevents.com) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 select-none animate-bounce z-10">
          <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">Scroll Down</span>
          <i className="fas fa-chevron-down text-brand-gold text-xs"></i>
        </div>
      </section>

      {/* 2. About Section (Integrated) */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left bg-radial-glow border-b border-gray-100 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
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
              href="/about.html" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark hover:bg-brand-gold text-white hover:text-brand-darker font-bold rounded-full shadow-lg transition duration-500 text-xs uppercase tracking-widest focus:outline-none border border-brand-gold/15"
            >
              Read More About Us <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/10 rounded-2xl blur-3xl"></div>
            <div className="relative z-10 border border-brand-gold/20 p-2.5 rounded-3xl bg-white shadow-2xl">
              <div className="zoom-img-container rounded-2xl overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" 
                     alt="Corporate Event Stage Setup" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Vision / Mission Integration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 border border-brand-gold/15 flex gap-6 items-start hover:border-brand-gold/40 transition-all duration-500 shadow-xl text-white" data-aos="fade-up" data-aos-delay="100">
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

          <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 border border-brand-gold/15 flex gap-6 items-start hover:border-brand-gold/40 transition-all duration-500 shadow-xl text-white" data-aos="fade-up" data-aos-delay="200">
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

        {/* Core Values Grid Integration */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2 block">Our Code of Conduct</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4 text-brand-dark text-center">Core Brand Values</h3>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            {values.map((v, index) => (
              <div 
                key={index}
                className="bg-white hover:bg-brand-dark/5 border border-gray-100 hover:border-brand-gold/30 rounded-2xl p-6 transition-all duration-500 flex flex-col items-center shadow-sm" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center text-xl mb-4 border border-brand-gold/15">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-dark font-serif">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Counters Section (Visual Stats Block) */}
        <div className="mt-24 max-w-6xl mx-auto" data-aos="zoom-in">
          <div className="bg-brand-dark/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-10 border border-brand-gold/15">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y-2 md:divide-y-0 md:divide-x divide-white/5">
              <div className="pt-6 md:pt-0">
                <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light mb-2">5000+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Events Managed</p>
              </div>
              <div className="pt-6 md:pt-0">
                <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light mb-2">1000+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Corporate Clients</p>
              </div>
              <div className="pt-6 md:pt-0">
                <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light mb-2">5000+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Happy Clients</p>
              </div>
              <div className="pt-6 md:pt-0">
                <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light mb-2">18+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Process Timeline Section */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-3 block">Workflow Journey</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 font-serif text-brand-dark">Our Event Execution Process</h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-brand-gold/10 via-brand-gold/60 to-brand-gold/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            <div className="text-center flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-24 h-24 bg-brand-dark hover:bg-brand-gold text-brand-gold hover:text-brand-darker rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-gold/20 hover:border-brand-gold transition-all duration-500 mb-6 group cursor-pointer">
                <i className="fas fa-comments text-3xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Step 01</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mb-2">Consultation</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
                We connect to learn your visual expectations, estimated budgets, and event scope details.
              </p>
            </div>

            <div className="text-center flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-24 h-24 bg-brand-dark hover:bg-brand-gold text-brand-gold hover:text-brand-darker rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-gold/20 hover:border-brand-gold transition-all duration-500 mb-6 group cursor-pointer">
                <i className="fas fa-file-signature text-3xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Step 02</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mb-2">Planning</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
                Drafting venue outlines, timeline charts, entertainment logistics, and custom pricing menus.
              </p>
            </div>

            <div className="text-center flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-24 h-24 bg-brand-dark hover:bg-brand-gold text-brand-gold hover:text-brand-darker rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-gold/20 hover:border-brand-gold transition-all duration-500 mb-6 group cursor-pointer">
                <i className="fas fa-palette text-3xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Step 03</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mb-2">Design & Decor</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
                Crafting distinct stage backdrops, custom balloon setups, mood lighting, and floral selections.
              </p>
            </div>

            <div className="text-center flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-24 h-24 bg-brand-dark hover:bg-brand-gold text-brand-gold hover:text-brand-darker rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-gold/20 hover:border-brand-gold transition-all duration-500 mb-6 group cursor-pointer">
                <i className="fas fa-rocket text-3xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Step 04</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mb-2">Event Execution</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
                On-site setup setup, running schedules, sound system checking, and overall vendor supervision.
              </p>
            </div>

            <div className="text-center flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
              <div className="w-24 h-24 bg-brand-dark hover:bg-brand-gold text-brand-gold hover:text-brand-darker rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-gold/20 hover:border-brand-gold transition-all duration-500 mb-6 group cursor-pointer">
                <i className="fas fa-smile-beam text-3xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Step 05</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mb-2">Satisfaction</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
                Flawless pack-down processes and client signoff with beautiful lifelong memories captured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section (Limited Preview - 4 in One Row) */}
      <section className="py-28 bg-[#FAF9F6] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-3 block">Services Showcase</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 font-serif text-brand-dark">Our Premium Services</h2>
            <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
              We bring planning expertise, custom visual design, and flawless production execution to all your key celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 flex flex-col h-auto premium-card glow-border w-full"
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
              >
                <div className="h-28 sm:h-44 overflow-hidden relative group">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/25 to-transparent"></div>
                  <span className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-5 text-white font-bold text-xs sm:text-base flex items-center gap-1.5 sm:gap-2 font-serif text-gold-gradient">
                    <i className={`fas ${service.icon} text-brand-gold text-[10px] sm:text-sm`}></i> {service.title}
                  </span>
                </div>
                
                <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed mb-3 font-light">
                      {service.shortDesc}
                    </p>
                    
                    {/* Collapsible Points */}
                    <div className={`transition-all duration-300 overflow-hidden ${expandedServices[idx] ? 'max-h-60 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-1.5 sm:space-y-2 border-t border-gray-100 pt-3">
                        {service.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-gray-600 text-[9px] sm:text-[10px] flex items-start gap-1.5">
                            <i className="fas fa-check-circle text-brand-gold mt-0.5 shrink-0"></i>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => toggleServiceExpand(idx)}
                      className="inline-flex items-center gap-1 text-[9px] sm:text-xs font-bold text-brand-red hover:text-brand-gold transition-colors duration-300 mb-4 focus:outline-none cursor-pointer"
                    >
                      <span>{expandedServices[idx] ? 'View Less' : 'View More'}</span>
                      <i className={`fas ${expandedServices[idx] ? 'fa-chevron-up' : 'fa-chevron-down'} text-[8px] sm:text-[10px]`}></i>
                    </button>
                  </div>

                  <a 
                    href={getWhatsAppLink(service.whatsapp)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center w-full py-2 sm:py-2.5 bg-gradient-to-r from-brand-red to-brand-darkred hover:from-brand-gold hover:to-brand-gold-dark text-white text-[9px] sm:text-[10px] uppercase tracking-widest font-bold rounded-xl shadow-md transition-all duration-500 overflow-hidden group/btn focus:outline-none"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fab fa-whatsapp mr-1 sm:mr-1.5 text-xs sm:text-sm text-green-400 group-hover/btn:text-white transition-colors duration-300"></i> Inquire
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14" data-aos="fade-up">
            <a 
              href="/services.html"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-dark hover:bg-brand-gold text-white hover:text-brand-dark font-bold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all duration-500 focus:outline-none cursor-pointer border border-brand-gold/20"
            >
              View All Services <i className="fas fa-sparkles ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Gallery Section (Limited Preview - 8 Photos Grid) */}
      <section className="py-28 bg-brand-dark text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-3 block">Gallery Highlights</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 font-serif text-gold-gradient">Our Event Visuals</h2>
            <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-xl mx-auto text-sm font-light">
              Here is a curated preview of some of our custom stages, flower works, and wedding backdrops.
            </p>
          </div>

          {/* 8 Images Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {previewGalleryItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-brand-darker rounded-2xl overflow-hidden shadow-md border border-white/5 group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => openLightbox(idx)}
                data-aos="fade-up"
                data-aos-delay={100 * (idx % 4 + 1)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Hover Overlay Glow */}
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-base border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <i className="fas fa-expand-alt"></i>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-brand-darker text-left">
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">{item.category}</span>
                  <h3 className="font-bold text-xs text-gray-300 mt-0.5 truncate group-hover:text-brand-gold transition-colors duration-300">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Gallery Link Button */}
          <div className="text-center mt-14" data-aos="fade-up">
            <a 
              href="/gallery.html" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-red to-brand-darkred hover:from-brand-gold hover:to-brand-gold-dark text-white font-bold rounded-full shadow-lg transition duration-500 text-xs uppercase tracking-widest text-center"
            >
              View Full Gallery <i className="fas fa-images"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Trusted Clients Logo Marquee */}
      <LogoMarquee />

      {/* 7. Testimonials Section */}
      <section className="py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-3 block">Feedback</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 font-serif text-brand-dark text-center">What Our Clients Say</h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
        </div>

        <div className="relative bg-brand-darker rounded-3xl shadow-2xl p-8 sm:p-14 border border-white/5 max-w-4xl mx-auto backdrop-blur-xl">
          <div className="absolute top-4 left-6 text-brand-gold/10 text-9xl pointer-events-none font-serif select-none">“</div>
          
          <div className="relative z-10 min-h-[180px] flex items-center justify-center">
            {testimonials.map((t, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 ${activeTestimonial === index ? 'block scale-100 opacity-100' : 'hidden scale-95 opacity-0'}`}
              >
                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center text-2xl mx-auto mb-8 border border-brand-gold/15">
                  <i className={`fas ${t.icon}`}></i>
                </div>
                <p className="text-lg sm:text-xl text-gray-300 italic leading-relaxed mb-8 max-w-2xl mx-auto font-light">"{t.review}"</p>
                <h4 className="text-xs font-bold text-brand-gold tracking-widest uppercase">{t.name}</h4>
                <div className="flex items-center justify-center gap-1.5 mt-3 text-amber-500 text-[10px]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2.5 mt-8 relative z-20">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveTestimonial(index)} 
                className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none cursor-pointer ${
                  activeTestimonial === index ? 'bg-brand-gold w-8' : 'bg-white/20 hover:bg-white/40 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Integrated Section (Short Version at Bottom of Page) */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-radial-glow scroll-mt-28 sm:scroll-mt-36" data-aos="fade-up" id="contact-form">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100/85 text-left">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2 block">Quick Inquiry</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-brand-dark text-center mb-2">Get A Free Quote</h3>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mb-4"></div>
            <p className="text-xs text-gray-400 text-center">Fill in the details below to connect with our planners instantly on WhatsApp.</p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400"><i className="fas fa-user text-xs"></i></span>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder="John Doe" 
                    className="w-full pl-11 pr-4 py-3 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Phone Number</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400"><i className="fas fa-phone-alt text-xs"></i></span>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    placeholder="9966468877" 
                    className="w-full pl-11 pr-4 py-3 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400"><i className="fas fa-envelope text-xs"></i></span>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="john@example.com" 
                    className="w-full pl-11 pr-4 py-3 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="eventType" className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Event Type</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400"><i className="fas fa-glass-cheers text-xs"></i></span>
                  <select 
                    id="eventType" 
                    name="eventType" 
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required 
                    className="w-full pl-11 pr-4 py-3 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm appearance-none transition duration-300 outline-none cursor-pointer"
                  >
                    <option value="" disabled>Select Category</option>
                    <option value="Wedding Planning">Wedding Planning</option>
                    <option value="Birthday Decorations">Birthday Decorations</option>
                    <option value="Sangeet Events">Sangeet Events</option>
                    <option value="House Warming Decorations">House Warming Decorations</option>
                    <option value="Corporate/School Events">Corporate/School Events</option>
                    <option value="Audio Launch Events">Audio Launch Events</option>
                    <option value="Fashion & Dance Events">Fashion & Dance Events</option>
                    <option value="Other Celebration">Other Celebration Inquiry</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 pointer-events-none"><i className="fas fa-chevron-down text-xs"></i></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Requirements</label>
              <textarea 
                id="message" 
                name="message" 
                rows="3" 
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Brief description of date, theme, decoration needs..." 
                className="w-full px-4 py-3 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="relative mt-2 w-full py-4 bg-gradient-to-r from-brand-red to-brand-darkred hover:from-brand-gold hover:to-brand-gold-dark text-white font-bold rounded-xl shadow-lg transition-all duration-500 text-xs uppercase tracking-widest flex items-center justify-center gap-2 focus:outline-none disabled:opacity-50 overflow-hidden group/submit cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <i className="fas fa-circle-notch animate-spin mr-2"></i> Connecting...
                  </>
                ) : (
                  <>
                    <i className="fab fa-whatsapp text-base"></i> Send Quick Inquiry
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold-dark opacity-0 group-hover/submit:opacity-100 transition-opacity duration-500" />
            </button>
          </form>
        </div>
      </section>

      {/* Lightbox Modal Overlay (copied from Gallery.jsx) */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between py-6 px-4"
        >
          {/* Top controls bar */}
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-10 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">{previewGalleryItems[lightboxIndex]?.category}</span>
              <h3 className="text-white text-lg font-semibold font-serif">{previewGalleryItems[lightboxIndex]?.title}</h3>
            </div>
            <button 
              onClick={() => setLightboxOpen(false)} 
              className="text-white hover:text-brand-gold text-3xl focus:outline-none p-2 transition-colors duration-300 cursor-pointer" 
              aria-label="Close Lightbox"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Main Display Area */}
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center flex-grow py-8">
            <button 
              onClick={prevImage} 
              className="absolute left-0 md:-left-16 z-20 text-white hover:text-brand-gold text-4xl p-4 focus:outline-none transition-colors duration-300 cursor-pointer"
              aria-label="Previous Item"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <img 
              src={previewGalleryItems[lightboxIndex]?.img} 
              alt={previewGalleryItems[lightboxIndex]?.title} 
              className="max-w-full max-h-[70vh] rounded-lg shadow-2xl object-contain border border-white/5"
            />

            <button 
              onClick={nextImage} 
              className="absolute right-0 md:-right-16 z-20 text-white hover:text-brand-gold text-4xl p-4 focus:outline-none transition-colors duration-300 cursor-pointer"
              aria-label="Next Item"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Bottom controls / CTA */}
          <div className="text-center z-10">
            <a 
              href={getGalleryWhatsAppLink(previewGalleryItems[lightboxIndex]?.title)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition duration-300 text-sm focus:outline-none"
            >
              <i className="fab fa-whatsapp text-lg"></i> Inquire About This Design
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
