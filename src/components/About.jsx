import React from 'react'

const team = [
  {
    name: 'Ayush Mishra',
    role: 'Founder',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sagar Pandey',
    role: 'CEO',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Sharad Gangwar',
    role: 'CFO',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    name: 'Abhinay Singh',
    role: 'Technical Project Advisor',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'Shivansh Bhatnagar',
    role: 'CTO',
    img: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    name: 'Shivam Pandey',
    role: 'VP - IT Delivery Services',
    img: 'https://randomuser.me/api/portraits/men/37.jpg',
  }
]

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="text-2xl font-semibold text-[#323d58] text-center">About Us</h2>
      <p className='text-center text-xl mt-2 text-gray-700 px-5 lg:px-0'>Welcome to QuantumMinds Technologies — where Global Innovation meets Quantum Precision. </p>
      <p className="mt-1 text-gray-700 text-center px-12">We are a small team of engineers and designers who care about building IT solutions that empower businesses worldwide. Our approach is grounded in innovation, precision, and trust, ensuring every solution perfectly matches with our client goals.</p>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 justify-items-center">
        {team.map((member, idx) => (
          <div key={member.name} className="relative group w-48 h-56 flex flex-col items-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-48 h-48 object-cover rounded-xl shadow-lg transition-opacity duration-300 group-hover:opacity-40"
            />
            {/* Overlay on hover */}
            <div className="absolute top-0 left-0 w-48 h-48 flex flex-col items-center justify-center rounded-xl bg-black/70 bg-opacity/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-semibold text-white text-lg">{member.name}</span>
              <span className="text-sm text-gray-300 mt-1">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}