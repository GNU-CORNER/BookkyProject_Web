import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import LoginModalContainer from "../redux-containers/LoginModalContainer";
import { useSelector } from "react-redux";
import BottomMenu from "./BottomMenu";

function SideNav() {
  const user = useSelector((state) => state.userData);
  console.log("userselect", user);

  // 유저 accessToken이 있을 때 (회원)
  if (user.accessToken) {
    return (
      <>
        <SideNavContainer mainColor={"#"}>
          <Profile />
          <div className="sidemenu-area">
            <StyledLink to="/interests" className="MenuBtn">
              관심 도서
            </StyledLink>
            <StyledLink to="/comunnity" className="MenuBtn">
              내 글 보기
            </StyledLink>
            <StyledLink to="/myinfo" className="MenuBtn">
              내 후기 보기
            </StyledLink>
          </div>
          <BottomMenu />
        </SideNavContainer>
      </>
    );
  } else {
    return (
      <>
        <SideNavContainer>
          <Profile />
          <LoginModalContainer />
          <StyledLink to="/signup" className="SignUpBtn">
            개서적이 처음이신가요?
          </StyledLink>
          <BottomMenu />
        </SideNavContainer>
      </>
    );
  }
}

///////// Styled-components /////////
const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 160px;
  height: calc(100vh - 64px);
  margin-top: 64px;
  border-right: 1px solid #e5e5e5;
  background-color: #ffffff;

  .sidemenu-area {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e5e5e5;
    padding: 2.5px 0;
  }

  .MenuBtn {
    margin: 5px 20px;
    font-weight: bold;
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
