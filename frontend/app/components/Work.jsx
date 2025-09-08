import { assets, workData } from "@/assets/assets"; 
import Image from "next/image";
import { motion } from "framer-motion"

const Work = () => {
  return (
    <motion.div 
      id="work" 
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h3 
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        My portfolio
      </motion.h3>

      <motion.h1 
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My Recent Works 
      </motion.h1>
      
      <motion.p 
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Welcome to my ML-web development portfolio! Explore my collection of projects
        showcasing my expertise in Machine Learning and Backend Development.
      </motion.p>

      <motion.div 
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-10 gap-5"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute -bottom-20 left-1/2 -translate-x-1/2 px-5 py-3 
             flex items-center justify-between duration-500 group-hover:bottom-5">
              <div>
                <h2 className="text-lg font-Ovo">{project.title}</h2>
                <p className="text-sm font-Ovo">{project.description}</p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex 
                items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.a 
        href="#" 
        className="w-max flex items-center justify-center gap-2 text-gray-700
         border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4" />
      </motion.a>
    </motion.div>
  );
};
