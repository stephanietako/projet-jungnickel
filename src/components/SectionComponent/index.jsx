// Styles
import styles from "./styles.module.scss";
import ImageBox from "../ImageBox";

const SectionComponent = ({ title, subtext, text, textmobile, image, alt }) => {
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.section__text}>
          <div className={styles.section__regular_text}>
            <h2>{title}</h2>
            <p>{text}</p>
            <span className={styles.section__subtext}>
              <p>{subtext}</p>
            </span>
          </div>
          <div className={styles.section__bloc_txt_mobile}>
            <div className={styles.section__text_mobile}>
              <h1>{title}</h1>
              <p>{text}</p>
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
  );
};

export default SectionComponent;
