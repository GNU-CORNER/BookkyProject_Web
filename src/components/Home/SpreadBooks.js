import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scroll-menu";
import { ArrowLeft, ArrowRight } from "./Arrows";
import axios from "axios";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import Loading from "../Loading";

// Home - 책 목록 가로 스크롤 뷰 출력
function SpreadBooks() {
  // 변수 선언
  const [dataSet, setBookData] = useState([
    {
      tag: "",
      data: [],
    },
  ]);
  const user = useSelector((state) => state.userData);
  const [loading, setLoading] = useState(true);

  // getData() : 서버 데이터 통신 함수 (책 목록 불러오기)
  function getData() {
    axios
      .get("http://203.255.3.144:8002/v1/test2/1", {
        headers: {
          Authorization: user.accessToken,
        },
        params: { quantity: "10", page: "1" },
      })
      .then((res) => {
        console.log("책 목록", res);
        setBookData(res.data.result);
        setLoading(false);
      });
  }

  // 태그 별 가로 스크롤 뷰 출력
  function mapTags(tags) {
    if (loading === true) {
      return <Loading />;
    } else
      return (
        <ScrollMenu
          alignCenter={false}
          wheel={false}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          // 가로 스크롤 뷰 내의 아이템들을 출력
          data={tags.map((el) => {
            return (
              <BookCard
                className="nodrag"
                key={el.BID}
                title={el.TITLE}
                thumnail={el.thumbnailImage}
                author={el.AUTHOR}
                publisher={el.PUBLISHER}
              />
            );
          })}
        />
      );
  }

  // 최초 렌더링 시, getData()
  useEffect(getData, [user.accessToken]);

  // 책 목록 출력
  return (
    <>
      {dataSet.map((el) => {
        return (
          <>
            <TagTitle>{el.tag}</TagTitle>
            {mapTags(el.data)}
          </>
        );
      })}
    </>
  );
}

//////////////////////////////////////// Styled-Components

const TagTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  padding: 5vh 0 0 5vw;
`;
export default SpreadBooks;
