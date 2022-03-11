import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <>
      <TestDiv>
        <Link to="/">Home</Link>
        <Link to="/Comunnity">Comunnity</Link>
        <Link to="/Recommend">Recommend</Link>
      </TestDiv>
    </>
  );
}

///////// Styled-components /////////
const TestDiv = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  background-color: red;
`;

export default TopNav;
