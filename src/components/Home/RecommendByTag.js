import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../Cards/BookCard";
import Loading from "../Loading";
import { updateHomeBooks } from "../../redux-modules/books";
import { useCookies } from "react-cookie";
import { updateAccessToken } from "../../redux-modules/userData";

// 홈 - 태그 별 추천
const RecommendByTag = () => {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [nowSelect, setNowSelect] = useState({ data: "" });
  const [nowTMID, setNowTMID] = useState(0);
  const state = useSelector((state) => state);
  const baseURL = state.baseURL.url;
  const cookies = useCookies();

  // 만료된 AT 갱신
  function updateToken() {
    axios
      .post(
        baseURL + "auth/refresh",
        {},
        {
          headers: {
            "access-token": state.userData.accessToken,
            "refresh-token": cookies[0].refresh_token,
          },
        }
      )
      .then((res) => {
        console.log("토큰갱신 Response", res);
        dispatch(updateAccessToken(res.data.result.access_token));
      });
  }

  // 도서 데이터 Set
  const dataSet = useSelector((state) => state.books.homeBooks).filter(
    (element, index) => index > 0
  );

  // getData() : 서버 데이터 통신 함수 (책 목록 불러오기)
  function getData() {
    axios
      .get(baseURL + "home", {
        headers: {
          "access-token": user.accessToken,
        },
      })
      .then((res) => {
        dispatch(updateHomeBooks(res.data.result.bookList));
        setNowSelect(res.data.result.bookList[1]);
        setNowTMID(res.data.result.bookList[1].TMID);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          updateToken();
        }
      });
  }

  // ListOfBooks() : 태그 선택시 책 리스트 출력
  function ListOfBooks() {
    return nowSelect.data.map((el, cnt) => {
      if (cnt < 7) {
        return (
          <BookCard
            className="nodrag"
            key={el.TBID}
            bid={el.TBID}
            title={el.TITLE}
            thumnail={el.thumbnailImage}
            author={el.AUTHOR}
            publisher={el.PUBLISHER}
          />
        );
      } else {
        return <div key={el.TBID}></div>;
      }
    });
  }
  // 최초 렌더링 시, getData()
  useEffect(getData, [user.accessToken]);
  useEffect(updateToken, []);
  // 로딩 버튼 출력
  if (loading === true) {
    return <Loading />;
  }
  // View
  else
    return (
      <RecommendByTagContainer>
        {/* 태그 출력 영역*/}
        <div className="tagArray">
          {dataSet.map((el) => {
            return (
              <TagCard
                color={nowSelect.tag === el.tag ? "#ffffff" : "#000000"}
                backgroundColor={
                  nowSelect.tag === el.tag ? "var(--main-color)" : "#f1f1f1"
                }
                onClick={() => {
                  setNowSelect(el);
                  setNowTMID(el.TMID);
                }}
                key={el.tag}
              >
                <span>{"# " + el.tag}</span>
              </TagCard>
            );
          })}
        </div>

        {/* 도서 출력 영역*/}
        <Books>
          <ListOfBooks />
          <BookCard
            className="nodrag"
            title={"#" + nowSelect.tag}
            thumnail={require("../../assets/icons/home/more.png")}
            more={true}
            nowTMID={nowTMID}
          />
        </Books>
      </RecommendByTagContainer>
    );
};

//////////////////////////////////////// Styled-Components
const RecommendByTagContainer = styled.div`
  display: grid;
  width: 80vw;
`;

const TagCard = styled.div`
  transition: all 0.3s;
  display: inline-block;
  width: fit-content;
  margin: 5px;
  padding: 0 20px;
  line-height: 30px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-weight: bold;
  border-radius: 20px;
  font-size: 0.9em;
`;

const Books = styled.div`
  display: flex;
`;

export default RecommendByTag;
