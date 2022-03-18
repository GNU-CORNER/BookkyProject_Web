import React from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scroll-menu";
import { ArrowLeft, ArrowRight } from "./Arrows";

const BookData = [
  {
    id: 1,
    title: "리액트를 다루는 기술",

    thumnail:
      "https://image.aladin.co.kr/product/20481/95/cover150/k662635453_1.jpg",
    author: "아브라함 동진",
    publisher: "한빛미디어",
  },
  {
    id: 2,
    title: "실전 SPA 개발 리액트 with 타입스크립트 + 스프링 부트 ",
    thumnail:
      "https://image.aladin.co.kr/product/28772/71/cover150/e972539312_1.jpg",
    author: "전인혁",
    publisher: "이지스 퍼블리싱",
  },
  {
    id: 3,
    title: "Do it! 리액트 네이티브 앱 프로그래밍 ",
    thumnail:
      "https://image.aladin.co.kr/product/26993/87/cover150/k372730617_1.jpg",
    author: "리오넬 혁주",
    publisher: "인사이트",
  },
  {
    id: 4,
    title: "Do it! 리액트 프로그래밍 정석 ",
    thumnail:
      "https://image.aladin.co.kr/product/23178/95/cover150/k332637108_1.jpg",
    author: "김우석",
    publisher: "위키북스",
  },
  {
    id: 1,
    title: "리액트를 다루는 기술",

    thumnail:
      "https://image.aladin.co.kr/product/20481/95/cover150/k662635453_1.jpg",
    author: "아브라함 동진",
    publisher: "한빛미디어",
  },
  {
    id: 2,
    title: "실전 SPA 개발 리액트 with 타입스크립트 + 스프링 부트 ",
    thumnail:
      "https://image.aladin.co.kr/product/28772/71/cover150/e972539312_1.jpg",
    author: "전인혁",
    publisher: "이지스 퍼블리싱",
  },
  {
    id: 3,
    title: "Do it! 리액트 네이티브 앱 프로그래밍 ",
    thumnail:
      "https://image.aladin.co.kr/product/26993/87/cover150/k372730617_1.jpg",
    author: "리오넬 혁주",
    publisher: "인사이트",
  },
  {
    id: 4,
    title: "Do it! 리액트 프로그래밍 정석 ",
    thumnail:
      "https://image.aladin.co.kr/product/23178/95/cover150/k332637108_1.jpg",
    author: "김우석",
    publisher: "위키북스",
  },
  {
    id: 5,
    title: "리액트를 다루는 기술",

    thumnail:
      "https://image.aladin.co.kr/product/20481/95/cover150/k662635453_1.jpg",
    author: "아브라함 동진",
    publisher: "한빛미디어",
  },
  {
    id: 6,
    title: "실전 SPA 개발 리액트 with 타입스크립트 + 스프링 부트 ",
    thumnail:
      "https://image.aladin.co.kr/product/28772/71/cover150/e972539312_1.jpg",
    author: "전인혁",
    publisher: "이지스 퍼블리싱",
  },
  {
    id: 7,
    title: "Do it! 리액트 네이티브 앱 프로그래밍 ",
    thumnail:
      "https://image.aladin.co.kr/product/26993/87/cover150/k372730617_1.jpg",
    author: "리오넬 혁주",
    publisher: "인사이트",
  },
  {
    id: 8,
    title: "Do it! 리액트 프로그래밍 정석 ",
    thumnail:
      "https://image.aladin.co.kr/product/23178/95/cover150/k332637108_1.jpg",
    author: "김우석",
    publisher: "위키북스",
  },
];

function SpreadBooks() {
  const BookCard = (book) => {
    return (
      <BookCardContainer>
        <ResizeImg src={book.thumnail} />
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
                key={book.id}
                title={book.title}
                thumnail={book.thumnail}
                author={book.author}
                publisher={book.publisher}
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
`;

export default SpreadBooks;
