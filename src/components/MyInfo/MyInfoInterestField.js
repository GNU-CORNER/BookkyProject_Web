import styled from "styled-components";

//MyInfo - 내 관심분야 컴포넌트
const InterestField = () => {
  return <InterestFieldContainer>관심꿀잼</InterestFieldContainer>;
};

//////////////////////////////////////// Styled-Components
const InterestFieldContainer = styled.div`
  display: grid;
  height: 245px;
  padding: 12px 0;
  border: 1px solid red;
`;

export default InterestField;
