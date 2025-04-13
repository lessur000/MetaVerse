import { TbUniverse } from "react-icons/tb";
import useNav from "../../hooks/useNav";
//import icons
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineX } from "react-icons/hi";
//import react-scroll
import { Link as ScrollLink } from "react-scroll";
import { motion as Motion } from "framer-motion";
import { sidebarVariants } from "../../utils/motion";

const Header = () => {
  const { nav, toggleNav } = useNav();
  return (
    <>
      <header className="fixed top-0 z-30 w-full">
        <div className="container mx-auto bg-[#0a0f29] px-5 py-2 rounded-b-2xl ">
          <div className="flex items-center justify-between">
            <TbUniverse size={90} className="fill-white" />
            <div className="sm:hidden flex items-center gap-3">
              <div className="flex items-center gap-4">
                {/* Open Button */}
                <button className="text-white border-white border-2 py-2 px-4 rounded-3xl">
                  Sign in
                </button>
                {!nav && (
                  <RxHamburgerMenu
                    size={30}
                    className="text-white cursor-pointer"
                    onClick={toggleNav}
                  />
                )}
              </div>
              {/* Sidebar Menu */}
              <Motion.div
                initial="closed"
                animate={nav ? "open" : "closed"}
                variants={sidebarVariants}
                className="fixed top-0 right-0 z-20 bg-white w-1/2 h-full p-5 shadow-lg"
              >
                <div className="space-y-10">
                  {/*  Close Icon */}
                  <HiOutlineX
                    size={30}
                    className="text-gray-900 cursor-pointer ml-[150px]"
                    onClick={toggleNav}
                  />
                  {/* Mobile Menu */}
                  <div className="flex flex-col gap-5 text-lg font-serif text-gray-900">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={1000}
                      onClick={toggleNav}
                      className="cursor-pointer"
                    >
                      Home
                    </ScrollLink>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={1000}
                      onClick={toggleNav}
                      className="cursor-pointer"
                    >
                      About
                    </ScrollLink>
                    <ScrollLink
                      to="explore"
                      smooth={true}
                      duration={1000}
                      onClick={toggleNav}
                      className="cursor-pointer"
                    >
                      Explore
                    </ScrollLink>
                  </div>
                </div>
              </Motion.div>
            </div>
            {/* laptop/desktop */}
            <div className="hidden sm:flex gap-10 text-white font-serif text-3xl z-10">
              <ScrollLink
                to="home"
                smooth={true}
                duration={1000}
                className="cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={1000}
                className="cursor-pointer"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="explore"
                smooth={true}
                duration={1000}
                className="cursor-pointer"
              >
                Explore
              </ScrollLink>
            </div>
            <button className="hidden sm:block text-white border-white border-2 py-2 px-3 rounded-3xl cursor-pointer">
              Sign in
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
