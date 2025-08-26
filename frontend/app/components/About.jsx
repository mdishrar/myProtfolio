import react from "react"
import Image from "next/image"
import { assets, infoList, toolsData } from "@/assets/assets"
const About = () =>{
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h3 className="text-center mb-2 text-lg font-ovo">Introduction</h3>
            <h1 className="text-center text-5xl font-ovo">About me</h1>
            <div className=" flex w-full flex-cols lg:flex-row items-center
             gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max:w-none">
                    <Image src={assets.user_image} alt="" className="w-full rounded-3xl"/>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-ovo">
                        I am an experienced Full-Staack developer with 1 year of professional 
                        expertise in the field. Throudhout my career,I had the previllege 0f
                        collaborating with prestigiuos organisation,contributing in their success.
                    </p>
                    <ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({icon,inconDark,title,description},index)=>(
                            <li key={index} className="border-[0.5px] border-gray-400
                             rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 
                             duration-500 hover:shadow-black">
                                <Image src={icon} alt="" className="w-7 mt-3" />
                                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                <p className="text-gray-600 text-sm">{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h2 className="my-6 text-gray-700 font-ovo">Tools i Have</h2>
                    <ul className="flex items-center gap-3 sm:gap-5 ">
                        {toolsData.map((tool,index)=>(
                             <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square
                              border border-gray-400 rounded-lg cursor-pointer">
                                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                             </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default About