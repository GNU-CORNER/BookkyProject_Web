import styled from "styled-components";

// 태그를 표현하는 카드
const TagCard = ({ tag }) => {
  return (
    <TagCardContainer>
      <Tag># {tag}</Tag>
    </TagCardContainer>
  );
};

const TagCardContainer = styled.div`
  background-color: #f9f9f9;
  color: #6e95ff;
  border-radius: 4px;
  font-size: 0.9em;
  width: fit-content;
  max-width: 100px;
  padding: 3px 5px;
  margin: 5px auto;
  border: 1px solid #6e95ff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Tag = styled.div``;
export default TagCard;
