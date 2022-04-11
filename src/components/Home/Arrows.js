import styled from "styled-components";

// Home - 책 가로 스크롤 뷰의 화살표
const Arrow = ({ direction }) => {
  switch (direction) {
    case "left": {
      return <Image src={require("../../assets/leftArrow2.png")} alt="" />;
    }
    case "right": {
      return <Image src={require("../../assets/rightArrow2.png")} alt="" />;
    }
    default: {
      return <></>;
    }
  }
};

//////////////////////////////////////// Styled-Components
const Image = styled.img`
  width: 500px;
`;

export const ArrowLeft = Arrow({ direction: "left" });
export const ArrowRight = Arrow({ direction: "right" });

export default Arrow;
