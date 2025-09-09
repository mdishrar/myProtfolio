import { assets } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

const Headers = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-[12%] h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image 
          src={assets.profile_img} 
          alt="Profile" 
          className="rounded-3xl w-32 h-32 sm:w-48 sm:h-48 lg:w-auto lg:h-auto max-w-xs sm:max-w-sm object-cover"
        />
      </motion.div>
      
      <div className="text-center max-w-3xl mx-auto">
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo"
        >
          Hi! I'm Md Ishrar
          <Image 
            src={assets.hand_icon} 
            alt="Hand wave" 
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </motion.h3>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Ovo mb-4 sm:mb-6 leading-tight"
        >
          Full-stack developer <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            from India.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-6 sm:mb-10 font-Ovo text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-white/80 px-4"
        >
          I am a Full-Stack developer from Delhi, India with 1 year of experience in multiple companies.
        </motion.p>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base"
        >
          <a 
            href="#contact"
            className="px-6 py-3 sm:px-10 sm:py-3 border border-white rounded-full bg-gradient-to-r from-pink-300 to-blue-300 text-white flex items-center gap-2 dark:border-transparent hover:scale-105 transition-transform duration-300 w-full sm:w-auto justify-center"
          >
            Contact me
            <Image 
              src={assets.right_arrow_white} 
              alt="" 
              className="w-4 h-4"
            />
          </a>
          
          <a 
            href="/resume.pdf"
            download
            className="px-6 py-3 sm:px-10 sm:py-3 border border-gray-500 rounded-full bg-white flex items-center gap-2 dark:text-black hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            My resume
            <Image 
              src={assets.download_icon} 
              alt="" 
              className="w-4 h-4"
            />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Headers
