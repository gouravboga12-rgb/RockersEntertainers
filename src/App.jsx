import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Layouts
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Pages
import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray text-brand-dark">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Dynamic View rendering - Simplified to Home page only for index.html */}
      <main className="flex-grow pt-20">
        <Home />
      </main>

      {/* Floating pulsing WhatsApp Support */}
      <WhatsAppButton />

      {/* Structured Footer */}
      <Footer />
    </div>
  )
}
