import { styled } from "../../stitches.config";

const Style = styled("div", {
  width: 100,
  backgroundColor: "Beige",
});

const Timeline = () => {
  return (
    <Style>
      <p>this is a paragraph in a styled div element</p>
    </Style>
  );
};

export default Timeline;
