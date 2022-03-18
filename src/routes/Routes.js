import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Comunnity from "./Comunnity";
import Recommend from "./Recommend";
import Login from "./Login";
import Interests from "./Interests";
import SignUp from "./SignUp";
import MyInfo from "./MyInfo";
import FreeBoard from "./FreeBoard";
import QnaBoard from "./QnaBoard";
import Detective from "./Detective";
import Guide from "./Guide";

import styled from "styled-components";

function BookkyRoutes() {
  return (
    <RoutesContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/comunnity" element={<Comunnity />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myinfo" element={<MyInfo />} />

        <Route path="/free" element={<FreeBoard />} />
        <Route path="/qa" element={<QnaBoard />} />

        <Route path="/detective" element={<Detective />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </RoutesContainer>
  );
}

const RoutesContainer = styled.div`
  margin: 64px 0 0 160px;
`;

export default BookkyRoutes;
