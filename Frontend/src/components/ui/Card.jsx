import useExpand from "../../hooks/useExpand";
import Astronaut from "/astronaut.png";
import Worlds from "../../data/World";
import { motion as Motion } from "framer-motion";
import { cardVariants } from "../../utils/motion";


const Card = () => {
  const { expanded, handleToggle } = useExpand();


  return (
    <div id="explore" className={`container mx-auto mt-40`}>
      <div className="relative space-y-2">
        {/* Heading */}
        <div className="flex flex-col items-center space-y-3">
          <h1 className="text-center text-3xl text-white">"The world"</h1>
          <p className="text-center leading-tight font-serif md:text-5xl text-white lg:w-[500px]">
            Choose the world you want to explore
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center gap-3 pt-10">
          {Worlds.map((world, index) => (
            <Motion.div
              key={world.id}
              className={`relative  flex items-center justify-center h-[50px] transition-all duration-700 ease-out  lg:h-[700px]  min-w-[150px]  overflow-hidden rounded-3xl 
                    ${
                      expanded[world.id]
                        ? "h-[300px] lg:w-[300px]"
                        : "h-[100px] lg:w-[200px]"
                    } 
                  `}
              onClick={() => handleToggle(world.id)}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants("right")}
            >
              {/* Background Image */}
              <img
                src={world.image}
                alt={world.name}
                className="absolute w-full h-full object-cover "
                loading="lazy"
              />

              {/* Title (Hidden when expanded) */}
              <h2
                className={`text-lg font-bold text-center text-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  expanded[world.id] ? "opacity-0 scale-90" : "opacity-100"
                }`}
              >
                {world.name}
              </h2>

              {/* Description Box */}
              <div
                className={`absolute bottom-0 bg-black/50 w-full h-[80px] transition-all duration-500 ease-in-out flex items-center justify-center ${
                  expanded[world.id] ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-white px-3">
                  <h6 className="text-sm">Enter the explore</h6>
                  <p className="font-serif text-base">{world.name}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <img src={Astronaut} className="hidden lg:block" />
      </div>
    </div>
  );
};

export default Card;
