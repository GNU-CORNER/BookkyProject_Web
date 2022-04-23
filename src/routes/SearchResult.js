import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBookCard from "../components/Cards/SearchBookCard";
import PageHeader from "../components/PageHeader";

const test = ["1", "2", "3", "3", "3"];

// 검색 결과 화면
const SearchResult = () => {
  const query = useLocation().state.query;

  return (
    <SearchResultContainer>
      <PageHeader title="검색 결과" />
      <Contents>
        <div className="explain">
          {`"`}
          <span className="query">{query}</span>
          {`"`} (으)로 검색한 결과에요{" "}
          <span className="cnt">( {test.length}건 )</span>
        </div>
        <hr />
        <hr />
        {test.map((el) => {
          return <SearchBookCard />;
        })}
      </Contents>
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  width: calc(100vw - 160px);

  .explain {
    font-size: 1.1em;
    margin: 10px 0;

    span.query {
      font-weight: bold;
      color: #6e95ff;
    }

    span.cnt {
      color: #808080;
      font-size: 0.9em;
    }
  }
`;

const Contents = styled.div`
  margin: 0 108px;
  display: flex;
  flex-direction: column;
`;
export default SearchResult;
