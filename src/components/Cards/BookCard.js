import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Home - SpreadBooks - 책 한 권마다의 표현 단위
const BookCard = (book) => {
  const navigate = useNavigate();
  return (
    <BookCardContainer
      width={"170px"}
      onClick={
        book.more
          ? () => navigate("/tag/" + book.nowTID)
          : () => navigate("/books/" + book.bid)
      }
    >
      <ResizeImg
        className="nodrag"
        src={book.thumnail}
        alt="이미지 로드 오류"
        width={"140px"}
        height={"180px"}
        draggable={false}
      />
      <Contents bold fontSize="0.90em">
        {book.title}
      </Contents>
      <Contents fontSize="0.80em">
        {book.author} {book.more ? "관련 도서 더 보기" : "/"} {book.publisher}
      </Contents>
    </BookCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const BookCardContainer = styled.div`
  width: ${(props) => props.width};
  padding: 5px;
  margin: 10px;
  text-align: center;
  border: 2px solid #ffffff;
  border-radius: 4px;
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    border: 2px solid var(--main-color);
  }

  :hover img {
    transform: scale(1.05);
  }
`;

const ResizeImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 5px;
  display: inline-block;
  object-fit: contain;
  transition: all 0.4s;
  border: 2px solid var(--bright-base-color);
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
