import Button from "../Button";
import styles from "./styles.module.scss";

const Contact = ({ address, phone, mail }) => {
  const linkToAbout = {
    name: "Où sommes-nous",
    target: "#contact",
  };
  return (
    <div className={styles.contact}>
      <div className={styles.__contact_container}>
        <div className={styles.__text_box}>
          <h1>Cabinet du Docteur Ralph JUNGNICKEL</h1>
          <br />
          <h2>Chirurgien-dentiste</h2>
          <br />
          <h4>
            Prévention, Implantologie, Parodontie, Soins, Solution Esthétique.
          </h4>
          <br />
          <p>{address}</p>
          <br />
          <p>{phone}</p>
          <br />
          <p>{mail}</p>
        </div>
        <div className={styles.__button_box}>
          <Button link={linkToAbout} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
