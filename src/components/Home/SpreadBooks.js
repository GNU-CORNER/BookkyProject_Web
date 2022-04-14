import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scroll-menu";
import { ArrowLeft, ArrowRight } from "./Arrows";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../Cards/BookCard";
import Loading from "../Loading";
import { updateHomeBooks } from "../../redux-modules/books";

// Home - 책 목록 가로 스크롤 뷰 출력
function SpreadBooks() {
  // 변수 선언
  const dataSet = useSelector((state) => state.books.homeBooks);
  const user = useSelector((state) => state.userData);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // getData() : 서버 데이터 통신 함수 (책 목록 불러오기)
  function getData() {
    console.log("요놈인데");
    axios
      .get("http://203.255.3.144:8002/v1/home", {
        headers: {
          "access-token": user.accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(updateHomeBooks(res.data.result.bookList));
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
  useEffect(getData, [user.accessToken, dispatch]);

  // 책 목록 출력
  return (
    <>
      {dataSet.map((el) => {
        return (
          <div key={el.tag}>
            <TagTitle>
              <div>{el.tag}</div>
            </TagTitle>
            {mapTags(el.data)}
          </div>
        );
      })}
    </>
  );
}

//////////////////////////////////////// Styled-Components
const TagTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  padding: 7vh 0 2vh 1vw;

  div {
    width: fit-content;
    padding: 0 15px;
    border-left: 10px solid #6e95ff;
    border-radius: 4px;
  }
`;
export default SpreadBooks;
