import React from 'react'
import { motion } from 'framer-motion'

export default function Vision(){
  return (
    <section id="vision" className="section text-center px-20 h-[70vh] relative overflow-hidden">
      <img src="https://images.pexels.com/photos/5989926/pexels-photo-5989926.jpeg" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
      <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center p-20  bg-black/50'>
          <h2 className="text-2xl font-semibold text-white pb-2">Our Vision</h2>
          <hr className='w-1/3 mx-auto border-1 border-white' />
          <p className="mt-3 text-white">At Quantum Minds, we believe technology should make life simpler. We focus on building intelligent software that reduces manual work, improves decision-making, and scales with our clients' growth.</p>
        </div>
      </motion.div>
    </section>
  )
}