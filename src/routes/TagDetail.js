import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BookCard from "../components/Cards/BookCard";

// Home - Tag 더보기
const TagDetail = () => {
  // 변수 선언
  const location = useLocation();
  const [books, setBooks] = useState([{}]);
  const [tagName, setTagName] = useState("");
  const tagNum = location.pathname.split("/")[2];
  const state = useSelector((state) => state);
  const baseURL = state.baseURL.url;
  const user = state.userData;
  const SideNavState = state.SideNavState;

  // getBookData() : 태그에 따른 도서 데이터 불러오기 통신
  function getBookData() {
    axios.get(baseURL + "books/tag/" + tagNum).then((res) => {
      setTagName(res.data.result.bookList.tag);
      setBooks(res.data.result.bookList.data);
      console.log(res);
    });
  }

  // 태그 변화에 따른 도서 데이터 업데이트
  useEffect(getBookData, [tagNum]);

  // View
  return (
    <TagDetailContainer width={SideNavState.width}>
      <MainHeader>
        <Title className="nodrag">
          <p>
            <span className="name"># {tagName}</span> 관련 도서입니다
          </p>
          <p className="sub">
            총 <span>{books.length}권</span>의 도서가 있네요 !
          </p>
        </Title>
      </MainHeader>
      <ContentArea>
        {books.map((el, cnt) => {
          return (
            <BookCard
              className="nodrag"
              key={cnt}
              bid={el.TBID}
              title={el.TITLE}
              thumnail={el.thumbnailImage}
              author={el.AUTHOR}
              publisher={el.PUBLISHER}
            />
          );
        })}
      </ContentArea>
    </TagDetailContainer>
  );
};

//////////////////////////////////////// Styled-Components
const TagDetailContainer = styled.div`
  width: ${(props) => props.width};
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 15px;
  max-height: 250px;
  height: 180px;
  background-color: var(--main-color);
  margin: 5px 10px;
`;
const Title = styled.div`
  color: #f5f5f5;
  font-size: 2em;
  color: white;
  padding-left: 72px;

  .name {
    color: #ffd86d;
  }
  .sub {
    margin-top: 5px;
    color: #e9e9e9;
    font-size: 0.65em;
  }
`;

const ContentArea = styled.div`
  width: ${(props) => props.width};
  margin: 3vh 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, 180px);
  grid-template-rows: repeat(auto-fit, 250px);
  justify-content: start;
  column-gap: 2vw;
  row-gap: 3vh;

  .border {
    display: grid;
    justify-content: center;
    border: 2px solid #f1f1f1;
    transition: all 0.3s;
    border-radius: 4px;

    :hover {
      border: 2px solid var(--main-color);
      cursor: pointer;
    }
  }
`;
export default TagDetail;
