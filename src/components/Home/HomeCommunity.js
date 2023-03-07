import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Posts from "./Posts";

// 홈 - 홈 커뮤니티 요약 영역
const HomeCommunity = () => {
  // 변수 선언
  const navigate = useNavigate();
  const [freePosts, setFreePosts] = useState([{ title: "", PID: 0 }]);
  const [QnaPosts, setQnaPosts] = useState([{ title: "", PID: 0 }]);
  const [HotPosts, sethotPosts] = useState([{ title: "", PID: 0 }]);
  const [TradePosts, setTradePosts] = useState([{ title: "", PID: 0 }]);
  const state = useSelector((state) => state);
  const baseURL = state.baseURL.url;

  // getPosts() : 게시글 정보를 불러와 변수에 저장
  function getPosts() {
    axios.get(baseURL + "community/home").then((res) => {
      setFreePosts(res.data.result.AnyList);
      setQnaPosts(res.data.result.QnAList);
      sethotPosts(res.data.result.HotList);
      setTradePosts(res.data.result.MarketList);
    });
  }

  // 최초 로드시, getPosts 호출
  useEffect(getPosts, [baseURL]);

  // View
  return (
    <HomeCommunityContainer>
      <div className="board">
        <h3 onClick={() => navigate("/hot/1")}>Hot게시판 {">"}</h3>
        <Posts posts={HotPosts} slug={0} />
      </div>
      <div className="board">
        <h3 onClick={() => navigate("/free/1")}>자유게시판 {">"}</h3>
        <Posts posts={freePosts} slug={0} />
      </div>
      <div className="board">
        <h3 onClick={() => navigate("/qna/1")}>
          Q{"&"}A게시판 {">"}
        </h3>
        <Posts posts={QnaPosts} slug={2} />
      </div>
      <div className="board">
        <h3 onClick={() => navigate("/trade/1")}>중고장터 {">"}</h3>
        <Posts posts={TradePosts} slug={1} />
      </div>
    </HomeCommunityContainer>
  );
};

//////////////////////////////////////// Styled-Components
const HomeCommunityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 430px);
  justify-content: center;

  h3 {
    margin-bottom: 5px;
    width: 120px;
    font-size: 1em;
    font-weight: bold;
    margin-left: 0;
    transition: all 0.3s;

    :hover {
      color: var(--main-color);
      cursor: pointer;
      margin-left: 10px;
    }
  }

  .board {
    position: relative;
    height: 120px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 0 5px 5px 5px;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  }
`;

export default HomeCommunity;
