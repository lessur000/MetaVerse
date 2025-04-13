import Planet from "/cyberplanet.png";
//import icons
import { MdOutlineSubtitles } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import styles from "../../styles/twStyles";
import { planetVariants } from "../../utils/motion";
import { motion as Motion } from "framer-motion";


const Whatsnew = () => {
  return (
    <section id="about" className={`${styles.paddings} container mx-auto p-3 mt-20`}>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-50">
        <div className="lg:max-w-[400px]">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl  font-bold">
            What's new about Metaverse?
          </h1>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* New world */}
            <div className="pt-15 space-y-5">
              <div className="rounded-xl bg-gray-500 p-3 w-fit">
                <MdOutlineSubtitles size={30} className="fill-white" />
              </div>
              <h1 className="text-white font-bold text-2xl">
                Title a new world
              </h1>
              <p className="text-[#b0b0b0]">
                we have the latest update with new world for you to try never
                mind
              </p>
            </div>
            {/* Realistic */}
            <div className="pt-15 space-y-5">
              <div className="rounded-xl bg-gray-500 p-3 w-fit">
                <FaEye size={30} className="fill-white" />
              </div>
              <h1 className="text-white font-bold text-2xl">
                Title More realistic
              </h1>
              <p className="text-[#b0b0b0]">
                we have the latest update with new world for you to try never
                mind
              </p>
            </div>
          </div>
        </div>
        <Motion.div
          variants={planetVariants("left")}
          initial="hidden"
          animate="show"
        >
          <img src={Planet} className="h-auto w-[600px]" />
        </Motion.div>
      </div>
    </section>
  );
};

export default Whatsnew;
