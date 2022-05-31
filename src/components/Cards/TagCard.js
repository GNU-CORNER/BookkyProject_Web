import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 태그를 표현하는 카드
const TagCard = ({ tag, TMID }) => {
  const navigate = useNavigate();
  return (
    <TagCardContainer onClick={() => navigate("/tag/" + TMID)}>
      <div># {tag}</div>
    </TagCardContainer>
  );
};

const TagCardContainer = styled.div`
  margin-right: 10px;
  background-color: #f1f1f1;
  color: var(--bright-base-font-color);
  border-radius: 4px;
  font-size: 0.9em;
  width: fit-content;
  padding: 3px 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: var(--main-color);
  }
  :hover div {
    color: white;
  }
`;

export default TagCard;
