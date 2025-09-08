import { assets } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

const Headers = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex
         flex-col items-center justify-center gap-4">
            <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt="" className="rounded-full w-32 hover:shadow-black" />
            </motion.div>
            
            <motion.h3 
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Hi ! I'm Md Ishrar <Image src={assets.hand_icon} alt="" className="w-6"/>
            </motion.h3>
            
            <motion.h1 
                className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                frontend web developer based in Delhi.
            </motion.h1>
            
            <motion.p 
                className="max-w-2xl mx-auto font-ovo"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                I am a frontend developer from Delhi, India with 
                the experience of 1 year in the Amazon Company.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4"> 
                <motion.a 
                    href="#contact" 
                    className="px-10 py-3 border border-white rounded-full
                     bg-black text-white flex items-center gap-2"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    Contact me
                    <Image src={assets.right_arrow_bold_dark} alt="" className="w-4"/>
                </motion.a>
                
                <motion.a 
                    href="/sample-resume.pdf" 
                    className="px-10 py-3 rounded-full border border-gray-500 
                    flex items-center gap-2"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    My Resume
                    <Image src={assets.download_icon} alt="" className="w-4"/>
                </motion.a>
            </div>
        </div>
    )
}
