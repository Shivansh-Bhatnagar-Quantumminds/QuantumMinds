import { img } from 'framer-motion/client'
import React from 'react'

const data = [
  {
    name:'Rajesh Mishra', 
    role:'Home Care Pest Control Services', 
    quote:'Quantum Minds team completely changed the way to manage our service. Their team built an easy-to-use application that makes our flow simple.',
    image: 'https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg',
    alte: 'Rajesh Mishra'
  },
  {
    name:'Priyanshu Kumar', 
    role:'Mishra Accounting Services', 
    quote:'The Quantum Minds team delivered exactly what we needed — a secure, cloud-based accounting solution that saves us time and enhances accuracy. ',
    image: 'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg',
    alte: 'Priyanshu Kumar'
  },
  {
    name:'Sarika Khurrana', 
    role:'Genus Academy', 
    quote:'Working with Quantum Minds was an pleasure. They designed a online platform for us that’s fast, and easy for both students and staff to use.',
    image: 'https://images.unsplash.com/photo-1660196817411-e89aa03f92fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alte: 'Sarika Khurrana'
  },
  {
    name:'Sampurnanand', 
    role:'Elegance Enterprises', 
    quote:'QuantumMinds Technologies helped us digitize our business processes and strengthen our online presence. They fulfill their commitments on time.',
    image: 'https://images.unsplash.com/photo-1694871420680-88c06ab9cc49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alte: 'Sampurnanand'
  }
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="section">
      <h2 className="text-2xl font-semibold text-[#323d58] capitalize text-center">What clients say</h2>
      <div className="mt-6 px-5 grid sm:grid-cols-2 gap-4 lg:px-20 py-5">
        {data.map((t,i)=> (
          <blockquote key={i} className="p-4 bg-[#f3fce0] border border-primary/30 rounded flex flex-col md:flex-row lg:flex-row gap-4 items-center shadow-sm">
            <img src={t.image} alt={t.alte} className='w-[20vh] h-[20vh] rounded-full object-cover lg:rounded-none border border-2 p-1 hover:scale-125' />
            <div>
              <p className="text-gray-700 text-justify">"{t.quote}"</p>
              <footer className="mt-3 text-sm text-gray-600 font-semibold">— {t.name}, {t.role}</footer>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}