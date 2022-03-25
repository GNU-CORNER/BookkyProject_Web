import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Routes from "./routes/Routes";
import CounterContainer from "./redux-containers/CounterContainer";
import TodosContainer from "./redux-containers/TodosContainer";

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
      {/* <CounterContainer />
      <hr />
      <TodosContainer /> */}
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
