import styles from "../../styles/twStyles";
import { planetVariants } from "../../utils/motion";
import Earth from "/planet.png";
import { motion as Motion } from "framer-motion";

const Getstarted = () => {
  return (
    <section
      className={`${styles.paddings} container mx-auto pt-32 py-20 z-20`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center md:gap-0 2xl:gap-70">
        <Motion.div
          variants={planetVariants("right")}
          initial="hidden"
          animate="show"
        >
          <img src={Earth} className="h-auto w-[500px]" />
        </Motion.div>
        <div className="space-y-5 max-w-[600px]">
          <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
            Get started with just a few clicks
          </h1>
          <div className="max-w-[350px] space-y-5 mt-20">
            {/* 01 */}
            <div className="flex items-center gap-10">
              <div className="bg-gray-500 rounded-xl p-7 w-fit">
                <h6 className="text-white font-serif text-3xl">01</h6>
              </div>
              <p className="text-gray-500 text-xl font-serif">
                Find a world that suits you and you want to enter
              </p>
            </div>
            {/* 02 */}
            <div className="flex items-center gap-10">
              <div className="bg-gray-500 rounded-xl p-7 w-fit">
                <h6 className="text-white font-serif text-3xl">02</h6>
              </div>
              <p className="text-gray-500 text-xl font-serif">
                Find a world that suits you and you want to enter
              </p>
            </div>
            {/* 03 */}
            <div className="flex items-center gap-10">
              <div className="bg-gray-500 rounded-xl p-7 w-fit">
                <h6 className="text-white font-serif text-3xl">03</h6>
              </div>
              <p className="text-gray-500 text-xl font-serif">
                Find a world that suits you and you want to enter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
