import { useSelector } from "react-redux";
import styled from "styled-components";
import TodayBookCard from "../Cards/TodayBookCard";

// 홈 - 오늘의 추천 도서
const TodayBooks = () => {
  const books = useSelector((state) => state.books);

  // View
  return (
    <TodayBooksContainer>
      {books.homeBooks[0].data.map((el, cnt) => {
        if (cnt < 4)
          return (
            <TodayBookCard
              key={cnt}
              TBID={el.TBID}
              thumbnailImage={el.thumbnailImage}
            />
          );
      })}
    </TodayBooksContainer>
  );
};

//////////////////////////////////////// Styled-Components
const TodayBooksContainer = styled.div`
  position: absolute;
  right: 6vw;
  display: flex;
`;

export default TodayBooks;
