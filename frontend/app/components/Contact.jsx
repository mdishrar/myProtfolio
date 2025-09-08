import Image from "next/image"
import { assets } from "@/assets/assets"
import { useState } from "react";
import { motion } from "framer-motion"

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "75dc21ca-8c49-42d4-845c-0b21ddcccd73");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div 
            id='contact' 
            className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h3 
                className="text-center mb-2 text-lg font-ovo"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
            >
                Connect with me
            </motion.h3>
            
            <motion.h1 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-ovo"
            >
                Get in touch
            </motion.h1>
            
            <motion.p 
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                I'd love to hear from you! If you have any questions, comments,
                or feedback, please use the form below.
            </motion.p>
            
            <motion.form 
                onSubmit={onSubmit} 
                className="max-w-3xl mx-auto"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.9 }}
            >
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                >
                    <motion.input 
                        type="text" 
                        placeholder="Enter your Name" 
                        required 
                        className="flex-1 p-3 outline-none border-[0.5px] 
                         border-gray-400 rounded-md bg-white" 
                        name='name'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />
                    <motion.input 
                        type="email" 
                        placeholder="Enter your Email" 
                        required 
                        className="flex-1 p-3 outline-none border-[0.5px] 
                         border-gray-400 rounded-md bg-white" 
                        name='email'
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                    />
                </motion.div>
                
                <motion.textarea 
                    rows='6' 
                    placeholder="Enter your message" 
                    required
                    className="w-full p-4 outline-none border-[0.5px] 
                    border-gray-400 rounded-md bg-white mb-8" 
                    name="message"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.3, delay: 0.6 }}
                />
                
                <motion.button 
                    type='submit' 
                    className="py-3 px-8 w-max flex items-center
                     justify-between gap-2 bg-black/80 text-white rounded-full mx-auto 
                     hover:bg-black duration-500"
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    Submit Now <Image 
                        src={assets.right_arrow_white} 
                        alt="" 
                        className="w-4" 
                    />
                </motion.button>
                <p className="mt-4 text-center">{result}</p>
            </motion.form>
        </motion.div>
    )
}
