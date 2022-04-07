import styled from "styled-components";

// Home - SpreadBooks - 책 한 권마다의 표현 단위
const BookCard = (book) => {
  return (
    <BookCardContainer>
      <ResizeImg
        className="nodrag"
        src={book.thumnail}
        alt="이미지 로드 오류"
        draggable={false}
      />
      <Contents bold fontSize="1em">
        {book.title}
      </Contents>
      <Contents fontSize="0.8em">
        {book.author} / {book.publisher}
      </Contents>
    </BookCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const BookCardContainer = styled.div`
  width: 190px;
  margin: 10px 20px;
  text-align: center;
`;

const ResizeImg = styled.img`
  width: 170px;
  height: 220px;
  margin: 5px;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 2px #e1e1e1;
  display: inline-block;
  object-fit: fill;
`;

const Contents = styled.div`
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "600" : "")};
`;

export default BookCard;
