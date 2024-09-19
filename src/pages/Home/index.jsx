import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
//import Contact from "../../components/Contact";
import Cabinet from "../../components/Cabinet";
import Implantologie from "../../components/Implantologie";
import Esthetique from "../../components/Esthetique";
import Soins from "../../components/Soins";
import Footer from "../../components/Footer";
import LinesSection from "../../components/LinesSection";
// Styles
import styles from "./styles.module.scss";
// Assets
import image_1 from "../../assets/images/sainttropez.jpeg";
import image_2 from "../../assets/images/implants.webp";
import image_3 from "../../assets/images/smillers.jpeg";
import image_4 from "../../assets/images/soins.jpeg";

const Home = () => {
  const sections = [
    {
      id: "cabinet",
      content: (
        <div className={styles.sections} id="cabinet">
          <Cabinet
            title={"Le Cabinet"}
            subtext={
              "Bienvenue au cabinet dentaire du Dr. Jungnickel et de son épouse Nathalie, situé au cœur du pittoresque village de Saint-Tropez. Notre équipe vous accueille avec chaleur et professionnalisme, mettant tout en œuvre pour vous offrir une expérience dentaire exceptionnelle."
            }
            text={
              "En tant que passionnés de notre métier, nous nous engageons à fournir des soins dentaires de la plus haute qualité, en mettant l'accent sur la minutie et l'attention aux détails. Dotés d'équipements techniques de pointe, tels que la radiographie 3D, nous sommes en mesure de diagnostiquer avec précision et de planifier des traitements adaptés à vos besoins spécifiques. Que vous veniez pour une simple consultation ou pour des traitements plus complexes, vous pouvez compter sur notre expertise et notre dévouement à votre santé bucco-dentaire"
            }
            textmobile={
              "En tant que passionnés de notre métier, nous nous engageons à fournir des soins dentaires de la plus haute qualité, en mettant l'accent sur la minutie et l'attention aux détails. Dotés d'équipements techniques de pointe, tels que la radiographie 3D, nous sommes en mesure de diagnostiquer avec précision et de planifier des traitements adaptés à vos besoins spécifiques. Que vous veniez pour une simple consultation ou pour des traitements plus complexes, vous pouvez compter sur notre expertise et notre dévouement à votre santé bucco-dentaire"
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
            subtext={
              "Les implants dentaires représentent une solution innovante pour remplacer les dents manquantes, améliorant à la fois la santé bucco-dentaire et la qualité de vie des patients. En restaurant l’esthétique du sourire, ils rétablissent également la fonction masticatoire, la phonétique et la structure faciale. Contrairement aux prothèses amovibles, les implants sont solidement ancrés dans l'os de la mâchoire, offrant une stabilité et un confort remarquables. Ils préservent également la santé osseuse en stimulant l'os de la mâchoire et en empêchant sa résorption. Esthétiquement, les implants fonctionnent comme des dents naturelles, permettant aux patients de retrouver un sourire confiant et naturel. En somme, les implants dentaires sont une solution durable et efficace pour remplacer les dents manquantes, améliorant ainsi la fonctionnalité, l’esthétique et la santé globale de la bouche."
            }
            text={
              "Les implants de la marque Straumann sont renommés pour leur qualité et leur fiabilité en implantologie dentaire. Conçus avec une précision suisse et fabriqués à partir de matériaux de haute qualité, ils offrent une solution durable et efficace. Leur conception innovante garantit une intégration osseuse optimale, assurant ainsi une stabilité à long terme. Straumann propose une large gamme de produits adaptés aux besoins spécifiques de chaque patient, offrant des solutions personnalisées pour restaurer la fonctionnalité et l’esthétique dentaire. Reconnus pour leur excellence, les implants Straumann sont un choix de confiance pour les professionnels de la dentisterie et les patients à travers le monde."
            }
            textmobile={
              "Les implants de la marque Straumann sont renommés pour leur qualité et leur fiabilité en implantologie dentaire. Conçus avec une précision suisse et fabriqués à partir de matériaux de haute qualité, ils offrent une solution durable et efficace. Leur conception innovante garantit une intégration osseuse optimale, assurant ainsi une stabilité à long terme. Straumann propose une large gamme de produits adaptés aux besoins spécifiques de chaque patient, offrant des solutions personnalisées pour restaurer la fonctionnalité et l’esthétique dentaire. Reconnus pour leur excellence, les implants Straumann sont un choix de confiance pour les professionnels de la dentisterie et les patients à travers le monde."
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
            subtext={
              "Les soins esthétiques dentaires offrent une opportunité fantastique d'améliorer non seulement l'apparence, mais aussi la confiance en soi de nos patients. Que ce soit pour éclaircir des dents ternes avec le blanchiment dentaire, corriger des imperfections avec des facettes ou des couronnes en céramique, ou encore pour aligner les dents avec des traitements orthodontiques discrets comme les aligneurs transparents, notre équipe est spécialisée dans la création de sourires éclatants et harmonieux. Nous comprenons l'importance d'un sourire radieux dans la vie quotidienne et professionnelle, c'est pourquoi nous mettons tout en œuvre pour offrir des soins esthétiques dentaires de haute qualité, personnalisés pour chaque patient. Grâce à notre expertise et à notre engagement envers l'excellence, nous vous aiderons à atteindre le sourire de vos rêves et à retrouver une confiance éclatante."
            }
            text={
              "L'orthodontie avec les aligneurs de la marque Smilers offre une approche moderne et discrète pour corriger les problèmes d'alignement dentaire. Conçus sur mesure pour chaque patient, les aligneurs Smilers sont fabriqués à partir de matériaux transparents et confortables, ce qui les rend pratiquement invisibles lorsqu'ils sont portés. Grâce à leur conception sur mesure et à leur technologie avancée, les aligneurs Smilers permettent de déplacer progressivement les dents vers leur position désirée, offrant ainsi des résultats précis et esthétiques. De plus, leur conception amovible permet aux patients de maintenir une bonne hygiène bucco-dentaire tout au long du traitement. Avec les aligneurs Smilers, obtenir un sourire droit et uniforme est désormais plus pratique et discret que jamais."
            }
            textmobile={
              "L'orthodontie avec les aligneurs de la marque Smilers offre une approche moderne et discrète pour corriger les problèmes d'alignement dentaire. Conçus sur mesure pour chaque patient, les aligneurs Smilers sont fabriqués à partir de matériaux transparents et confortables, ce qui les rend pratiquement invisibles lorsqu'ils sont portés. Grâce à leur conception sur mesure et à leur technologie avancée, les aligneurs Smilers permettent de déplacer progressivement les dents vers leur position désirée, offrant ainsi des résultats précis et esthétiques. De plus, leur conception amovible permet aux patients de maintenir une bonne hygiène bucco-dentaire tout au long du traitement. Avec les aligneurs Smilers, obtenir un sourire droit et uniforme est désormais plus pratique et discret que jamais."
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
            subtext={
              "Notre cabinet dentaire se consacre à offrir des soins de haute qualité dans un environnement chaleureux. Nous proposons des traitements personnalisés adaptés aux besoins spécifiques de chaque patient, que ce soit pour des soins de routine, des procédures de restauration ou des solutions avancées comme les implants dentaires et l'orthodontie. Notre équipe expérimentée utilise les dernières technologies pour garantir des résultats durables et confortables. La santé bucco-dentaire de nos patients est notre priorité, et nous nous engageons à fournir des soins exceptionnels pour un sourire radieux et sain. Nous proposons également des traitements pour le ronflement et l'apnée du sommeil."
            }
            text={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire (OAM) est une solution efficace pour améliorer la qualité du sommeil. Ces dispositifs dentaires personnalisés maintiennent la mâchoire inférieure avancée pour garder les voies respiratoires ouvertes, réduisant ainsi le ronflement et les apnées obstructives. En partenariat avec ResMed, nous offrons des orthèses de haute qualité, confortables et efficaces. En combinant notre expertise dentaire avec les innovations de ResMed, nous proposons des solutions de pointe pour améliorer le sommeil et le bien-être général de nos patients."
            }
            textmobile={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire (OAM) est une solution efficace pour améliorer la qualité du sommeil. Ces dispositifs dentaires personnalisés maintiennent la mâchoire inférieure avancée pour garder les voies respiratoires ouvertes, réduisant ainsi le ronflement et les apnées obstructives. En partenariat avec ResMed, nous offrons des orthèses de haute qualité, confortables et efficaces. En combinant notre expertise dentaire avec les innovations de ResMed, nous proposons des solutions de pointe pour améliorer le sommeil et le bien-être général de nos patients."
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
        {" "}
        <HeroSection />
      </header>
      <div className={styles.sections_container}>
        <LinesSection sections={sections} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
