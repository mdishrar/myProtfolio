import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services" 
            className="w-full px-[12%] py-10 scroll-mt-20"
        >
            <motion.h3 
                className="text-center mb-2 text-lg font-ovo"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                What I offer
            </motion.h3>
            
            <motion.h1 
                className="text-center text-5xl font-ovo"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                My Services
            </motion.h1>
            
            <motion.p 
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                I am a full-stack developer from Delhi, India with 1 year of experience
                in the company.
            </motion.p>
            
            <motion.div 
                className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="border border-gray-400 rounded-lg px-8 py-12 
                         hover:shadow-black cursor-pointer hover:bg-lightHover 
                         hover:-translate-y-1 duration-500"
                    >
                        <Image src={icon} alt="" className='w-10'/>
                        <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                        <p className="text-sm text-gray-600 leading-5">{description}</p>
                        <a href={link} className="flex items-center gap-2 text-sm mt-5">
                            Read more <Image src={assets.right_arrow} alt="" className="w-4" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
