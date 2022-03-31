import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./components/Navigation/TopNav";
import SideNav from "./components/Navigation/SideNav";
import Routes from "./routes/Routes";
import { useCookies } from "react-cookie";
import axios from "axios";
import { updateUser } from "./redux-modules/userData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// App() : 최상위 컴포넌트
function App() {
  // 변수 정의
  const cookies = useCookies();
  const dispatch = useDispatch();

  // 자동로그인 통신
  const AutoLogin = () => {
    // 쿠키 내의 autologin이 true일 때
    if (cookies[0].autologin === "true") {
      // 통신 - 로그인 시도 (이메일, 비밀번호)
      axios
        .post(
          "http://203.255.3.144:8002/v1/user/signin",
          JSON.stringify({
            email: localStorage.getItem("email"),
            pwToken: localStorage.getItem("password"),
          }),
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          // 로그인 통신 성공 시
          if (res.data.success === true) {
            console.log("자동로그인 성공");
            dispatch(
              updateUser(
                res.data.access_token,
                res.data.result.email,
                res.data.result.nickname
              )
            );
          }
          // 로그인 통신 실패 시
          else {
            console.log("로그인 실패");
          }
        });
    }
  };

  // 최초 렌더링 시 AutoLogin()
  useEffect(AutoLogin, [cookies, dispatch]);

  // App View
  return (
    <>
      <GlobalStyle />
      <Router>
        <TopNav />
        <FlexDiv>
          <SideNav />
          <Routes />
        </FlexDiv>
      </Router>
    </>
  );
}

//////////////////////////////////////// Styled-Components
const FlexDiv = styled.div`
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
	body {
    margin : 0;
    padding : 0;

  /* 스크롤바 hidden */
  ::-webkit-scrollbar {
    display: none;
  }
  .nodrag {
    /* 드래그 방지 CSS */
    -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}}
`;
export default App;
