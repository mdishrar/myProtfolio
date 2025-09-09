import { assets, workData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

const Work = () => {
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
        My portfolio
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl mb-5 font-Ovo dark:text-white"
      >
        My Recent Works
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 font-Ovo text-sm sm:text-base text-gray-600 dark:text-white/80 px-4"
      >
        Welcome to my ML-web development portfolio! Explore my collection of projects
        showcasing my expertise in Machine Learning and Backend Development.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 my-10 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            className="aspect-square bg-white rounded-lg relative cursor-pointer group hover:scale-105 transition-transform duration-500 hover:shadow-lg dark:hover:shadow-white/20"
          >
            <Image 
              src={project.bgImage} 
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
            
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-white bg-opacity-90 flex flex-col items-center justify-center px-4 py-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                {project.title}
              </h2>
              
              <p className="text-sm text-gray-700 mb-5 leading-5">
                {project.description}
              </p>
              
              <div className="flex items-center justify-center w-8 sm:w-9 aspect-square bg-black text-white rounded-full group-hover:bg-lime-300 transition-colors duration-300">
                <Image 
                  src={assets.send_icon} 
                  alt="View project" 
                  className="w-4 sm:w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.a 
        href="#"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-b border-gray-700 pb-1 mx-auto mt-10 sm:mt-20 hover:gap-4 transition-all duration-300 dark:text-white dark:border-white text-sm sm:text-base"
      >
        Show more
        <Image 
          src={assets.right_arrow_bold} 
          alt="" 
          className="w-4 h-4"
        />
      </motion.a>
    </motion.div>
  )
}

export default Work
