import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Links from "../Links";
// import IconContact from "../IconContact";
// Assets
import logo from "../../assets/logo/testlogo.png";
import menu from "../../assets/icon/menu.png";
import cross from "../../assets/icon/cross.png";
// Styles
import styles from "./styles.module.scss";
import IconContact from "../IconContact";

const Navbar = () => {
  const navbarElement = useRef(null);
  const navigationHeight = useRef(0);

  useEffect(() => {
    navigationHeight.current = navbarElement.current.offsetHeight;
    navbarElement.current.style.setProperty(
      "--scroll-padding",
      navigationHeight.current
    );
  }, []);

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 114) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Accueil", target: "#welcome" },
    { name: "Le Cabinet", target: "#cabinet" },
    { name: "Implantologie", target: "#implantologie" },
    { name: "Esthétique", target: "#esthetique" },
    { name: "Soins", target: "#soins" },
  ];

  return (
    <nav
      ref={navbarElement}
      className={fix ? `${styles.navbar} ${styles.fixed}` : `${styles.navbar}`}
    >
      <div className={styles.__logo_box}>
        <a href="#welcome">
          <img className={styles.__logo} src={logo} alt="logo test" />
        </a>
      </div>
      <div className={styles.__nav_menu}>
        <div className={styles.__menu_content}>
          {links.map((link) => (
            <Links key={uuidv4()} link={link} onClick={toggleMenu} />
          ))}
          <span className={styles.__nav_btn}>
            <IconContact />
          </span>
        </div>
      </div>
      <div className={styles.__nav_burger_menu}>
        <button
          className={styles.__summ}
          onClick={toggleMenu}
          onMouseEnter={toggleMenu}
        >
          <img src={isOpen ? cross : menu} alt={isOpen ? "Menu" : "Cross"} />
        </button>
        {isOpen && (
          <div className={styles.__menu_mobile}>
            {links.map((link) => (
              <Links
                key={uuidv4()}
                link={link}
                link_menu
                onClick={toggleMenu}
                isMobileMenuActive={isOpen}
                className={isOpen ? styles.link_menu : styles.link}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
