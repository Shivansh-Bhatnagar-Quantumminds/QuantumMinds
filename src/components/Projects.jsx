import React from 'react'
import { motion } from 'framer-motion'

const sampleProjects = [
  {title:'InsightAI', desc:'A data platform for automated insight extraction from customer data.'},
  {title:'FlowPro', desc:'Workflow automation for service teams, reducing manual tasks by 60%.'},
  {title:'MarketPulse', desc:'Real-time dashboard for market signals used by traders and analysts.'}
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2 className="text-2xl font-semibold text-[#323d58]">Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleProjects.map(p=> (
          <motion.article key={p.title} whileHover={{y:-6}} className="p-4 bg-white border border-primary/30 rounded shadow-sm">
            <h3 className="font-medium text-primary-dark">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}