import styled from "styled-components";
import { useSelector } from "react-redux";
import SmallBookCard from "../Home/Cards/SmallBookCard";

//MyInfo - 내 관심도서 컴포넌트
const InterestBooks = () => {
  const mybooks = useSelector((state) => state.books.interests);

  return (
    <InterestFieldContainer>
      {mybooks.map((book) => {
        return (
          <SmallBookCard
            key={book.BID}
            className="nodrag"
            title={book.TITLE}
            thumnail={book.thumbnailImage}
            author={book.AUTHOR}
            publisher={book.PUBLISHER}
          />
        );
      })}
    </InterestFieldContainer>
  );
};

//////////////////////////////////////// Styled-Components
const InterestFieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 175px);
  overflow: hidden;
  height: 245px;
  padding: 9px 0 12px 0;
`;

export default InterestBooks;
