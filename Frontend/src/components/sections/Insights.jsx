import React from "react";
import Metaverse from "../../data/Insights";
import { motion as Motion } from "framer-motion";
import styles from "../../styles/twStyles";
import { cardVariants } from "../../utils/motion";

const Insights = () => {
  return (
    <section className={`${styles.paddings} `}>
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl leading-tight">
        Insight about metaverse
      </h1>
      {Metaverse.map((insight, index) => (
        <Motion.div
          key={insight.id}
          className="mt-10"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants("down")}
        >
          <div
            className={`${styles.flexCenter} flex-col md:flex-row  gap-10 lg:gap-20 `}
          >
            <div className="rounded-3xl overflow-hidden w-full h-[200px] md:w-[400px]">
              <img
                src={insight.image}
                className="w-full h-full object-cover hover:scale-125"
              />
            </div>
            <div className="text-white space-y-5 text-left">
              <h6 className="text-2xl md:text-4xl max-w-[500px] font-semibold">
                {insight.title}
              </h6>
              <p className="text-white/50 max-w-[500px]">
                {insight.description}
              </p>
            </div>
          </div>
        </Motion.div>
      ))}
    </section>
  );
};

export default Insights;
