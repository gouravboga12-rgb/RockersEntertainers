import React from 'react'

export const teamMembers = [
  {
    name: 'Ganesh Mailavaram',
    role: 'Founder',
    company: 'Rockers Entertainers',
    badge: 'Founder',
    qualification: '',
    experience: 'Founder & Visionary Lead',
    image: '/team/ganesh-mailavaram.png',
    bio: 'Visionary founder of Rockers Entertainers, leading creative innovation, stage aesthetics, and grand celebration production to transform every event into an unforgettable reality.',
    highlights: [
      { icon: 'fa-crown', text: 'Founder, Rockers Entertainers' },
      { icon: 'fa-award', text: 'Event Direction & Creative Lead' }
    ]
  },
  {
    name: 'Nikhil Chowdary',
    role: 'Managing Marketing Head',
    company: 'Rockers Entertainers',
    badge: 'Marketing Head',
    qualification: 'BBM',
    experience: '10 Years in Event Companies',
    image: '/team/nikhil-chowdary.png',
    bio: 'BBM graduate bringing 10 years of extensive experience as Managing Marketing Head in leading event management companies, driving client partnerships, brand elevation, and strategic campaign execution.',
    highlights: [
      { icon: 'fa-graduation-cap', text: 'BBM' },
      { icon: 'fa-briefcase', text: '10 Years as Managing Marketing Head' }
    ]
  }
]

export default function LeadershipTeam({ isDark = false, className = '' }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2 block">
          Key People Behind Our Success
        </span>
        <h2 className={`text-3xl sm:text-4xl font-bold font-serif mb-4 ${isDark ? 'text-white' : 'text-brand-dark'}`}>
          Meet Our Leadership Team
        </h2>
        <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-4"></div>
        <p className={`max-w-xl mx-auto text-xs sm:text-sm font-light ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          The visionary leadership and experienced management driving innovation, flawless execution, and memorable event experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            data-aos="fade-up"
            data-aos-delay={idx * 150 + 100}
            className={`rounded-3xl overflow-hidden border transition-all duration-500 group shadow-xl hover:shadow-2xl flex flex-col ${
              isDark
                ? 'bg-brand-darker/90 border-brand-gold/15 hover:border-brand-gold/40'
                : 'bg-white border-gray-100 hover:border-brand-gold/40'
            }`}
          >
            {/* Member Image with Badge */}
            <div className="relative aspect-[4/4.5] sm:aspect-[4/5] w-full overflow-hidden bg-brand-dark/10">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none"></div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-dark/85 backdrop-blur-md border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase shadow-lg">
                  <i className="fas fa-star text-[9px]"></i> {member.badge}
                </span>
              </div>

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide drop-shadow-md">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold drop-shadow-sm">
                  {member.role} {member.qualification ? `• ${member.qualification}` : ''}
                </p>
              </div>
            </div>

            {/* Member Info */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between text-left">
              <div>
                <p className={`text-xs sm:text-sm leading-relaxed font-light mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {member.bio}
                </p>
              </div>

              {/* Highlights pills */}
              <div className="pt-4 border-t border-brand-gold/10 flex flex-wrap gap-2">
                {member.highlights.map((h, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium border ${
                      isDark
                        ? 'bg-brand-dark/60 text-gray-300 border-white/5'
                        : 'bg-brand-gray/60 text-brand-dark border-gray-200/60'
                    }`}
                  >
                    <i className={`fas ${h.icon} text-brand-gold text-xs`}></i>
                    {h.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

