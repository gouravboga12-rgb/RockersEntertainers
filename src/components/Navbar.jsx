import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuItems = ['Home', 'About', 'Services', 'Gallery', 'Contact']

  const menuLinks = {
    'Home': '/index.html',
    'About': '/about.html',
    'Services': '/services.html',
    'Gallery': '/gallery.html',
    'Contact': '/contact.html'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Automatically determine the active item based on the browser's URL path
  const getActiveItem = () => {
    if (typeof window === 'undefined') return 'Home'
    const path = window.location.pathname
    if (path.includes('about.html') || path.includes('/about')) return 'About'
    if (path.includes('services.html') || path.includes('/services')) return 'Services'
    if (path.includes('gallery.html') || path.includes('/gallery')) return 'Gallery'
    if (path.includes('contact.html') || path.includes('/contact')) return 'Contact'
    return 'Home'
  }

  const activeItem = getActiveItem()

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 shadow-xl' 
          : 'py-5 bg-brand-dark/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="/index.html" 
            className="flex items-center group focus:outline-none" 
            aria-label="Rockers Entertainers Home"
          >
            <img 
              src="/logo.png" 
              alt="Rockers Entertainers Logo" 
              className="h-16 sm:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={menuLinks[item]}
                className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 relative py-1.5 focus:outline-none cursor-pointer ${
                  activeItem === item 
                    ? 'text-brand-gold' 
                    : 'text-gray-300 hover:text-brand-gold-light'
                }`}
              >
                {item}
                {/* Active Indicator Underline */}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full transition-transform duration-300 origin-left ${
                    activeItem === item ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="/contact.html"
              className="relative inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-brand-red to-brand-darkred hover:from-brand-gold hover:to-brand-gold-dark text-white font-bold rounded-full shadow-lg hover:shadow-brand-red/20 transform hover:-translate-y-0.5 transition-all duration-300 text-xs uppercase tracking-wider focus:outline-none overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Book Your Event</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-300 hover:text-brand-gold focus:outline-none rounded-lg p-2 transition-colors duration-300 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <i className={`fas text-xl ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl shadow-2xl py-6 px-6 border-t border-white/5"
        >
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={menuLinks[item]}
                className={`text-left text-xs uppercase tracking-widest font-semibold py-3 border-b border-white/5 transition-colors duration-300 focus:outline-none ${
                  activeItem === item ? 'text-brand-gold' : 'text-gray-300 hover:text-brand-gold'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href="/contact.html"
              className="mt-4 inline-flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-brand-red to-brand-darkred text-white text-xs uppercase tracking-widest font-bold rounded-full shadow-lg focus:outline-none text-center"
            >
              Book Your Event
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
