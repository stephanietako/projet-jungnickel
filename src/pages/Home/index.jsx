import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection";
import Cabinet from "../../components/Cabinet";
import Implantologie from "../../components/Implantologie";
import Esthetique from "../../components/Esthetique";
import Soins from "../../components/Soins";
import Footer from "../../components/Footer";
//import LinesSection from "../../components/LinesSection";
// Styles
import styles from "./styles.module.scss";
// Assets
import image_1 from "../../assets/images/sainttropez.jpeg";
import image_2 from "../../assets/images/implants.webp";
import image_3 from "../../assets/images/smillers.jpeg";
import image_4 from "../../assets/images/soins.jpeg";

const Home = () => {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.3 },
    },
    viewport: { once: false, amount: 0.4 },
  };
  //////////////////////
  const sections = [
    {
      id: "cabinet",
      content: (
        <div className={styles.sections} id="cabinet">
          <Cabinet
            title={"Le Cabinet"}
            text={
              "Bienvenue au cabinet dentaire du Dr. Jungnickel et de son épouse Nathalie, au cœur de Saint-Tropez. Notre équipe vous accueille chaleureusement pour une expérience dentaire exceptionnelle."
            }
            subtext={
              "Passionnés par notre métier, nous offrons des soins dentaires de haute qualité avec minutie et attention aux détails."
            }
            textmobile={
              "Passionnés par notre métier, nous offrons des soins dentaires de haute qualité avec minutie et attention aux détails."
            }
            image={image_1}
            alt="Vue sur le village de Saint-Tropez"
          />
        </div>
      ),
    },
    {
      id: "implantologie",
      content: (
        <div className={styles.sections} id="implantologie">
          <Implantologie
            title={"Implantologie"}
            text={
              "Les implants dentaires remplacent les dents manquantes, améliorant la santé bucco-dentaire et la qualité de vie."
            }
            subtext={
              "Les implants Straumann sont reconnus pour leur qualité et fiabilité."
            }
            textmobile={
              "Les implants Straumann sont reconnus pour leur qualité et fiabilité."
            }
            image={image_2}
            alt="Image d'implantologie"
          />
        </div>
      ),
    },
    {
      id: "esthetique",
      content: (
        <div className={styles.sections} id="esthetique">
          <Esthetique
            title={"Esthetique"}
            text={
              "Les soins esthétiques dentaires améliorent l'apparence et la confiance en soi."
            }
            subtext={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire."
            }
            textmobile={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire."
            }
            image={image_3}
            alt="Image esthétique"
          />
        </div>
      ),
    },
    {
      id: "soins",
      content: (
        <div className={styles.sections} id="soins">
          <Soins
            title={"Soins"}
            text={
              "Notre cabinet dentaire offre des soins de haute qualité dans un environnement chaleureux."
            }
            subtext={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire."
            }
            textmobile={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire."
            }
            image={image_4}
            alt="Image des soins"
          />
        </div>
      ),
    },
    {
      id: "map",
      content: (
        <section id="map">
          <div className={styles.sections}>
            <div>ICI GOOGLE MAP</div>
          </div>
        </section>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.header__bloc}>
          {" "}
          <HeroSection />
        </div>
      </header>

      <div className={styles.main}>
        <span className={styles.home_bloc}>
          {sections.map((section) => (
            <motion.div
              className={styles.sectionWrapper}
              key={section.id}
              {...animationProps}
            >
              {section.content}
            </motion.div>
          ))}
        </span>
      </div>
      <Footer />
    </>
  );
};

export default Home;
