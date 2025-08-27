import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer= ()=>{
    return(
        <div className="mt-20 ">
            <div className="text-center">
                <Image src={assets.logo} alt=""  className="w-36 max-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    muhammadishrar9@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between
             border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 Md Ishrar. All rights reserved.</p>
                <ul className="flex items-center gap-10 jusrify-center mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://github.com/mdishrar">GitHub</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/muhammad-ishrar-2355622ab/">LinkdIn</a></li>
                    <li><a target="_blank" href="https://x.com/120_b2">Twitter</a></li>
                </ul>

            </div>
        
        </div>
    )
}
export default Footer