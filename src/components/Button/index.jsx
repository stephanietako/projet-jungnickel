// Styles
import styles from "./styles.module.scss";

const Button = ({ text, link }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = target;
  };

  const { name, target } = link;

  return (
    <div className={styles.container}>
      <a
        href={target}
        className={styles.__btn}
        type="button"
        onClick={handleClick}
      >
        <span>{text}</span>
        {name}
      </a>
    </div>
  );
};

export default Button;
