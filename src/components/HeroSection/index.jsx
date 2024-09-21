// Styles
import styles from "./styles.module.scss";
import Button from "../Button";
//import heroimg from "../../assets/images/implants.jpeg";

const HeroSection = () => {
  const linkToAbout = {
    name: "Retrouvez-nous",
    target: "#map",
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        {/* <div className={styles.__filter_color__img}> */}
        <div className={styles.hero__img}>
          {" "}
          {/* <img src={heroimg} alt="implants dentaires" /> */}
          {/* </div> */}
        </div>
        <div className={styles.hero__bloc_txt}>
          <span className={styles.hero__title}>
            <h1>Cabinet du Docteur Ralph JUNGNICKEL</h1>
          </span>
          <br />
          <span className={styles.hero__subtitle}>
            <h2>Chirurgien-dentiste</h2>
            <h3>
              Prévention, Implantologie, Parodontie, Soins, Solution Esthétique
            </h3>
          </span>
          <span className={styles.hero__text}>
            <p>10 Avenue Paul-Roussel - 83990 Saint-Tropez</p>
            <p>
              <a href="tel:+33494970211">0494970211</a>
            </p>
            <p>
              <a href="mailto:dr.jungnickel@free.fr">dr.jungnickel@free.fr</a>
            </p>
          </span>
          <div className={styles.__button_box}>
            <Button link={linkToAbout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
