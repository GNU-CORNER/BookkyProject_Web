import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function TopNav() {
  const [homeActive, setHomeActive] = useState("");
  const [comunnityActive, setComunnityActive] = useState("");
  const [recommendActive, setRecommendActive] = useState("");

  const location = useLocation();

  // TopNav 현재 탭 표시
  const setBorderBottom = () => {
    console.log("경로 이동 = ", location.pathname);

    switch (location.pathname) {
      case "/": {
        setHomeActive("3px solid #6c95ff");
        setComunnityActive("");
        setRecommendActive("");
        break;
      }
      case "/Comunnity": {
        setComunnityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/Recommend": {
        setRecommendActive("3px solid #6c95ff");
        setComunnityActive("");
        setHomeActive("");
        break;
      }
      default: {
        setRecommendActive("");
        setComunnityActive("");
        setHomeActive("");
        break;
      }
    }
  };

  useEffect(setBorderBottom, [location.pathname]);

  return (
    <>
      <TestDiv>
        <img src={require("../assets/Group_379.png")} alt="" />
        <StyledLink borderbottom={homeActive} to="/">
          홈
        </StyledLink>
        <StyledLink borderbottom={comunnityActive} to="/Comunnity">
          커뮤니티
        </StyledLink>
        <StyledLink borderbottom={recommendActive} to="/Recommend">
          추천하개
        </StyledLink>
      </TestDiv>
    </>
  );
}

///////// Styled-components /////////
const TestDiv = styled.div`
  z-index: 99;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #e5e5e5;
`;

const StyledLink = styled(Link)`
  width: 100px;
  line-height: 64px;
  vertical-align: middle;
  text-align: center;
  border-bottom: ${(props) => props.borderbottom};
`;

export default TopNav;
