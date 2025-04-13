import Card from "../components/ui/Card";
import styles from "../styles/twStyles";

const About = () => {
  return (
    <div className={`${styles.paddings} `}>
      <div className="container mx-auto py-10">
        <div className="text-white flex flex-col items-center space-y-3">
          <h1 className="text-3xl text-center">About Metaverse</h1>
          <p className="text-center lg:w-[1000px] lg:text-5xl font-light">
            <span className="font-bold">Metaverse</span> is a new thing in the
            future, where you can enjoy the world by feeling like it's really
            real, you can feel what you feel in this metaverse world. Let's
            explore the world with us.
          </p>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default About;
