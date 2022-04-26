import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../Cards/BookCard";
import Loading from "../Loading";
import { updateHomeBooks } from "../../redux-modules/books";
import { useNavigate } from "react-router-dom";

const RecommendByTag = () => {
  // 변수 선언
  const navigate = useNavigate();
  const dataSet = useSelector((state) => state.books.homeBooks);
  const user = useSelector((state) => state.userData);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [nowSelect, setNowSelect] = useState([{ TITLE: "", BID: 0 }]);

  // getData() : 서버 데이터 통신 함수 (책 목록 불러오기)
  function getData() {
    axios
      .get("http://203.255.3.144:8002/v1/home", {
        headers: {
          "access-token": user.accessToken,
        },
      })
      .then((res) => {
        dispatch(updateHomeBooks(res.data.result.bookList));
        setNowSelect(res.data.result.bookList[0].data);
        setLoading(false);
      });
  }

  // 태그 선택시 책 리스트 출력
  const ListOfBooks = () =>
    nowSelect.map((el, cnt) => {
      if (cnt < 7) {
        return (
          <BookCard
            className="nodrag"
            key={el.BID}
            bid={el.BID}
            title={el.TITLE}
            thumnail={el.thumbnailImage}
            author={el.AUTHOR}
            publisher={el.PUBLISHER}
          />
        );
      } else {
        return <div key={el.BID}></div>;
      }
    });

  // 최초 렌더링 시, getData()
  useEffect(getData, [user.accessToken, dispatch]);

  if (loading === true) {
    return <Loading />;
  } else
    return (
      <RecommendByTagContainer>
        <div className="tagArray">
          {dataSet.map((el) => {
            return (
              <TagCard onClick={() => setNowSelect(el.data)} key={el.tag}>
                <span>{"# " + el.tag}</span>
              </TagCard>
            );
          })}
        </div>
        <Books>
          <ListOfBooks />
          <BookCard
            className="nodrag"
            onClick={() => navigate("/books/")}
            title="# React"
            thumnail={require("../../assets/icons/more.png")}
            more={true}
          />
        </Books>
      </RecommendByTagContainer>
    );
};

const RecommendByTagContainer = styled.div`
  display: grid;

  .tagArray {
    margin-left: 20px;
  }
`;

const TagCard = styled.div`
  display: inline-block;
  width: fit-content;
  margin: 5px;
  padding: 0 20px;
  line-height: 30px;
  background-color: #f1f1f1;
  font-weight: bold;
  border-radius: 20px;
  font-size: 0.9em;
`;

const Books = styled.div`
  display: flex;
`;

export default RecommendByTag;
