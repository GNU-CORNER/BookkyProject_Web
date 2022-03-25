import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Routes from "./routes/Routes";

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
