import { assets, workData } from "@/assets/assets"; 
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h3 className="text-center mb-2 text-lg font-Ovo">My portfolio</h3>
      <h1 className="text-center text-5xl font-Ovo">My Recent Works </h1>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my ML-web development portfolio! Explore my collection of projects
        showcasing my expertise in Machine Learning and Backend Development.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}>
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
          </div>
        ))}
      </div>
        <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700
         border-[0.5px] border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:
         bg-lightHover duration-500">
          Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4" />

        </a>
    </div>
  );
};

export default Work;
