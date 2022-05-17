import { useSelector } from "react-redux";
import styled from "styled-components";

//MyInfo - 내 관심분야 컴포넌트
const InterestField = () => {
  const user = useSelector((state) => state.userData);
  console.log(user);
  return (
    <InterestFieldContainer>
      {user.tagArray.map((el) => {
        return <span key={el}>#{el}</span>;
      })}
    </InterestFieldContainer>
  );
};

//////////////////////////////////////// Styled-Components
const InterestFieldContainer = styled.div`
  height: 245px;
  padding: 12px 0;

  span {
    display: block;
    float: left;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: var(--main-color);
    opacity: 75%;
    color: white;
    font-weight: bold;
    font-size: 1.4em;
  }
`;

export default InterestField;
