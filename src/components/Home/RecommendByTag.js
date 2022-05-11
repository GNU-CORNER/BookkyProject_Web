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
  const todayBooks = useSelector((state) => state.books.homeBooks)[0];
  const dataSet = useSelector((state) => state.books.homeBooks).filter(
    (element, index) => index > 0
  );
  const user = useSelector((state) => state.userData);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [nowSelect, setNowSelect] = useState({ data: "" });
  const [nowTID, setNowTID] = useState(0);

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
        setNowSelect(res.data.result.bookList[1]);
        setNowTID(res.data.result.bookList[1].TID);
        setLoading(false);
      });
  }

  // 태그 선택시 책 리스트 출력
  const ListOfBooks = () =>
    nowSelect.data.map((el, cnt) => {
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
              <TagCard
                color={nowSelect.tag === el.tag ? "#ffffff" : "#000000"}
                backgroundColor={
                  nowSelect.tag === el.tag ? "#6e95ff" : "#f1f1f1"
                }
                onClick={() => {
                  setNowSelect(el);
                  setNowTID(el.TID);
                }}
                key={el.tag}
              >
                <span>{"# " + el.tag}</span>
              </TagCard>
            );
          })}
        </div>
        <Books>
          <ListOfBooks />
          <BookCard
            className="nodrag"
            title={"#" + nowSelect.tag}
            thumnail={require("../../assets/icons/home/more.png")}
            more={true}
            nowTID={nowTID}
          />
        </Books>
      </RecommendByTagContainer>
    );
};

const RecommendByTagContainer = styled.div`
  display: grid;
  width: 80vw;

  .tagArray {
  }
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
