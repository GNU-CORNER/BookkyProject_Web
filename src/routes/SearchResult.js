import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBookCard from "../components/Cards/SearchBookCard";
import PageHeader from "../components/PageHeader";

// 검색 결과 화면
const SearchResult = () => {
  // 변수 선언
  const query = useLocation().state.query;
  const state = useSelector((state) => state);
  const baseURL = state.baseURL.url;
  const SideNavState = state.SideNavState;
  const [books, setBooks] = useState([]);

  // getSearchResult() : 검색을 위한 서버와의 통신
  function getSearchResult() {
    axios
      .get(baseURL + "books/search", {
        params: { keyword: query },
      })
      .then((res) => {
        console.log(res);
        setBooks(res.data.result.searchData);
      });
  }

  // 검색 키워드 입력값 변화 시 마다 - 검색 함수 호출
  useEffect(getSearchResult, [query]);

  // 검색결과 View
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
                  BID={el.TBID}
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

//////////////////////////////////////// Styled-Components
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
