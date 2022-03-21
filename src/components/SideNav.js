import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Profile from "../routes/Profile";

const Token = "";

function SideNav() {
  //사용자가 로그인 안했을 때, 했을 때
  if (!Token) {
    return (
      <>
        <SideNavContainer>
          <Profile />
          <StyledLink to="hello" className="LoginBtn">
            로그인
          </StyledLink>
          <StyledLink to="/signup" className="SignUpBtn">
            개서적이 처음이신가요?
          </StyledLink>
        </SideNavContainer>
      </>
    );
  } else {
    return (
      <>
        <SideNavContainer>
          <Profile />
          <StyledLink to="/interests">관심 도서</StyledLink>
          <StyledLink to="/comunnity">내 글 보기</StyledLink>
          <StyledLink to="/myinfo">내 후기 보기</StyledLink>
        </SideNavContainer>
      </>
    );
  }
}
///////// Styled-components /////////
const SideNavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: calc(100vh - 64px);
  margin-top: 64px;
  border-right: 1px solid #e5e5e5;
  background-color: #ffffff;

  .LoginBtn {
    margin: 15px auto 15px auto;
    width: 145px;
    line-height: 25px;
    color: white;
    border-radius: 20px;
    background-color: #6c95ff;
    text-align: center;
    font-size: 0.8em;
  }

  .SignUpBtn {
    color: #6c95ff;
    margin: 0 auto;
    font-size: 0.8em;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default SideNav;
