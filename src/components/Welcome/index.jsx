import React from "react";
// Styles
import styles from "./styles.module.scss";

const Welcome = ({ title, subtitle, text, textmobile }) => {
  return (
    <div className={styles.welcome}>
      <div className={styles.__container}>
        <div className={styles.__welcome_content}>
          <div className={`${styles.box} ${styles.__text} `}>
            <div className={styles.__regular_text}>
              <h1> {title}</h1>
              <span>
                <h2>{subtitle}</h2>
              </span>
              <p>{text}</p>
            </div>
            <div className={styles.__bloc_txt_mobile}>
              <div className={styles.__text_mobile}>
                <span>
                  <h2>{subtitle}</h2>
                </span>
                <p>{textmobile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
