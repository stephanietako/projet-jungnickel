import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
// import Welcome from "../../components/Welcome";
import Cabinet from "../../components/Cabinet";
import Implantologie from "../../components/Implantologie";
import Esthetique from "../../components/Esthetique";
import Soins from "../../components/Soins";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import LinesSection from "../../components/LinesSection";

// Assets
import logo from "../../assets/logo/logo.svg";
// Styles
import styles from "./styles.module.scss";

const Home = () => {
  const sections = [
    {
      id: "welcome",
      content: (
        <div className={styles.sections} id="welcome">
          {/* <Welcome
            title={"Votre cabinet dentaire "}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnum uam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
            }
            textmobile={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumuam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
            }
            logo={logo}
            altLogo="logo test"
          /> */}
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
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumuam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
            }
            text={
              "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
            }
            textmobile={
              "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
            }
            logo={logo}
            altLogo="logo test"
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
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumuam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
            }
            text={
              "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
            }
            textmobile={
              "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
            }
            logo={logo}
            altLogo="logo test"
          />
        </div>
      ),
    },
    {
      id: "esthetique",
      content: (
        <div className={styles.sections} id="esthetique">
          <Esthetique
            title={"Esthetique "}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnum uam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
            }
            textmobile={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumuam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
            }
            logo={logo}
            altLogo="logo test"
          />
        </div>
      ),
    },
    {
      id: "soins",
      content: (
        <div className={styles.sections} id="soins">
          <Soins
            title={"Soins "}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnum uam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
            }
            textmobile={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumuam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
            }
            logo={logo}
            altLogo="logo test"
          />
        </div>
      ),
    },
    {
      id: "contact",
      content: (
        <div className={styles.sections} id="contact">
          <Contact
            title={"contact"}
            text={
              "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
            }
            logo={logo}
            altLogo="logo test"
          />
        </div>
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
