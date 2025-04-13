import PrimaryButton from "../ui/PrimaryButton";
import Earth from "/earth.png";
import Styles from '../../styles/twStyles';



const Hero = () => {
  return (
    <section id="home" className={`${Styles.paddings} container mx-auto`}>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:h-[700px] justify-around mt-60 lg:mt-40 space-y-10 lg:space-y-0">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-5 max-w-lg">
          <h1 className="text-white font-serif uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-[#9BA4ED]">Explore</span> the fascinating
            world
          </h1>
          <p className="text-white text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
            ac ipsum sed rhoncus. Nam euismod auctor ipsum. Etiam interdum nulla
            neque, eu elementum arcu fermentum vel.
          </p>
          {/* button */}
          <PrimaryButton />
        </div>

        {/* Image */}
        <img
          src={Earth}
          alt="Earth"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl  zoomIn"
        />
      </div>
    </section>
  );
};

export default Hero;
