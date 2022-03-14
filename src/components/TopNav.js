import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <>
      <TestDiv>
        <img src={require("../assets/Group_379.png")} alt="" />
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/Comunnity">커뮤니티</StyledLink>
        <StyledLink to="/Recommend">추천하개</StyledLink>
      </TestDiv>
    </>
  );
}

///////// Styled-components /////////
const TestDiv = styled.div`
  background-color: #ffffff;
  position: fixed;
  display: flex;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #e5e5e5;
`;

const StyledLink = styled(Link)`
  width: 100px;
  line-height: 64px;
  vertical-align: middle;
  text-align: center;
`;

export default TopNav;
