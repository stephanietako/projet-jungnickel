import { Link } from "react-router-dom";
// Styles
import styles from "./styles.module.scss";
// Assets
//import logo from "../../assets/logo/testlogo.png";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <div className={styles.footer__container} id="footer">
        <div className={styles.footer__bloc}>
          <div className={styles.footer_infos}>
            <div className={styles.footer_infos__container}>
              <div className={styles.column}>
                <span className={styles.column__title}>
                  {" "}
                  <h3>RESTONS CONNECTÉS</h3>
                </span>
                <ul>
                  <li className={styles.__info}>
                    <a
                      href="https://www.instagram.com/maison_essenza/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.__link}
                    >
                      <span className={styles.__img}>item4</span>
                      <div className={styles.__txt}>
                        <p>Instagram</p>
                      </div>
                    </a>
                  </li>
                  <li className={styles.__info}>
                    <a href="mailto:hello@maison-essenza.com">
                      <span className={styles.__img}>Item5</span>
                      <div className={styles.__txt}>
                        <p>Mail</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <span className={styles.column__title}>
                  {" "}
                  <h3>LIENS UTILES</h3>
                </span>
                <ul>
                  <li className={styles.__info}>
                    <Link href="/">
                      <div className={styles.__txt}>
                        <p>Accueil</p>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.__info}>item5</li>
                  <li className={styles.__info}>
                    <div className={styles.__txt}>item6</div>
                  </li>
                  <li className={styles.__info}>
                    <Link href="/">
                      <div className={styles.__txt}>
                        <p>Mentions Légales</p>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.__info}>
                    <Link href="/">
                      <div className={styles.__txt}>
                        <p>RGPD - Politique de confidentialité</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <span className={styles.column__title}>
                  {" "}
                  <h3>CONTACT</h3>
                </span>

                <ul>
                  <li
                    className={`${styles.__info} ${styles.__info_adress_bloc}`}
                  >
                    <div className={styles.__txt}>
                      <p id={styles.adress}>
                        Planète Mars <br />
                        Golfe de Saint-tropez <br />
                        18 rue du ciel - 830990 Saint-Tropez
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.__copyright}>
              <span className={styles.__copyright__img}> Item7</span>
              &#169; Copyright {currentYear} |
              <a
                href="https://www.takodev.studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tako Dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
