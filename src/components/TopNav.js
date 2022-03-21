import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

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
      case "/comunnity": {
        setComunnityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/free": {
        setComunnityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/qna": {
        setComunnityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/recommend": {
        setRecommendActive("3px solid #6c95ff");
        setComunnityActive("");
        setHomeActive("");
        break;
      }
      case "/detective": {
        setRecommendActive("3px solid #6c95ff");
        setComunnityActive("");
        setHomeActive("");
        break;
      }
      case "/guide": {
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
    <TopNavContainer>
      <StyledLink to="/">
        <img src={require("../assets/Group_379.png")} alt="" />
      </StyledLink>

      <div className="dropdown">
        <StyledLink className="dropbtn" to="/" borderbottom={homeActive}>
          홈
        </StyledLink>
      </div>

      <div className="dropdown">
        <StyledLink
          className="dropbtn"
          to="/comunnity"
          borderbottom={comunnityActive}
        >
          커뮤니티
        </StyledLink>
        <div className="dropdown-content">
          <StyledLink to="/comunnity">커뮤니티 홈</StyledLink>
          <StyledLink to="/free">자유게시판</StyledLink>
          <StyledLink to="/qna">Q{"&"}A게시판</StyledLink>
        </div>
      </div>

      <div className="dropdown">
        <StyledLink
          className="dropbtn"
          to="/recommend"
          borderbottom={recommendActive}
        >
          추천받개
        </StyledLink>
        <div className="dropdown-content">
          <StyledLink to="/recommend">추천받개 홈</StyledLink>
          <StyledLink to="/detective">명탐정 북키</StyledLink>
          <StyledLink to="/guide">안내견 북키</StyledLink>
        </div>
      </div>
      <SearchBar />
    </TopNavContainer>
  );
}

///////// Styled-components /////////
const TopNavContainer = styled.div`
  z-index: 99;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: bold;

  .dropdown {
    position: relative;
    text-align: center;
    flex: 0 0 130px;
    line-height: 64px;
  }

  .dropdown a:hover {
    color: #6c95ff;
    transition: all 200ms;
  }

  .dropbtn {
    height: 100%;
    text-align: center;
    color: black;
    padding: 18px 16px;
    font-size: 16px;
  }

  .dropdown-content {
    z-index: 1;
    position: absolute;
    display: none;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #6c95ff;
    background-color: #f5f5f5;
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-content a {
    color: black;
    display: block;
    padding: 12px 16px;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    color: #6c95ff;
  }
`;

const StyledLink = styled(Link)`
  border-bottom: ${(props) => props.borderbottom};

  img {
    width: 170px;
  }
`;

export default TopNav;
