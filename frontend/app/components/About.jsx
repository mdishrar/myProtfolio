import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { assets, infoList, toolsData } from "@/assets/assets"

const About = () => {
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
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-gray-600"
      >
        Introduction
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-20 font-Ovo"
      >
        About me
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center"
      >
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-64 mx-auto">
          <Image 
            src={assets.user_image} 
            alt="User" 
            className="w-full h-auto rounded-3xl max-w-none"
          />
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 font-Ovo text-sm sm:text-base leading-relaxed">
            I am an experienced Full-Stack developer with 1 year of professional
            expertise in the field. Throughout my career, I had the privilege of
            collaborating with prestigious organizations, contributing to their success.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 lg:mb-12"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="border border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/50 dark:hover:shadow-white/20 dark:hover:bg-darkHover/50"
              >
                <Image 
                  src={icon} 
                  alt={title} 
                  className="w-6 h-6 sm:w-7 sm:h-7 mt-3 dark:hidden"
                />
                <Image 
                  src={iconDark} 
                  alt={title} 
                  className="w-6 h-6 sm:w-7 sm:h-7 mt-3 hidden dark:block"
                />
                <h3 className="my-3 sm:my-4 font-semibold text-gray-700 dark:text-white text-sm sm:text-base">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80 leading-5">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo text-lg sm:text-xl dark:text-white/80"
          >
            Tools I Have
          </motion.h4>
          
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center lg:justify-start"
          >
            {toolsData.map((tool, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.05, duration: 0.3 }}
                className="border border-gray-400 rounded-lg py-2 px-3 sm:py-3 sm:px-5 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/50 dark:hover:shadow-white/20 text-xs sm:text-sm"
              >
                {tool}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
