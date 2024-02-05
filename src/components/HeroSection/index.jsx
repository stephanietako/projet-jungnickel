// Styles
import styles from "./styles.module.scss";
import Button from "../../components/Button";
// Assets
// import heroimg from "../../assets/images/implants.jpeg";
const HeroSection = () => {
  const linkToAbout = {
    name: "Contact",
    target: "#contact",
  };
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.__hero_image}></div>
        <div className={styles.__hero_txt}>
          <h1>I am John Doe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborumnum uam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium.
          </p>
          <div className={styles.__button_box}>
            <Button link={linkToAbout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
