import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import LoginModalContainer from "../../redux-containers/LoginModalContainer";
import { useDispatch, useSelector } from "react-redux";
import BottomMenu from "./BottomMenu";
import { setFold, setWidth } from "../../redux-modules/sideNav";
import SideNavFoldBtn from "./SideNavFoldBtn";

// 사이드 네비게이션 바
function SideNav() {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  // 회원일 때 (userData에 유저 nickname이 있을 때)
  if (user.nickname) {
    return (
      <>
        <SideNavContainer>
          <Profile />
          <div className="sidemenu-area">
            <div className="explain">바로가기</div>
            <StyledLink to="/interests" className="MenuBtn">
              관심 도서
            </StyledLink>
            <StyledLink to="/myposts" className="MenuBtn">
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
  }

  // 비회원일 때 (userData에 유저 nickname이 없을 때)
  else {
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

//////////////////////////////////////// Styled-Components
const SideNavContainer = styled.div`
  //사이드바 접으면 여기 바꿔야아함 (display:flex)
  display: block;
  flex-direction: column;
  position: fixed;
  width: 160px;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: #ffffff;
  transition: all 0.4s;

  .sidemenu-area {
    margin-top: 1.5vh;
    display: flex;
    flex-direction: column;

    .explain {
      color: #808080;
      font-size: 0.8em;
      margin: 5px 10px;
    }
  }

  .MenuBtn {
    margin: 10px 25px;
    font-weight: bold;
    transition: all 0.3s;

    :hover {
      margin-left: 35px;
    }
  }

  .SignUpBtn {
    display: flex;
    justify-content: center;
    color: #6c95ff;
    font-size: 0.8em;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default SideNav;
