import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Contact from './pages/Contact'
import './index.css'

function ContactPage() {
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
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactPage />
  </React.StrictMode>,
)
