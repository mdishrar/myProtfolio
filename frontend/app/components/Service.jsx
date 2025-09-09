import React from "react"
import Image from "next/image"
import { assets, serviceData } from "@/assets/assets"
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 sm:px-6 lg:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-gray-600 dark:text-white/80"
      >
        What I offer
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl mb-5 font-Ovo dark:text-white"
      >
        My Services
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 font-Ovo text-sm sm:text-base text-gray-600 dark:text-white/80 px-4"
      >
        I am a full-stack developer from Delhi, India with 1 year of experience
        in the company.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            className="border border-gray-400 rounded-lg px-6 sm:px-8 py-8 sm:py-12 hover:shadow-black cursor-pointer hover:-translate-y-2 duration-500 dark:border-white/50 dark:hover:shadow-white/20 dark:hover:bg-darkHover/30 group"
          >
            <Image 
              src={icon} 
              alt={title}
              className="w-8 h-8 sm:w-10 sm:h-10 mb-4"
            />
            
            <h3 className="text-base sm:text-lg my-3 sm:my-4 text-gray-700 dark:text-white font-semibold">
              {title}
            </h3>
            
            <p className="text-sm leading-5 text-gray-600 dark:text-white/80 mb-8 sm:mb-12">
              {description}
            </p>
            
            <a 
              href={link} 
              className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all duration-300 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Read more 
              <Image 
                src={assets.right_arrow} 
                alt="" 
                className="w-4 h-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
