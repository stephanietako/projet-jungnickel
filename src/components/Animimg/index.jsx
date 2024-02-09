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
    if (isIntersecting) {
      imgRef.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      imgRef.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <section ref={imgRef}>
      <div className={styles.image}>
        <img src={images} alt="esthetique" />
      </div>
    </section>
  );
};

export default AnimImg;
