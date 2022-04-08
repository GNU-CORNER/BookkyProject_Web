import styled from "styled-components";

const SmallBookCard = (book) => {
  return (
    <BookCardContainer width={"150px"}>
      <ResizeImg
        className="nodrag"
        src={book.thumnail}
        alt="이미지 로드 오류"
        width={"130px"}
        height={"159px"}
        draggable={false}
      />
      <Contents bold fontSize="0.8em" width={"150px"}>
        {book.title}
      </Contents>
      <Contents fontSize="0.7em" width={"150px"}>
        {book.author} / {book.publisher}
      </Contents>
    </BookCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const BookCardContainer = styled.div`
  width: ${(props) => props.width};
  margin: 10px 20px;
  text-align: center;
`;

const ResizeImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 5px;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 2px #e1e1e1;
  display: inline-block;
  object-fit: fill;
`;

const Contents = styled.div`
  width: ${(props) => props.width};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "600" : "")};
`;

export default SmallBookCard;
