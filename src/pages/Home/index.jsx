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
              "Passionnés par notre métier, nous offrons des soins dentaires de haute qualité avec minutie et attention aux détails. Grâce à des équipements de pointe comme la radiographie 3D, nous diagnostiquons et planifions des traitements adaptés à vos besoins. Que ce soit pour une consultation ou des traitements complexes, comptez sur notre expertise et notre dévouement à votre santé bucco-dentaire"
            }
            textmobile={
              "Passionnés par notre métier, nous offrons des soins dentaires de haute qualité avec minutie et attention aux détails. Grâce à des équipements de pointe comme la radiographie 3D, nous diagnostiquons et planifions des traitements adaptés à vos besoins. Que ce soit pour une consultation ou des traitements complexes, comptez sur notre expertise et notre dévouement à votre santé bucco-dentaire"
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
              "Les implants Straumann sont reconnus pour leur qualité et fiabilité. Fabriqués avec précision suisse et des matériaux de haute qualité, ils garantissent une intégration osseuse optimale et une stabilité à long terme. Straumann propose une large gamme de produits personnalisés pour restaurer fonctionnalité et esthétique dentaire, faisant de leurs implants un choix de confiance pour les professionnels et patients dans le monde entier."
            }
            textmobile={
              "Les implants Straumann sont reconnus pour leur qualité et fiabilité. Fabriqués avec précision suisse et des matériaux de haute qualité, ils garantissent une intégration osseuse optimale et une stabilité à long terme. Straumann propose une large gamme de produits personnalisés pour restaurer fonctionnalité et esthétique dentaire, faisant de leurs implants un choix de confiance pour les professionnels et patients dans le monde entier."
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
              "Les soins esthétiques dentaires améliorent l'apparence et la confiance en soi. Notre équipe propose des traitements personnalisés, incluant le blanchiment des dents, les facettes, les couronnes en céramique et les aligneurs transparents, pour créer des sourires éclatants et harmonieux. Un sourire radieux est essentiel. Nous offrons des soins de haute qualité pour vous aider à atteindre le sourire de vos rêves."
            }
            subtext={
              "Les aligneurs Smilers offrent une approche moderne et discrète pour corriger l'alignement dentaire. Transparente et confortable, cette solution sur mesure permet de déplacer progressivement les dents avec des résultats précis et esthétiques. Leur conception amovible facilite le maintien d'une bonne hygiène bucco-dentaire. Obtenez un sourire droit et uniforme de manière pratique et discrète avec les aligneurs Smilers."
            }
            textmobile={
              "Les aligneurs Smilers offrent une approche moderne et discrète pour corriger l'alignement dentaire. Transparente et confortable, cette solution sur mesure permet de déplacer progressivement les dents avec des résultats précis et esthétiques. Leur conception amovible facilite le maintien d'une bonne hygiène bucco-dentaire. Obtenez un sourire droit et uniforme de manière pratique et discrète avec les aligneurs Smilers."
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
              "Notre cabinet dentaire offre des soins de haute qualité dans un environnement chaleureux. Nous proposons des traitements personnalisés pour chaque patient, incluant soins de routine, restaurations, implants dentaires et orthodontie. Notre équipe utilise les dernières technologies pour des résultats durables et confortables. La santé bucco-dentaire de nos patients est notre priorité."
            }
            subtext={
              "Nous traitons également le ronflement et l'apnée du sommeil avec des orthèses d'avancée mandibulaire (OAM). Ces dispositifs dentaires, en partenariat avec ResMed, maintiennent la mâchoire avancée pour garder les voies respiratoires ouvertes, améliorant ainsi le sommeil et le bien-être général de nos patients."
            }
            textmobile={
              "Nous traitons également le ronflement et l'apnée du sommeil avec des orthèses d'avancée mandibulaire (OAM). Ces dispositifs dentaires, en partenariat avec ResMed, maintiennent la mâchoire avancée pour garder les voies respiratoires ouvertes, améliorant ainsi le sommeil et le bien-être général de nos patients."
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
