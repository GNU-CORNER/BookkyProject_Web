import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scroll-menu";
import { ArrowLeft, ArrowRight } from "./Arrows";
import axios from "axios";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

// Home - 책 목록 가로 스크롤 뷰 출력
function SpreadBooks() {
  // 변수 선언
  const [BookData, setBookData] = useState([{}]);
  const user = useSelector((state) => state.userData);

  // getData() : 서버 데이터 통신 함수 (책 목록 불러오기)
  function getData() {
    axios
      .get("http://203.255.3.144:8002/v1/test2/0", {
        headers: {
          Authorization: user.accessToken,
        },
        params: { quantity: "25", page: "1" },
      })
      .then((res) => {
        console.log(res.data.result);
        setBookData(res.data.result);
      });
  }

  // 최초 렌더링 시, getData()
  useEffect(getData, []);

  // 책 목록 출력
  return (
    <>
      <BooksContainer>
        <ScrollMenu
          alignCenter={false}
          wheel={false}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          data={BookData.map((book) => {
            return (
              <BookCard
                className="nodrag"
                key={book.BID}
                title={book.TITLE}
                thumnail={book.thumbnailImage}
                author={book.AUTHOR}
                publisher={book.PUBLISHER}
              />
            );
          })}
        />
      </BooksContainer>
    </>
  );
}

//////////////////////////////////////// Styled-Components
const BooksContainer = styled.div`
  margin: 0 100px;
  transition: all 0.3s;

  .scroll-menu-arrow {
    padding: 20px;
  }

  .menu-item-wrapper {
    border: 2px solid #f7f7f7;
    border-radius: 4px;
    margin: 0 10px;
    transition: all 0.3s;

    :hover {
      border: 2px solid #6e95ff;
    }
  }
`;

export default SpreadBooks;
