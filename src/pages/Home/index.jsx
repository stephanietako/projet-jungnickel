import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Cabinet from "../../components/Cabinet";
import Implantologie from "../../components/Implantologie";
import Esthetique from "../../components/Esthetique";
import Soins from "../../components/Soins";
import Footer from "../../components/Footer";
import LinesSection from "../../components/LinesSection";
import ImageBox from "../../components/ImageBox";
// Styles
import styles from "./styles.module.scss";
// Assets
import image_1 from "../../assets/images/sainttropez.jpeg";
import image_2 from "../../assets/images/implants1.jpeg";
import image_3 from "../../assets/images/smillers.jpeg";
import image_4 from "../../assets/images/soins.jpeg";

const Home = () => {
  const sections = [
    {
      id: "welcome",
      content: (
        <div className={styles.sections} id="welcome">
          <HeroSection />
        </div>
      ),
    },
    {
      id: "cabinet",
      content: (
        <div className={styles.sections} id="cabinet">
          <Cabinet
            title={"Le Cabinet"}
            subtext={
              " Bienvenue au cabinet dentaire du Dr. Jungnickel et de son épouse Nathalie, situé au cœur du pittoresque village de Saint-Tropez. Notre équipe vous accueille avec chaleur et professionnalisme, mettant tout en œuvre pour vous offrir une expérience dentaire exceptionnelle. En tant que passionnés de notre métier, nous nous engageons à fournir des soins dentaires de la plus haute qualité, en mettant l'accent sur la minutie et l'attention aux détails. Dotés d'équipements techniques de pointe, tels que la radiographie 3D, nous sommes en mesure de diagnostiquer avec précision et de planifier des traitements adaptés à vos besoins spécifiques. Que vous veniez pour une simple consultation ou pour des traitements plus complexes, vous pouvez compter sur notre expertise et notre dévouement à votre santé bucco-dentaire."
            }
            text={
              " Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
            }
            textmobile={
              "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
            }
          />

          <ImageBox images={image_1} />
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
              "Les implants dentaires sont une solution révolutionnaire pour remplacer les dents manquantes, offrant une multitude d'avantages pour la santé bucco-dentaire et la qualité de vie des patients. En plus de restaurer l'esthétique du sourire, les implants dentaires permettent de rétablir la fonction masticatoire, la phonétique et la structure faciale, offrant ainsi une meilleure qualité de vie. Contrairement aux prothèses amovibles, les implants dentaires sont ancrés solidement dans l'os de la mâchoire, ce qui les rend extrêmement stables et confortables. De plus, ils préservent la santé osseuse en stimulant l'os de la mâchoire et en empêchant la résorption osseuse qui peut survenir après la perte d'une dent. Sur le plan esthétique, les implants dentaires ressemblent et fonctionnent comme des dents naturelles, permettant aux patients de retrouver un sourire confiant et naturel. En somme, les implants dentaires offrent une solution durable et efficace pour remplacer les dents manquantes, améliorant ainsi la fonctionnalité, l'esthétique et la santé globale de la bouche."
            }
            text={
              "Les implants de la marque Straumann sont réputés pour leur qualité et leur fiabilité dans le domaine de l'implantologie dentaire. Fabriqués avec des matériaux de haute qualité et conçus avec une précision suisse, les implants Straumann offrent une solution durable et efficace pour remplacer les dents manquantes. Leur conception innovante garantit une intégration osseuse optimale, assurant ainsi une stabilité à long terme. De plus, la large gamme de produits proposée par Straumann permet de répondre aux besoins spécifiques de chaque patient, offrant ainsi des solutions personnalisées pour restaurer la fonctionnalité et l'esthétique dentaire. Avec leur histoire de qualité et d'excellence, les implants Straumann sont un choix de confiance pour les professionnels de la dentisterie et les patients du monde entier."
            }
            textmobile={
              "Les implants de la marque Straumann sont réputés pour leur qualité et leur fiabilité dans le domaine de l'implantologie dentaire. Fabriqués avec des matériaux de haute qualité et conçus avec une précision suisse, les implants Straumann offrent une solution durable et efficace pour remplacer les dents manquantes. Leur conception innovante garantit une intégration osseuse optimale, assurant ainsi une stabilité à long terme. De plus, la large gamme de produits proposée par Straumann permet de répondre aux besoins spécifiques de chaque patient, offrant ainsi des solutions personnalisées pour restaurer la fonctionnalité et l'esthétique dentaire. Avec leur histoire de qualité et d'excellence, les implants Straumann sont un choix de confiance pour les professionnels de la dentisterie et les patients du monde entier."
            }
          />

          <ImageBox images={image_2} />
        </div>
      ),
    },
    {
      id: "esthetique",
      content: (
        <div className={styles.sections} id="esthetique">
          <Esthetique
            title={"Esthetique "}
            subtext={
              "Les soins esthétiques dentaires offrent une opportunité fantastique d'améliorer non seulement l'apparence, mais aussi la confiance en soi de nos patients. Que ce soit pour éclaircir des dents ternes avec le blanchiment dentaire, corriger des imperfections avec des facettes ou des couronnes en céramique, ou encore pour aligner les dents avec des traitements orthodontiques discrets comme les aligneurs transparents, notre équipe est spécialisée dans la création de sourires éclatants et harmonieux. Nous comprenons l'importance d'un sourire radieux dans la vie quotidienne et professionnelle, c'est pourquoi nous mettons tout en œuvre pour offrir des soins esthétiques dentaires de haute qualité, personnalisés pour chaque patient. Grâce à notre expertise et à notre engagement envers l'excellence, nous vous aiderons à atteindre le sourire de vos rêves et à retrouver une confiance éclatante."
            }
            text={
              "L'orthodontie avec les aligneurs de la marque Smilers offre une approche moderne et discrète pour corriger les problèmes d'alignement dentaire. Conçus sur mesure pour chaque patient, les aligneurs Smilers sont fabriqués à partir de matériaux transparents et confortables, ce qui les rend pratiquement invisibles lorsqu'ils sont portés. Grâce à leur conception sur mesure et à leur technologie avancée, les aligneurs Smilers permettent de déplacer progressivement les dents vers leur position désirée, offrant ainsi des résultats précis et esthétiques. De plus, leur conception amovible permet aux patients de maintenir une bonne hygiène bucco-dentaire tout au long du traitement. Avec les aligneurs Smilers, obtenir un sourire droit et uniforme est désormais plus pratique et discret que jamais."
            }
            textmobile={
              "L'orthodontie avec les aligneurs de la marque Smilers offre une approche moderne et discrète pour corriger les problèmes d'alignement dentaire. Conçus sur mesure pour chaque patient, les aligneurs Smilers sont fabriqués à partir de matériaux transparents et confortables, ce qui les rend pratiquement invisibles lorsqu'ils sont portés. Grâce à leur conception sur mesure et à leur technologie avancée, les aligneurs Smilers permettent de déplacer progressivement les dents vers leur position désirée, offrant ainsi des résultats précis et esthétiques. De plus, leur conception amovible permet aux patients de maintenir une bonne hygiène bucco-dentaire tout au long du traitement. Avec les aligneurs Smilers, obtenir un sourire droit et uniforme est désormais plus pratique et discret que jamais."
            }
          />

          <ImageBox images={image_3} />
        </div>
      ),
    },
    {
      id: "soins",
      content: (
        <div className={styles.sections} id="soins">
          <Soins
            title={"Soins "}
            subtext={
              "Notre cabinet dentaire est dévoué à offrir des soins dentaires de haute qualité dans un environnement chaleureux et accueillant. Nous comprenons que chaque patient est unique, c'est pourquoi nous nous efforçons de fournir des traitements personnalisés qui répondent à leurs besoins spécifiques. Que ce soit pour des soins de routine tels que le nettoyage et le détartrage, des procédures de restauration comme les obturations et les couronnes, ou des solutions avancées comme les implants dentaires et l'orthodontie, notre équipe expérimentée est là pour vous accompagner à chaque étape du processus. Nous sommes fiers d'utiliser les dernières technologies et techniques dentaires pour assurer des résultats durables et confortables. Pour notre cabinet, votre santé bucco-dentaire est notre priorité, et nous nous engageons à vous offrir des soins exceptionnels pour que vous puissiez retrouver et maintenir un sourire radieux et en santé. Nous avons proposons également des solutions à votre bien-être quotidien tel que le traitement du ronflement et de l'apnée du sommeil."
            }
            text={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire (OAM) constitue une solution efficace pour améliorer la qualité du sommeil et la santé générale. Les orthèses d'avancée mandibulaire sont des dispositifs dentaires personnalisés qui fonctionnent en maintenant la mâchoire inférieure légèrement avancée pendant le sommeil, ce qui permet de maintenir les voies respiratoires ouvertes et de prévenir le ronflement ainsi que les épisodes d'apnée obstructive du sommeil. Notre cabinet collabore avec ResMed, leader dans le domaine des dispositifs médicaux pour le sommeil, pour offrir à nos patients des orthèses d'avancée mandibulaire de haute qualité. Les orthèses d'avancée mandibulaire de ResMed sont conçues avec précision pour assurer un ajustement confortable et une efficacité maximale, offrant ainsi aux patients une solution pratique et non invasive pour traiter le ronflement et l'apnée du sommeil. En combinant l'expertise dentaire de notre cabinet avec les innovations technologiques de ResMed, nous offrons des solutions de pointe pour améliorer la qualité du sommeil et favoriser le bien-être global de nos patients."
            }
            textmobile={
              "Le traitement du ronflement et de l'apnée du sommeil avec une orthèse d'avancée mandibulaire (OAM) constitue une solution efficace pour améliorer la qualité du sommeil et la santé générale. Les orthèses d'avancée mandibulaire sont des dispositifs dentaires personnalisés qui fonctionnent en maintenant la mâchoire inférieure légèrement avancée pendant le sommeil, ce qui permet de maintenir les voies respiratoires ouvertes et de prévenir le ronflement ainsi que les épisodes d'apnée obstructive du sommeil. Notre cabinet collabore avec ResMed, leader dans le domaine des dispositifs médicaux pour le sommeil, pour offrir à nos patients des orthèses d'avancée mandibulaire de haute qualité. Les orthèses d'avancée mandibulaire de ResMed sont conçues avec précision pour assurer un ajustement confortable et une efficacité maximale, offrant ainsi aux patients une solution pratique et non invasive pour traiter le ronflement et l'apnée du sommeil. En combinant l'expertise dentaire de notre cabinet avec les innovations technologiques de ResMed, nous offrons des solutions de pointe pour améliorer la qualité du sommeil et favoriser le bien-être global de nos patients."
            }
          />

          <ImageBox images={image_4} />
        </div>
      ),
    },
    {
      id: "contact",
      content: (
        <section id="contact">
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

      <LinesSection sections={sections} />

      <Footer />
    </>
  );
};

export default Home;
