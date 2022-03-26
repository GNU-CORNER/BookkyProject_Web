import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Routes from "./routes/Routes";
import { useCookies } from "react-cookie";
import axios from "axios";
import { updateUser } from "./modules/userData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GlobalStyle = createGlobalStyle`
	body {
    margin : 0;
    padding : 0;

  /* 스크롤바 hidden */
  ::-webkit-scrollbar {
    display: none;
  }
}
`;

function App() {
  const cookies = useCookies();
  const dispatch = useDispatch();

  // 자동로그인 통신 :: 쿠키에 자동로그인 정보가 있으면, 로컬스토리지 내의 데이터를 활용하여 로그인 통신 시도
  const AutoLogin = () => {
    if (cookies[0].autologin === "true") {
      axios
        .post(
          "http://203.255.3.144:8002/v1/test1",
          JSON.stringify({
            email: localStorage.getItem("email"),
            pwToken: localStorage.getItem("password"),
          }),
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          if (res.data.success === true) {
            dispatch(
              updateUser(
                res.data.access_token,
                res.data.result.email,
                res.data.result.nickname
              )
            );
          } else {
            console.log("로그인 에러");
          }
        });
    }
  };
  useEffect(AutoLogin, []);

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

const FlexDiv = styled.div`
  display: flex;
`;
export default App;
