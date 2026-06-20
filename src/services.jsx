import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Services from './pages/Services'
import './index.css'

function ServicesPage() {
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
      <Navbar />
      <main className="flex-grow pt-20">
        <Services />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicesPage />
  </React.StrictMode>,
)
