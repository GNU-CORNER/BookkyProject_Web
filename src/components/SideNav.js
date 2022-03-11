import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <SideNavContainer>
        <li>
          <Link to="/Interests">관심 도서</Link>
        </li>
        <li>
          <Link to="/Comunnity">내 글 보기</Link>
        </li>
        <li>
          <Link to="/Profile">내 후기 보기</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </SideNavContainer>
    </>
  );
}

const SideNavContainer = styled.ul`
  margin: 0;
  text-decoration: none;
  width: 160px;
  height: calc(100vh - 64px);
  background-color: blue;
`;

export default SideNav;
