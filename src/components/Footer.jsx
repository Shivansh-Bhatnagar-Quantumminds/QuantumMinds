import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 bg-white border-t bg-[#E0E1DD] text-center">
      <div className="max-w-6xl mx-auto px-4 text-sm text-[#323d58]">© {new Date().getFullYear()} Quantum Minds. All rights reserved.</div>
    </footer>
  )
}
