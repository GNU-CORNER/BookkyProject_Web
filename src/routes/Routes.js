import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Comunnity from "./Comunnity";
import Recommend from "./Recommend";
import Login from "./Login";
import Interests from "./Interests";
import SignUp from "./SignUp";
import MyInfo from "./MyInfo";
import styled from "styled-components";

function BookkyRoutes() {
  return (
    <RoutesContainer>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Comunnity" element={<Comunnity />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Interests" element={<Interests />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyInfo" element={<MyInfo />} />
      </Routes>
    </RoutesContainer>
  );
}

const RoutesContainer = styled.div`
  margin: 64px 0 0 160px;
`;

export default BookkyRoutes;
