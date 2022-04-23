import styled from "styled-components";

// Home - SpreadBooks - 책 한 권마다의 표현 단위
const BookCard = (book) => {
  return (
    <BookCardContainer width={"180px"}>
      <ResizeImg
        className="nodrag"
        src={book.thumnail}
        alt="이미지 로드 오류"
        width={"170px"}
        height={"220px"}
        draggable={false}
      />
      <Contents bold fontSize="1em" width={"180px"}>
        {book.title}
      </Contents>
      <Contents fontSize="0.8em" width={"180px"}>
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
  box-shadow: 2px 1px 2px 2px black;
  display: inline-block;
  object-fit: fill;
  transition: all 0.3s;

  :hover {
    transform: scale(1.07);
  }
`;

const Contents = styled.div`
  width: ${(props) => props.width};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "600" : "")};
`;

export default BookCard;
