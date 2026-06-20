import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
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

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-brand-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" 
            alt="Contact Page Backdrop" 
            className="w-full h-full object-cover opacity-25"
            style={{ filter: 'brightness(0.4) contrast(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-gold-gradient">Contact Our Planners</h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm font-light tracking-wider uppercase">
            Let's Make Your Event Extraordinary. Get in touch with us for booking dates, package costs, and theme consulting.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-radial-glow overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left" data-aos="fade-right">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-3 block">Get In Touch</span>
              <h2 className="text-2xl sm:text-4xl font-bold mb-6 font-serif text-brand-dark leading-tight">We'd Love To Hear From You</h2>
              <div className="w-12 h-[2px] bg-brand-gold mb-8"></div>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">
                Have questions about decorations, sound checking setup, or calendar availability? Call us directly, send an email, or submit the form to connect instantly on WhatsApp.
              </p>
              
              <ul className="flex flex-col gap-6">
                <li className="bg-[#0d1220] rounded-3xl p-5 border border-white/5 flex items-start gap-4 hover:border-brand-gold/40 transition duration-500 shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold text-lg shrink-0 border border-brand-gold/15">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold-light font-serif">Phone Call Support</h4>
                    <a href="tel:9966468877" className="text-base text-gray-300 hover:text-brand-gold font-medium transition duration-300 mt-1 block">+91 9966468877</a>
                    <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wider font-semibold">Mon - Sun, 9:00 AM - 9:00 PM</p>
                  </div>
                </li>
                <li className="bg-[#0d1220] rounded-3xl p-5 border border-white/5 flex items-start gap-4 hover:border-brand-gold/40 transition duration-500 shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 text-xl shrink-0 border border-green-500/15">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-green-400 font-serif">WhatsApp Direct Chat</h4>
                    <a href="https://wa.me/919966468877?text=Hello%20Rockers%20Entertainers%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-base text-gray-300 hover:text-brand-gold font-medium transition duration-300 mt-1 block">+91 9966468877</a>
                    <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wider font-semibold">Response within 15 minutes</p>
                  </div>
                </li>
                <li className="bg-[#0d1220] rounded-3xl p-5 border border-white/5 flex items-start gap-4 hover:border-brand-gold/40 transition duration-500 shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold text-lg shrink-0 border border-brand-gold/15">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold-light font-serif">Email Inquiries</h4>
                    <a href="mailto:rockers.events11@gmail.com" className="text-base text-gray-300 hover:text-brand-gold font-medium transition duration-300 mt-1 block">rockers.events11@gmail.com</a>
                    <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wider font-semibold">Corporate quotes and requests</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 text-left" data-aos="fade-left">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100/80">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand-dark mb-2">Send Us A Message</h3>
              <p className="text-xs text-gray-400 mb-8">All fields are required. Submit will open WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-form">
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
                      className="w-full pl-11 pr-4 py-3.5 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        className="w-full pl-11 pr-4 py-3.5 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
                      />
                    </div>
                  </div>

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
                        className="w-full pl-11 pr-4 py-3.5 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
                      />
                    </div>
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
                      className="w-full pl-11 pr-4 py-3.5 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm appearance-none transition duration-300 outline-none cursor-pointer"
                    >
                      <option value="" disabled>Select an Event Category</option>
                      <option value="Wedding Planning">Wedding Planning</option>
                      <option value="Birthday Decorations">Birthday Decorations</option>
                      <option value="Sangeet Events">Sangeet Events</option>
                      <option value="House Warming Decorations">House Warming Decorations</option>
                      <option value="Corporate/School Events">Corporate, School & College Events</option>
                      <option value="Audio Launch Events">Audio Launch Events</option>
                      <option value="Fashion & Dance Events">Fashion Shows & Dance Events</option>
                      <option value="Other Celebration">Other Celebration Inquiry</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 pointer-events-none"><i className="fas fa-chevron-down text-xs"></i></span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Your Message / Requirements</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your event date, visual theme, expected guests, and decoration needs..." 
                    className="w-full px-4 py-3.5 bg-brand-gray border border-gray-200/80 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-white rounded-xl text-sm transition duration-300 outline-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative mt-4 w-full py-4 bg-gradient-to-r from-brand-red to-brand-darkred hover:from-brand-gold hover:to-brand-gold-dark text-white font-bold rounded-xl shadow-lg transition-all duration-500 text-xs uppercase tracking-widest flex items-center justify-center gap-2 focus:outline-none disabled:opacity-50 overflow-hidden group/submit cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-circle-notch animate-spin mr-2"></i> Connecting...
                      </>
                    ) : (
                      <>
                        <i className="fab fa-whatsapp text-base"></i> Send Inquiry to WhatsApp
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold-dark opacity-0 group-hover/submit:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
