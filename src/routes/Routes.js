import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Comunnity from "./Comunnity";
import Recommend from "./Recommend";
import Error from "./Error";
import Interests from "./Interests";
import SignUp from "./SignUp";
import MyInfo from "./MyInfo";
import FreeBoard from "./FreeBoard";
import QnaBoard from "./QnaBoard";
import Detective from "./Detective";
import Guide from "./Guide";

import styled from "styled-components";
import FindPassWord from "./FindPassword";
import HotBoard from "./HotBoard";
import TradeBoard from "./TradeBoard";

function BookkyRoutes() {
  return (
    <RoutesContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/comunnity" element={<Comunnity />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find" element={<FindPassWord />} />
        <Route path="/myinfo" element={<MyInfo />} />

        <Route path="/free" element={<FreeBoard />} />
        <Route path="/qna" element={<QnaBoard />} />
        <Route path="/hot" element={<HotBoard />} />
        <Route path="/trade" element={<TradeBoard />} />

        <Route path="/detective" element={<Detective />} />
        <Route path="/guide" element={<Guide />} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </RoutesContainer>
  );
}

const RoutesContainer = styled.div`
  margin: 64px 0 0 160px;
`;

export default BookkyRoutes;
