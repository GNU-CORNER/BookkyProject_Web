import styled from "styled-components";
import { useSelector } from "react-redux";
import BookCard from "../Cards/BookCard";

//MyInfo - 내 관심도서 컴포넌트
const InterestBooks = () => {
  const mybooks = useSelector((state) => state.books.interests);

  // View
  return (
    <InterestFieldContainer>
      {
        // 관심도서가 없을 때
        mybooks.length <= 0 ? (
          <div className="no-Books">관심도서가 없습니다</div>
        ) : (
          // 관심도서가 있을 때, 4개까지 출력
          mybooks.map((book, cnt) => {
            if (cnt < 4)
              return (
                <BookCard
                  key={book.BID}
                  bid={book.BID}
                  className="nodrag"
                  title={book.TITLE}
                  thumnail={book.thumbnailImage}
                  author={book.AUTHOR}
                  publisher={book.PUBLISHER}
                />
              );
            else return <></>;
          })
        )
      }
    </InterestFieldContainer>
  );
};

//////////////////////////////////////// Styled-Components
const InterestFieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 175px);
  overflow: hidden;
  padding: 9px 0 12px 0;

  .no-Books {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px;
  }
`;

export default InterestBooks;
