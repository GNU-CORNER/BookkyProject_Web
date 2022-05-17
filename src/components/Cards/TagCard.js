import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 태그를 표현하는 카드
const TagCard = ({ tag, TID }) => {
  const navigate = useNavigate();
  return (
    <TagCardContainer onClick={() => navigate("/tag/" + TID)}>
      <Tag># {tag}</Tag>
    </TagCardContainer>
  );
};

const TagCardContainer = styled.div`
  margin-right: 10px;
  background-color: #f9f9f9;
  color: var(--main-color);
  border-radius: 4px;
  font-size: 0.9em;
  width: fit-content;
  padding: 3px 5px;
  border: 1px solid var(--main-color);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  :hover {
    cursor: pointer;
  }
`;

const Tag = styled.div``;
export default TagCard;
