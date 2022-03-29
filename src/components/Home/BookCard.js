import styled from "styled-components";

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

const BookCardContainer = styled.div`
  text-align: center;
  width: 190px;
  margin: 10px 20px;
`;

const ResizeImg = styled.img`
  width: 170px;
  height: 220px;
  border: 1px solid #e7e7e7;
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
