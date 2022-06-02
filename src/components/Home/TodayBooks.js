import styled from "styled-components";
import TodayBookCard from "../Cards/TodayBookCard";

// 홈 - 오늘의 추천 도서
const TodayBooks = () => {
  // View
  return (
    <TodayBooksContainer>
      <TodayBookCard />
      <TodayBookCard />
      <TodayBookCard />
      <TodayBookCard />
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
