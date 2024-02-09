import React, { useEffect, useRef, useState } from "react";
// Styles
import styles from "./styles.module.scss";

const AnimImg = ({ images }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={imgRef} className={isIntersecting ? styles.section : ""}>
      <div
        className={`${styles.image} ${isIntersecting ? styles.slideIn : ""}`}
      >
        <img src={images} alt="esthetique" />
      </div>
    </section>
  );
};

export default AnimImg;
