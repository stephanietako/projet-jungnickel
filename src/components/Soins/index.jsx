// Styles
import styles from "./styles.module.scss";

const Soins = ({ title, subtext, text, textmobile, image, alt }) => {
  return (
    <div className={styles.soins}>
      <div className={styles.__container}>
        <div className={styles.__soins_content}>
          <div className={`${styles.box} ${styles.__text} `}>
            <div className={styles.__regular_text}>
              <h1> {title}</h1>
              <span>
                <p className={styles.__subtext}>{subtext}</p>
              </span>
              <p>{text}</p>
            </div>
            <div className={styles.__bloc_txt_mobile}>
              <div className={styles.__text_mobile}>
                <h1>{title}</h1>
                <span>
                  <p className={styles.__subtext}>{subtext}</p>
                </span>
                <p>{textmobile}</p>
              </div>
            </div>
          </div>
          <span>
            <div className={styles.box}>
              <div className={`${styles.box} ${styles.__images} `}>
                <img src={image} alt={alt} />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Soins;
