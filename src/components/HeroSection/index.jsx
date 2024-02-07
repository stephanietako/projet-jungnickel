// Styles
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import Contact from "../../components/Contact";
// Assets
// import heroimg from "../../assets/images/implants.jpeg";
const HeroSection = () => {
  const linkToAbout = {
    name: "Où sommes-nous",
    target: "#contact",
  };
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.__hero_image}></div>
        <div className={styles.__hero_txt}>
          <Contact
            address={"10 Avenue Paul-Roussel \n 83990 \n Saint-Tropez"}
            phone={<a href="tel:+33494970211">0494970211</a>}
            mail={
              <a href="mailto:dr.jungnickel@free.fr">dr.jungnickel@free.fr</a>
            }
          />
          <div className={styles.__button_box}>
            <Button link={linkToAbout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
