// Styles
import styles from "./styles.module.scss";
import ImageBox from "../ImageBox";

const SectionComponent = ({ title, subtext, text, textmobile, image, alt }) => {
  return (
    <div className={styles.section}>
      <div className={styles.__container}>
        <div className={styles.__section_content}>
          <div className={`${styles.box} ${styles.__text}`}>
            <div className={styles.__regular_text}>
              <h2>{title}</h2>
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
          {image && (
            <div className={styles.__image_box}>
              <ImageBox images={image} alt={alt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
