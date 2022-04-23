import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Home from "./Home/Home";
import BookDetail from "./BookDetail";

import MyInfo from "./MyInfo/MyInfo";
import Interests from "./MyInfo/InterestBooks";
import SetInterests from "./MyInfo/SetInterests";

import Community from "./Community/Community";
import HotBoard from "./Community/HotBoard";
import FreeBoard from "./Community/FreeBoard";
import QnaBoard from "./Community/QnaBoard";
import TradeBoard from "./Community/TradeBoard";
import MyPost from "./MyInfo/MyPosts";

import Recommend from "./Recommend/Recommend";
import Detective from "./Recommend/Detective";
import Guide from "./Recommend/Guide";
import Error from "./Error";

import FindPassWord from "./Authentication/FindPassword";
import SignUp from "./Authentication/SignUp";
import SignUpMore from "./Authentication/SignUpMore";
import SearchResult from "./SearchResult";
import TagDetail from "./Home/TagDetail";

// 전체 URL 경로에 대한 명세
function BookkyRoutes() {
  const user = useSelector((state) => state.userData);
  const navigate = useNavigate();

  function isNullInterestField() {
    if (user.tagArray === null) {
      navigate("/setinterests");
    }
  }

  useEffect(isNullInterestField, [navigate, user.tagArray]);
  return (
    <RoutesContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/recommend" element={<Recommend />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupmore" element={<SignUpMore />} />
        <Route path="/find" element={<FindPassWord />} />

        <Route path="/interests" element={<Interests />} />
        <Route path="/myposts" element={<MyPost />} />
        <Route path="/myinfo" element={<MyInfo />} />

        <Route path="/free" element={<FreeBoard />} />
        <Route path="/qna" element={<QnaBoard />} />
        <Route path="/hot" element={<HotBoard />} />
        <Route path="/trade" element={<TradeBoard />} />

        <Route path="/detective" element={<Detective />} />
        <Route path="/guide" element={<Guide />} />

        <Route path="/setinterests" element={<SetInterests />} />
        <Route path="/books/:BID" element={<BookDetail />} />
        <Route path="/tag/:TID" element={<TagDetail />} />
        <Route path="/search" element={<SearchResult />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </RoutesContainer>
  );
}

//////////////////////////////////////// Styled-Components
const RoutesContainer = styled.div`
  margin: 64px 0 0 160px;
`;

export default BookkyRoutes;
