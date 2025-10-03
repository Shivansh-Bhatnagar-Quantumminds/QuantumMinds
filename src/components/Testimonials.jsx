import React from 'react'

const data = [
  {name:'Anita R.', role:'Head of Product', quote:'Quantum Minds delivered an intuitive dashboard and the team was very responsive.'},
  {name:'Rahul K.', role:'CTO', quote:'Great engineering discipline and clean code — deployment to production was smooth.'}
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="section">
      <h2 className="text-2xl font-semibold text-primary capitalize">What clients say</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {data.map((t,i)=> (
          <blockquote key={i} className="p-4 bg-white border border-primary/30 rounded">
            <p className="text-gray-700">"{t.quote}"</p>
            <footer className="mt-3 text-sm text-gray-600">— {t.name}, {t.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}