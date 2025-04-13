import { motion as Motion } from "framer-motion";
import styles from "../../styles/twStyles";
//import ReactIcons
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { footerVariants } from "../../utils/motion";

const Footer = () => {
  return (
    <Motion.div initial="hidden" animate="visible" variants={footerVariants("up")} className={`${styles.paddings} container mx-auto space-y-20`}>
      <div className="border-t-white/20 border" />
      <div className={`${styles.flexWrap} gap-3`}>
        <h1 className="text-4xl text-white">Metaverse</h1>
        <p className="text-white/50">
          Copyright © 2021 - 2022 Metaverse. All rights reserved.
        </p>
        <div className={`${styles.flexItemCenter} gap-2`}>
          <FaFacebook className="fill-white" size={30} />
          <FaInstagram className="fill-white" size={30} />
          <FaTwitter className="fill-white" size={30} />
          <FaLinkedin className="fill-white" size={30} />
        </div>
      </div>
    </Motion.div>
  );
};

export default Footer;
