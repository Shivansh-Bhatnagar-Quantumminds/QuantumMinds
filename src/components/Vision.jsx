import React from 'react'
import { motion } from 'framer-motion'

export default function Vision(){
  return (
    <section id="vision" className="section text-center px-20 h-[50vh] flex items-center bg-[#f0f4f8]">
      <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <h2 className="text-2xl font-semibold text-[#323d58] pb-2">Our Vision</h2>
        <hr className='w-1/3 mx-auto border-1 border-[#323d58]' />
        <p className="mt-3 text-[#2f3982]">At Quantum Minds, we believe technology should make life simpler. We focus on building intelligent software that reduces manual work, improves decision-making, and scales with our clients' growth.</p>
      </motion.div>
    </section>
  )
}