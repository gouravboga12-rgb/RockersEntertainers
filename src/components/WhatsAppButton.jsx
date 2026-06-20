import React from 'react'

export default function WhatsAppButton() {
  const defaultMsg = "Hello, I would like to know more about your event services."
  const whatsappUrl = `https://wa.me/919966468877?text=${encodeURIComponent(defaultMsg)}`

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl whatsapp-btn-pulse transition-all duration-300 group"
      title="Chat with us on WhatsApp"
      id="whatsapp-floating-button"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
      <span className="absolute right-16 bg-brand-dark text-white text-sm font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 whitespace-nowrap shadow-lg">
        Chat with us!
      </span>
    </a>
  )
}
