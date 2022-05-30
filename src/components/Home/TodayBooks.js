import styled from "styled-components";
import TodayBookCard from "../Cards/TodayBookCard";

const TodayBooks = () => {
  return (
    <TodayBooksContainer>
      <TodayBookCard />
      <TodayBookCard />
      <TodayBookCard />
      <TodayBookCard />
    </TodayBooksContainer>
  );
};

const TodayBooksContainer = styled.div`
  position: absolute;
  right: 6vw;
  display: flex;
`;
export default TodayBooks;
