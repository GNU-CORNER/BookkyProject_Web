import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
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
  const [email, setEmail] = useState(undefined);
  const [pwToken, setPwToken] = useState(undefined);

  // 최초 email, pwToken 설정
  const Init = () => {
    // Case 1 : 자동로그인이 true 일 때는 로컬스토리지의 email, pwToken 사용
    if (cookies[0].autologin === "true") {
      setEmail(localStorage.getItem("email"));
      setPwToken(localStorage.getItem("password"));
    }
    // Case 2 : 다른 경우에는 쿠키의 email, pwToken 사용
    else if (cookies[0].email !== "" && cookies[0].pwToken !== "") {
      setEmail(cookies[0].email);
      setPwToken(cookies[0].pwToken);
    }
  };
  // 자동로그인 통신
  const AutoLogin = () => {
    // email, pwToken이 undefined가 아닐 때만 통신 (불필요한 통신 방지)
    if ((email !== undefined) | (pwToken !== undefined)) {
      // 통신 - 로그인 시도 (이메일, 비밀번호)
      axios
        .post(
          "http://203.255.3.144:8002/v1/user/signin",
          JSON.stringify({
            email: email,
            pwToken: pwToken,
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

  // 최초 렌더링 시, Init() AutoLogin()
  useEffect(Init, []);
  useEffect(AutoLogin, [email, pwToken]);

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
