import React, { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50 bg-[#a7e41d]">
      <div className="text-2xl font-bold text-[#2f3982]">Quantum Minds</div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block h-1 w-6 bg-[#323d58] rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-1 w-6 bg-[#323d58] rounded my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block h-1 w-6 bg-[#323d58] rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      <ul className={`md:flex gap-4 font-medium text-[#2f3982] transition-all duration-300
        ${open ? 'absolute top-16 left-0 w-full bg-white/95 flex flex-col items-center py-6 shadow-lg' : 'hidden'}
        md:static md:w-auto md:bg-transparent md:shadow-none md:flex-row md:items-center
      `}
        style={{ minWidth: open ? '200px' : undefined }}
        onClick={() => setOpen(false)}
      >
        <li><a href="#home" className="block py-2 px-4 hover:text-indigo-500">Home</a></li>
        <li><a href="#vision" className="block py-2 px-4 hover:text-indigo-500">Vision</a></li>
        <li><a href="#projects" className="block py-2 px-4 hover:text-indigo-500">Projects</a></li>
        <li><a href="#testimonials" className="block py-2 px-4 hover:text-indigo-500">Testimonials</a></li>
        <li><a href="#about" className="block py-2 px-4 hover:text-indigo-500">About</a></li>
        <li><a href="#contact" className="block py-2 px-4 hover:text-indigo-500">Contact</a></li>
      </ul>
    </nav>
  );
}