import React, { useState } from "react";
import mail from "../../assets/icon/at.svg";
import mailHovered from "../../assets/icon/at-colored.svg";
import phone from "../../assets/icon/phone.svg";
import phoneHovered from "../../assets/icon/phone-colored.svg";
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
          <img
            className={styles.icon}
            src={isMailHovered ? mailHovered : mail}
            alt="icon mail"
          />
        </button>
      </a>

      <button
        type="button"
        className={styles.unit}
        onMouseEnter={() => setIsPhoneHovered(true)}
        onMouseLeave={() => setIsPhoneHovered(false)}
      >
        <a href={isPhoneHovered ? "tel:0494972756" : ""}>
          <img
            className={styles.icon}
            src={isPhoneHovered ? phoneHovered : phone}
            alt="icon phone"
          />
        </a>
      </button>
    </div>
  );
};

export default IconContact;
