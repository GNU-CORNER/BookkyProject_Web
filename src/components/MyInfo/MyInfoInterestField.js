import styled from "styled-components";
import TagCard from "../Cards/TagCard";

//MyInfo - 내 관심분야 컴포넌트
const InterestField = ({ userTags }) => {
  // View
  return (
    <InterestFieldContainer>
      {userTags.map((el) => (
        <TagCard key={el.TMID} TMID={el.TMID} tag={el.tag} />
      ))}
    </InterestFieldContainer>
  );
};

//////////////////////////////////////// Styled-Components
const InterestFieldContainer = styled.div`
  height: 245px;
  padding: 12px 0;

  div {
    display: block;
    float: left;
    margin: 5px;
    border-radius: 4px;
    font-weight: bold;
  }
`;

export default InterestField;
