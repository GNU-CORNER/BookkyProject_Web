import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Coumunnity from "./Comunnity";
import Recommend from "./Recommend";
import Login from "./Login";
import Interests from "./Interests";
import SignUp from "./SignUp";
import Profile from "./Profile";

function BookkyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Comunnity" element={<Coumunnity />} />
      <Route path="/Recommend" element={<Recommend />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Interests" element={<Interests />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default BookkyRoutes;
