import React from 'react'
import { Link } from 'react-router-dom'
export default function About(){
  return (
    <section id="about" className="section">
      <h2 className="text-2xl font-semibold text-primary">About Quantum Minds</h2>
      <p className="mt-3 text-gray-700">We are a small team of engineers and designers who care about building useful products. We help companies from prototype to production with pragmatic engineering and strong design sense.</p>
      <ul className="mt-4 text-sm text-gray-700 space-y-1">
        <li><strong>Founded:</strong> 2024</li>
        <li><strong>Location:</strong> Remote-first</li>
        <li><strong>Contact:</strong><a href='mailto: info.quantumminds@gmail.com' className='text-primary'> info.quantumminds@gmail.com</a></li>
      </ul>
    </section>
  )
}