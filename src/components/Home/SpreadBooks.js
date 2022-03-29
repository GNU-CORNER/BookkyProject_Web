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
        params: { quantity: "100", page: "1" },
      })
      .then((res) => {
        console.log(res.data.result);
        setBookData(res.data.result);
      });
  }

  useEffect(getData, []);

  const BookCard = (book) => {
    return (
      <BookCardContainer>
        <ResizeImg
          className="nodrag"
          src={book.thumnail}
          alt="이미지 로드 오류"
          draggable={false}
        />
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
      </Test>
    </>
  );
}

///////// Styled-components /////////
const BookCardContainer = styled.div`
  text-align: center;
  width: 190px;
  margin: 20px;
`;

const ResizeImg = styled.img`
  width: 170px;
  height: 220px;
  border: 1px solid #e7e7e7;
  display: inline-block;
  object-fit: fill;
`;

const Contents = styled.div`
  width: 180px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
`;

const Test = styled.div`
  margin: 0 100px;
  transition: all 0.3s;

  .menu-item-wrapper {
    border: 2px solid #e5e5e5;
    border-radius: 4px;
    margin: 0 10px;
    transition: all 0.3s;

    :hover {
      border: 2px solid #6e95ff;
    }
  }
`;

export default SpreadBooks;
