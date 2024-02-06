import React, { useState } from "react";
// Assets
// import mail from "../../assets/icon/at-clear.png";
import mail from "../../assets/icon/at.svg";
import mailHovered from "../../assets/icon/at-colored.svg";
import phone from "../../assets/icon/phone.svg";
import phoneHovered from "../../assets/icon/phone-colored.svg";
// Styles
import styles from "./styles.module.scss";

const IconContact = () => {
  const [isMailHovered, setIsMailHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const emailAdress = process.env.REACT_APP_EMAIL;

  return (
    <div className={styles.__iconBox}>
      <a href={`mailto:${emailAdress}`}>
        <button
          type="button"
          className={styles.unit}
          onMouseEnter={() => setIsMailHovered(true)}
          onMouseLeave={() => setIsMailHovered(false)}
        >
          {" "}
          <img
            className={styles.icon}
            src={isMailHovered ? mailHovered : mail}
            alt="icon mail"
          />
        </button>
      </a>
      {/* //////// */}
      <a href={isPhoneHovered}>
        <button
          type="button"
          className={styles.unit}
          onMouseEnter={() => setIsPhoneHovered(true)}
          onMouseLeave={() => setIsPhoneHovered(false)}
        >
          {" "}
          <img
            className={styles.icon}
            src={isPhoneHovered ? phoneHovered : phone}
            alt="icon phone"
          />
        </button>
      </a>
    </div>
  );
};

export default IconContact;
