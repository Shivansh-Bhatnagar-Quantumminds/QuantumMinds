import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const sampleProjects = [
  {
    title: 'InsightAI',
    desc: 'A data platform for automated insight extraction from customer data.',
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  },
  {
    title: 'FlowPro',
    desc: 'Workflow automation for service teams, reducing manual tasks by 60%.',
    img: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg'
  },
  {
    title: 'MarketPulse',
    desc: 'Real-time dashboard for market signals used by traders and analysts.',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg'
  },
  {
    title: 'MarketPulse',
    desc: 'Real-time dashboard for market signals used by traders and analysts.',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg'
  },
  {
    title: 'MarketPulse',
    desc: 'Real-time dashboard for market signals used by traders and analysts.',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg'
  },
  
]

export default function Projects() {
  const sliderRef = useRef(null)

  // Scroll slider left/right
  const scroll = (dir) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: dir * 320,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="projects" className="section px-4 py-10">
      <h2 className="text-2xl font-semibold text-[#323d58] mb-6 text-center">Projects</h2>
      <div className="relative lg:px-20">
        {/* Arrow Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hidden md:block"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          <svg width="24" height="24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#323d58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hidden md:block"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <svg width="24" height="24" fill="none"><path d="M9 6l6 6-6 6" stroke="#323d58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Slider */}
        <motion.div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-0 py-7 lg:overflow-x-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {sampleProjects.map((p, idx) => (
            <motion.article
              key={p.title}
              whileHover={{ y: -6, scale: 1.03 }}
              className="min-w-[280px] max-w-xs bg-white border border-primary/30 rounded-xl shadow-lg snap-center flex-shrink-0 flex flex-col items-center transition"
            >
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-t-xl" />
              <div className="p-4 w-full flex flex-col items-center">
                <h3 className="font-semibold text-[#323d58] text-lg mb-2 text-center">{p.title}</h3>
                <p className="text-sm text-gray-600 text-center">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}