import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <SideNavContainer>
        <StyledLink to="/Interests">관심 도서</StyledLink>
        <StyledLink to="/Comunnity">내 글 보기</StyledLink>
        <StyledLink to="/Profile">내 후기 보기</StyledLink>
        <StyledLink to="/Login">Login</StyledLink>
        <StyledLink to="/SignUp">SignUp</StyledLink>
      </SideNavContainer>
    </>
  );
}

const SideNavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: calc(100vh - 64px);
  margin-top: 64px;
  border-right: 1px solid #e5e5e5;
  background-color: #ffffff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 12px;
`;

export default SideNav;
