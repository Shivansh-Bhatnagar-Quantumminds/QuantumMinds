import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 border-t bg-[#a7e41d] text-center">
      <div className="max-w-6xl mx-auto px-4 text-sm text-[#323d58]">© {new Date().getFullYear()} Quantum Minds. All rights reserved.</div>
    </footer>
  )
}
