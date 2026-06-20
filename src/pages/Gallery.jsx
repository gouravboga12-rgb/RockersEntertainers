import React, { useState, useEffect, useRef } from 'react'

// Sub-component to manage hover-playback behavior for video grid items
function VideoGridItem({ item, onClick }) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Safe catch for browsers blocking autoplay
      })
    }
  }, [isHovered])

  // Get relevant placeholder images from public/photos folder for instant loading
  const getThumbnail = (cat) => {
    if (cat === 'Weddings') return '/photos/p20.jpeg'
    if (cat === 'Birthdays') return '/photos/p7 birthday.jpeg'
    return '/photos/p33.jpeg' // Dance Events
  }

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-50 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-black">
        {isHovered ? (
          <video 
            ref={videoRef}
            src={item.img} 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            preload="auto"
          />
        ) : (
          <img 
            src={getThumbnail(item.category)} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" 
          />
        )}
        
        {/* Play Icon Overlay */}
        {!isHovered && (
          <div className="absolute inset-0 bg-brand-dark/25 flex items-center justify-center transition-opacity duration-300">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl border border-white/30 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-play ml-1 text-white"></i>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-5 flex items-center justify-between bg-white text-left">
        <div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-red font-bold">{item.category}</span>
          <h3 className="font-bold text-xs sm:text-base text-brand-dark mt-0.5 group-hover:text-brand-red transition-colors duration-300">{item.title}</h3>
        </div>
        <div className="text-gray-400 group-hover:text-brand-red transition-colors duration-300 shrink-0 ml-1.5">
          <i className="fas fa-video text-sm sm:text-lg"></i>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('Photos')
  const [currentFilter, setCurrentFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = ['All', 'Weddings', 'Birthdays', 'Corporate Events', 'School Events', 'College Events', 'Fashion Shows', 'Dance Events', 'Audio Launches', 'House Warming']
  
  const rawItems = [
    { name: "p1.jpeg", cat: "Corporate Events", title: "TVS NTORQ Launch Stage Setup" },
    { name: "P2 Tvs.jpeg", cat: "Corporate Events", title: "TVS NTORQ Launch Stage and Banquet Seating" },
    { name: "p3 gulf.jpeg", cat: "Corporate Events", title: "Gulf Oil Corporate Launch Stage" },
    { name: "p4 gulf.jpeg", cat: "Corporate Events", title: "Gulf Oil Corporate Seminar Stage" },
    { name: "p5 tata motors.jpeg", cat: "Corporate Events", title: "Tata Motors Corporate Seminar Stage" },
    { name: "p6 .jpeg", cat: "Corporate Events", title: "TNPL Press Meet Stage Decor" },
    { name: "p7 birthday.jpeg", cat: "Birthdays", title: "Theme Birthday Party Backdrop" },
    { name: "p8 birthday.jpeg", cat: "Birthdays", title: "Elegant Birthday Stage Decor" },
    { name: "p9 birthday.jpeg", cat: "Birthdays", title: "Jungle Theme Birthday Banquet" },
    { name: "p10 .jpeg", cat: "Corporate Events", title: "Cotiviti Fusion Annual Summit Stage" },
    { name: "p11.jpeg", cat: "Corporate Events", title: "Lupin Corporate Registration Desk Setup" },
    { name: "p12 birthday.jpeg", cat: "Birthdays", title: "Magical Theme Birthday Setup" },
    { name: "p13 birthday.png", cat: "Birthdays", title: "Deluxe Balloon Garland Stage" },
    { name: "p14 birthday.jpeg", cat: "Birthdays", title: "Kids Celebration Theme Decor" },
    { name: "p15 birthday.jpeg", cat: "Birthdays", title: "Royal Birthday Banquet Setup" },
    { name: "p16 .jpeg", cat: "Birthdays", title: "Aadhya's Butterfly Theme 1st Birthday Stage" },
    { name: "p17 .jpeg", cat: "Birthdays", title: "Varenya & Vrindita 1st Birthday Butterfly Stage" },
    { name: "p19.jpeg", cat: "Corporate Events", title: "Corporate Lobby Entrance Floral Art Decoration" },
    { name: "p20.jpeg", cat: "Weddings", title: "Traditional Floral Wedding Stage with Golden Backdrop" },
    { name: "p21.jpeg", cat: "Corporate Events", title: "3D Outdoor Concert and Launch Stage Design" },
    { name: "p22.jpeg", cat: "Weddings", title: "Royal South Indian Temple Mandap Decor" },
    { name: "p23.jpeg", cat: "Weddings", title: "Grand Temple Theme Wedding Stage Setup" },
    { name: "p24.jpeg", cat: "Weddings", title: "Traditional Temple Theme Entrance Pathway Decor" },
    { name: "p25.jpeg", cat: "Weddings", title: "Ornate Golden Temple Mandap Stage Decor" },
    { name: "p26.jpeg", cat: "Weddings", title: "Tirupati Balaji Theme Wedding Stage" },
    { name: "p27.jpeg", cat: "Weddings", title: "Golden Balaji Mandap Stage Decor" },
    { name: "p28.jpeg", cat: "Weddings", title: "Royal Venkateswara Temple Stage Design" },
    { name: "p29.jpeg", cat: "Weddings", title: "Modern White Wisteria Reception Stage with Red Flower Wall" },
    { name: "p30.jpeg", cat: "Weddings", title: "Luxury Wisteria and Floral Arch Reception Stage" },
    { name: "p31.jpeg", cat: "Weddings", title: "Silver and Gold Floral Mandap Setup" },
    { name: "p32.jpeg", cat: "Weddings", title: "Outdoor Floral Wall Wedding Stage" },
    { name: "p33.jpeg", cat: "Dance Events", title: "Moulin Rouge Theme Dance Performance" },
    { name: "p34.jpeg", cat: "Corporate Events", title: "Outdoor Exhibition Pagoda Tents" },
    { name: "p35.jpeg", cat: "Weddings", title: "Mega Temple Theme Wedding Stage with Truss Lighting" },
    { name: "p36.jpeg", cat: "Weddings", title: "Grand Temple Stage with Golden Elephant Sculptures" },
    { name: "p37.jpeg", cat: "Weddings", title: "Enchanted Leaf Theme Wedding Stage" },
    { name: "p38.jpeg", cat: "Weddings", title: "Circular Floral Arch Mandap Setup" },
    { name: "p39.jpeg", cat: "Corporate Events", title: "AstraZeneca Corporate Seminar Stage Setup" },
    { name: "p40.jpeg", cat: "Weddings", title: "Wooden Slat Backdrop Wedding Stage with Floral Walls" },
    { name: "p41.jpeg", cat: "Weddings", title: "Marble Panel Backdrop Stage with White Canopy" },
    { name: "p42.jpeg", cat: "Weddings", title: "Modern Geometric Backdrop Stage with Candelabras" },
    { name: "p43.jpeg", cat: "Weddings", title: "Elegant Marble Panel Stage with Floral Arch" },
    { name: "p44.jpeg", cat: "Weddings", title: "Hexagonal Wooden Arch Wedding Backdrop" },
    { name: "p45.jpeg", cat: "Weddings", title: "Royal Peacock Floral Stage Decor" },
    { name: "p46.jpeg", cat: "Weddings", title: "Traditional Marigold Backdrop with Urli Pots" },
    { name: "p47.jpeg", cat: "Weddings", title: "Grand Sangeet Stage with LED Screen Backdrop" },
    { name: "p48.jpeg", cat: "Dance Events", title: "Ganesh Festival Cultural Dance Stage" },
    { name: "p48 house Warming.jpeg", cat: "House Warming", title: "Traditional House Warming Floral Decor" },
    { name: "p49.jpeg", cat: "Corporate Events", title: "AC German Hangar Tent Event Setup" },
    { name: "p50.jpeg", cat: "Corporate Events", title: "Mega Exhibition Hangar Tent Setup" },
    { name: "p51.jpeg", cat: "Weddings", title: "Traditional Haldi & Mehendi Backdrop Decor" },
    { name: "p52.jpeg", cat: "Weddings", title: "Rooftop Haldi Floral Circle Backdrop" },
    { name: "p53.jpeg", cat: "House Warming", title: "Traditional Banana Leaf and Lotus Haldi Setup" },
    { name: "p54.jpeg", cat: "House Warming", title: "Traditional South Indian Haldi & Pooja Setup" },
    { name: "p55.jpeg", cat: "Weddings", title: "Outdoor Triangular Haldi Stage Setup" },
    { name: "p56.jpeg", cat: "Weddings", title: "Traditional Sreemantham & Family Ceremony Stage" },
    { name: "p57.jpeg", cat: "House Warming", title: "Kamadhenu Cow Theme Pooja Stage" },
    { name: "p58.jpeg", cat: "Weddings", title: "Grand Floral Wall Stage with Circular Ceiling Decor" },
    { name: "p59.jpeg", cat: "Weddings", title: "Lattice Backdrop Wedding Stage with Floral Hills" },
    { name: "p60.jpeg", cat: "Weddings", title: "Outdoor Traditional Haldi Gathering" },
    { name: "p61.jpeg", cat: "Weddings", title: "Outdoor Garden Haldi Stage with Flamingos" },
    { name: "p62.jpeg", cat: "Weddings", title: "Haldi Ceremony Entrance Pathway Decor" },
    { name: "p63.jpeg", cat: "Birthdays", title: "Princess Theme Pink Castle Birthday Stage" },
    { name: "p64.jpeg", cat: "Birthdays", title: "Jungle Theme 1st Birthday Stage Decor" },
    { name: "p65.jpeg", cat: "Birthdays", title: "Baby Birthday Photo Grid Display" },
    { name: "p66 college event.jpeg", cat: "College Events", title: "College Fest Stage Trussing at CMRIT" },
    { name: "p67.jpeg", cat: "College Events", title: "Outdoor Concert Live Stage and Lighting" },
    { name: "p68.jpeg", cat: "Dance Events", title: "Grand Outdoor Stage Dance Show" },
    { name: "p69.jpeg", cat: "Audio Launches", title: "Sarkar Movie Audio Launch Stage" },
    { name: "p70.jpeg", cat: "School Events", title: "Outdoor Campus Celebration Stage" },
    { name: "p71.jpeg", cat: "Weddings", title: "Luxury Outdoor Gold & Crystal Reception Stage" },
    { name: "p72.jpeg", cat: "Weddings", title: "Lush Green Wall Backdrop Reception Stage" },
    { name: "p73.jpeg", cat: "Weddings", title: "White Arch Chandelier Reception Stage" }
  ]

  const rawVideos = [
    // Weddings section videos
    { name: "WhatsApp Video 2026-06-20 at 12.22.03 PM.mp4", cat: "Weddings", title: "Royal Wedding Entrance & Decor Highlights" },
    { name: "WhatsApp Video 2026-06-20 at 12.22.22 PM.mp4", cat: "Weddings", title: "Grand Mandap & Wedding Pathway Highlights" },
    { name: "WhatsApp Video 2026-06-20 at 12.24.38 PM.mp4", cat: "Weddings", title: "Exquisite Stage Decoration Showcase" },
    { name: "WhatsApp Video 2026-06-20 at 12.24.33 PM.mp4", cat: "Weddings", title: "Wedding Varmala & Stage Highlights" },
    { name: "WhatsApp Video 2026-06-20 at 12.24.31 PM.mp4", cat: "Weddings", title: "Traditional Mandap & Marriage Rituals" },
    { name: "WhatsApp Video 2026-06-20 at 12.12.59 PM.mp4", cat: "Weddings", title: "Wedding Sangeet & Celebration Dance" },
    { name: "WhatsApp Video 2026-06-20 at 12.12.59 PM (1).mp4", cat: "Weddings", title: "Grand Groom Entrance & Baraat Highlights" },

    // Birthday section videos
    { name: "WhatsApp Video 2026-06-20 at 12.24.35 PM.mp4", cat: "Birthdays", title: "Magical Balloon Theme Kids Birthday Celebration" },
    { name: "WhatsApp Video 2026-06-20 at 12.12.58 PM.mp4", cat: "Birthdays", title: "Jungle Theme Birthday Party & Games" },

    // Dance Events
    { name: "WhatsApp Video 2026-06-20 at 12.12.57 PM.mp4", cat: "Dance Events", title: "Sizzling Dance Performance & Choreography" }
  ]

  const galleryItems = [
    ...rawItems.map(item => ({
      category: item.cat,
      title: item.title,
      img: `/photos/${item.name}`,
      isVideo: false
    })),
    ...rawVideos.map(item => ({
      category: item.cat,
      title: item.title,
      img: `/videos/${item.name}`,
      isVideo: true
    }))
  ]

  // Listen for Escape key to close Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft' && lightboxOpen) prevImage()
      if (e.key === 'ArrowRight' && lightboxOpen) nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, lightboxOpen, currentFilter, activeTab])

  // Filtered items
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = currentFilter === 'All' || item.category === currentFilter
    const matchesTab = activeTab === 'Photos' ? !item.isVideo : item.isVideo
    return matchesCategory && matchesTab
  })

  const openLightbox = (filteredIdx) => {
    const item = filteredItems[filteredIdx]
    const origIdx = galleryItems.findIndex(gItem => gItem.img === item.img)
    setLightboxIndex(origIdx)
    setLightboxOpen(true)
  }

  const prevImage = () => {
    let idx = lightboxIndex
    do {
      idx = (idx - 1 + galleryItems.length) % galleryItems.length
    } while (
      (currentFilter !== 'All' && galleryItems[idx].category !== currentFilter) ||
      (activeTab === 'Photos' ? galleryItems[idx].isVideo : !galleryItems[idx].isVideo)
    )
    setLightboxIndex(idx)
  }

  const nextImage = () => {
    let idx = lightboxIndex
    do {
      idx = (idx + 1) % galleryItems.length
    } while (
      (currentFilter !== 'All' && galleryItems[idx].category !== currentFilter) ||
      (activeTab === 'Photos' ? galleryItems[idx].isVideo : !galleryItems[idx].isVideo)
    )
    setLightboxIndex(idx)
  }

  const getWhatsAppLink = (title) => {
    const text = `Hello Rockers Entertainers, I am interested in an event similar to the gallery item: ${title}`
    return `https://wa.me/919966468877?text=${encodeURIComponent(text)}`
  }

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-brand-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop" 
            alt="Gallery Event Setup Backdrop" 
            className="w-full h-full object-cover opacity-20"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Our Event Gallery</h1>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base font-light">
            Browse through high-quality photos and video clips of our premium decorations, lighting, stages, and execution styles.
          </p>
        </div>
      </section>

      {/* Media Type Switcher (Photos / Videos) */}
      <section className="pt-12 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="inline-flex p-1.5 bg-gray-100/80 backdrop-blur-md rounded-2xl border border-gray-200/50">
          <button
            onClick={() => {
              setActiveTab('Photos')
              setCurrentFilter('All')
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
              activeTab === 'Photos'
                ? 'bg-brand-red text-white shadow-md'
                : 'text-gray-600 hover:text-brand-red'
            }`}
          >
            <i className="fas fa-camera text-base"></i> Photos
          </button>
          <button
            onClick={() => {
              setActiveTab('Videos')
              setCurrentFilter('All')
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
              activeTab === 'Videos'
                ? 'bg-brand-red text-white shadow-md'
                : 'text-gray-600 hover:text-brand-red'
            }`}
          >
            <i className="fas fa-video text-base"></i> Videos
          </button>
        </div>
      </section>

      {/* Interactive Category Filter Section */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide select-none border-b border-gray-200/50 justify-start md:justify-center">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setCurrentFilter(cat)} 
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-red/20 ${
                currentFilter === cat 
                  ? 'bg-brand-red text-white shadow-md' 
                  : 'bg-white text-gray-500 hover:bg-brand-red/5 hover:text-brand-red border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Visual Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {filteredItems.map((item, idx) => {
              if (item.isVideo) {
                return (
                  <VideoGridItem 
                    key={idx} 
                    item={item} 
                    onClick={() => openLightbox(idx)} 
                  />
                )
              }

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-50 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Hover Overlay Glow */}
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xl border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <i className="fas fa-expand-alt"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-5 flex items-center justify-between bg-white text-left">
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-red font-bold">{item.category}</span>
                      <h3 className="font-bold text-xs sm:text-base text-brand-dark mt-0.5 group-hover:text-brand-red transition-colors duration-300">{item.title}</h3>
                    </div>
                    <div className="text-gray-400 group-hover:text-brand-red transition-colors duration-300 shrink-0 ml-1.5">
                      <i className="fas fa-search-plus text-sm sm:text-lg"></i>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-2xl">
              <i className="fas fa-video-slash"></i>
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-1">No Video Highlights Yet</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              We haven't uploaded video highlights for {currentFilter} events yet. Please switch to the <strong>Photos</strong> tab to see our setups!
            </p>
          </div>
        )}
      </section>

      {/* Lightbox Modal Overlay */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between py-6 px-4"
        >
          {/* Top controls bar */}
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-10 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-red font-bold">{galleryItems[lightboxIndex]?.category}</span>
              <h3 className="text-white text-lg font-semibold font-serif">{galleryItems[lightboxIndex]?.title}</h3>
            </div>
            <button 
              onClick={() => setLightboxOpen(false)} 
              className="text-white hover:text-brand-red text-3xl focus:outline-none p-2 transition-colors duration-300" 
              aria-label="Close Lightbox"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Main Display Area */}
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center flex-grow py-8">
            <button 
              onClick={prevImage} 
              className="absolute left-0 md:-left-16 z-20 text-white hover:text-brand-red text-4xl p-4 focus:outline-none transition-colors duration-300"
              aria-label="Previous Item"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {galleryItems[lightboxIndex]?.isVideo ? (
              <video 
                src={galleryItems[lightboxIndex]?.img} 
                controls 
                autoPlay 
                className="max-w-full max-h-[70vh] rounded-lg shadow-2xl object-contain border border-white/5"
              />
            ) : (
              <img 
                src={galleryItems[lightboxIndex]?.img} 
                alt={galleryItems[lightboxIndex]?.title} 
                className="max-w-full max-h-[70vh] rounded-lg shadow-2xl object-contain border border-white/5"
              />
            )}

            <button 
              onClick={nextImage} 
              className="absolute right-0 md:-right-16 z-20 text-white hover:text-brand-red text-4xl p-4 focus:outline-none transition-colors duration-300"
              aria-label="Next Item"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Bottom controls / CTA */}
          <div className="text-center z-10">
            <a 
              href={getWhatsAppLink(galleryItems[lightboxIndex]?.title)} 
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
