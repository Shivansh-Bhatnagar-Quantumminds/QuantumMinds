import React from 'react'
import { motion } from 'framer-motion'
import homeImg from '../assets/home_img.webp'

export default function Home(){
  return (
    <section id="home" className="section flex items-center min-h-[90vh] bg-[#a7e41d] py-10 px-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2f3982]">Quantum Minds</h1>
          <p className='font-semibold text-2xl mt-1 text-[#2f3982]'>Global Innovation with Quantum Precision</p>
          <p className="mt-2 text-lg text-[#323d58]">We build reliable web and AI solutions that help startups and businesses turn complex problems into simple experiences.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 bg-[#2f3982] text-white rounded shadow-sm hover:scale-105">See Projects</a>
            <a href="#contact" className="px-4 py-2 border border-[#2f3982] text-[#2f3982] rounded hover:scale-105">Contact Us</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6}}>
          <div className="rounded-lg">
            <img src={homeImg} alt="Pro_Women"  className=''/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}