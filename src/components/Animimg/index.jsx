import React, { useEffect, useRef, useState } from "react";
// Styles
import styles from "./styles.module.scss";
// Assets
// import image_1 from "../../assets/images/esthetique2.jpeg";
// import image_2 from "../../assets/images/esthetique2.jpeg";
// import image_3 from "../../assets/images/esthetique2.jpeg";
// import image_4 from "../../assets/images/esthetique2.jpeg";
const Animimg = ({ images }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    console.log(isIntersecting);
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={imgRef}>
      <div className={styles.image}>
        <img src={images} alt="esthetique" />
      </div>
    </section>
  );
};

export default Animimg;
