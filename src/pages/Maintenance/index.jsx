// Assets
import logo from "../../assets/logo/logo.svg";
// Styles
import styles from "./styles.module.scss";

const Maintenance = () => {
  return (
    <div className={styles.maintenance}>
      <div>
        <img src={logo} alt="logo test" />
        <p>Bientôt le site de Cabinet dentaire du Docteur Jungnickel</p>
        <p>Développement en cours....</p>
      </div>
    </div>
  );
};

export default Maintenance;
