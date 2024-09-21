import SectionComponent from "../SectionComponent";

const Cabinet = ({ title, subtext, text, textmobile, image, alt }) => {
  return (
    <SectionComponent
      title={title}
      subtext={subtext}
      text={text}
      textmobile={textmobile}
      image={image}
      alt={alt}
    />
  );
};

export default Cabinet;
