import React from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image 
          src={assets.logo} 
          alt="Logo" 
          className="w-24 sm:w-36 mx-auto mb-2 dark:hidden"
        />
        <Image 
          src={assets.logo_dark} 
          alt="Logo" 
          className="w-24 sm:w-36 mx-auto mb-2 hidden dark:block"
        />
        
        <div className="w-full sm:w-max flex items-center justify-center gap-4 sm:gap-6 mx-auto">
          <Image 
            src={assets.mail_icon} 
            alt="Email" 
            className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          <Image 
            src={assets.linkedin_icon} 
            alt="LinkedIn" 
            className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          <Image 
            src={assets.github_icon} 
            alt="GitHub" 
            className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-400 my-6 sm:my-8 dark:bg-white/20"></div>
      
      <p className="py-5 text-center text-xs sm:text-sm text-gray-500 dark:text-white/60">
        © 2025 Md Ishrar. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
