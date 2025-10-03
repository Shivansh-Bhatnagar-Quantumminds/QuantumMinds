import React from 'react'
import { motion } from 'framer-motion'
import webdevelopment from '../assets/webdevelopment.png'
import appdevelopment from '../assets/appdevelopment.png'
import digitalmarketting from '../assets/digitalmarketting.png'
import graphicdesign from '../assets/graphicdesign.png'
import contentwriting from '../assets/contentwriting.png'
import socialmedia from '../assets/socialmedia.png'

const Services = () => {
    const data = [
        {
            icon: webdevelopment,
            title: "Website Development",
            desc: "Creating responsive and user-friendly websites tailored to your business needs."
        },
        {
            icon: appdevelopment,
            title: "App Development",
            desc: "Building mobile applications for iOS and Android platforms with seamless performance."
        },
        {
            icon: digitalmarketting,
            title: "Digital Marketing",
            desc: "Enhancing your online presence through targeted marketing strategies."
        },
        {
            icon: graphicdesign,
            title: "Graphic Design",
            desc: "Designing visually appealing graphics for branding and marketing purposes."
        },
        {
            icon: contentwriting,
            title: "Content Writing",
            desc: "Crafting engaging and relevant content to attract and retain your audience."
        },
        {
            icon: socialmedia,
            title: "Social Media Management",
            desc: "Managing and optimizing your social media profiles for effective engagement."
        }
    ]
  return (
    <div className='min-h-screen w-full px-4 sm:px-6 lg:px-10 py-10'>
      <h1 className='text-xl sm:text-2xl text-[#323d58] text-center font-semibold pt-4 sm:pt-10'>What We Do</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-6 lg:p-10 mt-4 sm:mt-6'>
        {data.map((service, index) => (
            <motion.article whileHover={{y:-6}} key={index} className='flex flex-col  p-4 sm:p-6 bg-white border border-primary/30 rounded shadow-sm'>
                <img src={service.icon} alt={service.title} className="h-12 w-12 mb-5" />
                <h3 className='font-medium text-[#323d58] text-base sm:text-lg'>{service.title}</h3>
                <p className='text-sm sm:text-base text-gray-600 mt-2 text-justify'>{service.desc}</p>
            </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Services