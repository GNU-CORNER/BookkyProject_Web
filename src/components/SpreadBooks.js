import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scroll-menu";
import { ArrowLeft, ArrowRight } from "./Arrows";
import axios from "axios";
import { useSelector } from "react-redux";

function SpreadBooks() {
  const [BookData, setBookData] = useState([{}]);
  const user = useSelector((state) => state.userData);

  // 서버 데이터 통신 (책 목록)
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

  useEffect(getData);

  const BookCard = (book) => {
    return (
      <BookCardContainer>
        <ResizeImg src={book.thumnail} alt="이미지 로드 오류" />
        <Contents bold fontSize="1.2rem">
          {book.title}
        </Contents>
        <Contents fontSize="0.9rem">
          {book.author} / {book.publisher}
        </Contents>
      </BookCardContainer>
    );
  };

  return (
    <>
      <Test>
        <ScrollMenu
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          data={BookData.map((book) => {
            return (
              <BookCard
                key={book.BID}
                title={book.TITLE}
                thumnail={book.thumnail}
                author={book.AUTHOR}
                publisher={book.PUBLISHER}
              />
            );
          })}
        />
      </Test>
    </>
  );
}

///////// Styled-components /////////
const BookCardContainer = styled.div`
  text-align: center;
  width: 200px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin: 20px;
`;

const ResizeImg = styled.img`
  width: 170px;
  height: 244px;
  display: inline-block;
  object-fit: contain;
`;

const Contents = styled.div`
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
`;

const Test = styled.div`
  margin: 0 100px;

  :hover {
    overflow-y: hidden;
  }
`;

export default SpreadBooks;
