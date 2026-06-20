import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-dark to-[#04060A] text-gray-400 pt-20 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-5 text-left">
          <a href="/index.html" className="flex items-center group w-max focus:outline-none" aria-label="Rockers Entertainers Home">
            <img src="/logo.png" alt="Rockers Entertainers Logo" className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
          </a>
          <p className="text-sm text-gray-500 leading-relaxed font-light">
            Turning Celebrations Into Unforgettable Experiences. Providing high-end execution, styling, and decorations since 2014.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-dark border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400" aria-label="Facebook"><i className="fab fa-facebook-f text-sm"></i></a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-dark border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400" aria-label="Instagram"><i className="fab fa-instagram text-sm"></i></a>
            <a href="https://wa.me/919966468877" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-green-500 hover:text-white border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400" aria-label="WhatsApp"><i className="fab fa-whatsapp text-sm"></i></a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-dark border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400" aria-label="YouTube"><i className="fab fa-youtube text-sm"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-left md:pl-8">
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6 font-serif relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-brand-gold">Quick Links</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-light">
            <li><a href="/index.html" className="hover:text-brand-gold transition-colors duration-300">Home</a></li>
            <li><a href="/about.html" className="hover:text-brand-gold transition-colors duration-300">About Company</a></li>
            <li><a href="/services.html" className="hover:text-brand-gold transition-colors duration-300">Our Services</a></li>
            <li><a href="/gallery.html" className="hover:text-brand-gold transition-colors duration-300">Photo & Video Gallery</a></li>
            <li><a href="/contact.html" className="hover:text-brand-gold transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="text-left">
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6 font-serif relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-brand-gold">Our Services</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-light">
            <li><a href="/services.html" className="hover:text-brand-gold transition-colors duration-300 text-left">Wedding Planning</a></li>
            <li><a href="/services.html" className="hover:text-brand-gold transition-colors duration-300 text-left">Birthday Decorations</a></li>
            <li><a href="/services.html" className="hover:text-brand-gold transition-colors duration-300 text-left">Sangeet Events</a></li>
            <li><a href="/services.html" className="hover:text-brand-gold transition-colors duration-300 text-left">Corporate & Institutional Events</a></li>
            <li><a href="/services.html" className="hover:text-brand-gold transition-colors duration-300 text-left">Audio Launch Planning</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="text-left">
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6 font-serif relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-brand-gold">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <i className="fas fa-phone-alt text-brand-gold mt-1.5 text-xs"></i>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Call Support</p>
                <a href="tel:9966468877" className="hover:text-brand-gold transition-colors duration-300 text-white font-medium">+91 9966468877</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fab fa-whatsapp text-green-500 mt-1.5 text-sm"></i>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">WhatsApp Chat</p>
                <a href="https://wa.me/919966468877" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors duration-300 text-white font-medium">+91 9966468877</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-envelope text-brand-gold mt-1.5 text-xs"></i>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Email Address</p>
                <a href="mailto:rockers.events11@gmail.com" className="hover:text-brand-gold transition-colors duration-300 text-white font-medium">rockers.events11@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-8 text-center text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4 font-light">
        <p>&copy; 2026 Rockers Entertainers. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
          <span>&bull;</span>
          <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
