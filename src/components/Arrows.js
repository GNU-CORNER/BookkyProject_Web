import styled from "styled-components";

const Arrow = ({ direction }) => {
  switch (direction) {
    case "left": {
      return <Image src={require("../assets/leftArrow.png")} alt="" />;
    }
    case "right": {
      return <Image src={require("../assets/rightArrow.png")} alt="" />;
    }
    default: {
      return <></>;
    }
  }
};

const Image = styled.img`
  width: 256px;
`;

export const ArrowLeft = Arrow({ direction: "left" });
export const ArrowRight = Arrow({ direction: "right" });

export default Arrow;
