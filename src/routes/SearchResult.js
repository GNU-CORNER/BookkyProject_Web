import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBookCard from "../components/Cards/SearchBookCard";
import PageHeader from "../components/PageHeader";

// 검색 결과 화면
const SearchResult = () => {
  const query = useLocation().state.query;
  const SideNavState = useSelector((state) => state.SideNavState);
  const [books, setBooks] = useState([]);

  function getSearchResult() {
    axios
      .get("http://203.255.3.144:8002/v1/books/search", {
        params: { keyword: query },
      })
      .then((res) => setBooks(res.data.result));
  }

  useEffect(getSearchResult, [query]);

  return (
    <SearchResultContainer width={SideNavState.width}>
      <PageHeader title="검색 결과" />
      <Contents>
        <div className="explain">
          {`"`}
          <span className="query">{query}</span>
          {`"`} (으)로 검색한 결과에요{" "}
          <span className="cnt">( {books.length}건 )</span>
        </div>
        <hr />
        <hr />
        {books.length === 0
          ? "검색 결과가 없습니다."
          : books.map((el, cnt) => {
              return (
                <SearchBookCard
                  key={cnt}
                  BID={el.BID}
                  TITLE={el.TITLE}
                  AUTHOR={el.AUTHOR}
                  BOOK_INTRODUCTION={el.BOOK_INTRODUCTION}
                  PUBLISH_DATE={el.PUBLISH_DATE}
                  RATING={el.RATING}
                  tagData={el.tagData}
                  thumbnailImage={el.thumbnailImage}
                  PUBLISHER={el.PUBLISHER}
                />
              );
            })}
      </Contents>
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  width: ${(props) => props.width};

  .explain {
    font-size: 1.1em;
    margin: 10px 0;

    span.query {
      font-weight: bold;
      color: var(--main-color);
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
