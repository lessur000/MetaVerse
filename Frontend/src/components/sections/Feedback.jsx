import styles from "../../styles/twStyles";
import { motion as Motion } from "framer-motion";
import Rocket from "/rocket.jpg";
import {  fadeIn } from "../../utils/motion";

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10 mt-20`}>
      <Motion.div
        className={`${styles.innerWidth} ${styles.flexCenter} flex-col lg:flex-row mx-auto gap-10`}
      >
        {/* leftcol */}
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("right")}
        >
          <div className="p-6 rounded-3xl bg-white/10 lg:w-[300px] lg:h-[500px]">
            <div className="text-white space-y-5">
              <div>
                <h1 className="text-xl md:text-3xl font-bold">
                  Mark zuckerberg
                </h1>
                <p className="text-sm text-gray-300">Founder | Metaverse</p>
              </div>
              <p className="text-xl md:text-2xl text-gray-200 leading-10">
                “With the development of today's technology, metaverse is very
                useful for today's work, or can be called web 3.0. By using
                metaverse you can use it as anything.”
              </p>
            </div>
          </div>
        </Motion.div>
        {/* rightcol */}
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("left")}
          className="w-full"
        >
          <div className="overflow-hidden rounded-3xl h-[300px] md:h-[500px] w-full">
            <img
              src={Rocket}
              className="w-full h-full object-cover object-top  transition-transform duration-500 hover:scale-110"
            />
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Feedback;
