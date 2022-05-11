import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

// 상단 네비게이션 바
function TopNav() {
  // 변수 선언
  const [homeActive, setHomeActive] = useState("");
  const [CommunityActive, setCommunityActive] = useState("");
  const [recommendActive, setRecommendActive] = useState("");
  const location = useLocation();

  // setBorderBottom() : TopNav 현재 탭 표시
  const setBorderBottom = () => {
    console.log("경로 이동, in", location.pathname);

    // 현재 URL에 따른 Border-bottom 표시
    switch (location.pathname) {
      case "/": {
        setHomeActive("3px solid #6c95ff");
        setCommunityActive("");
        setRecommendActive("");
        break;
      }
      case "/community": {
        setCommunityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/free": {
        setCommunityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/qna": {
        setCommunityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/trade": {
        setCommunityActive("3px solid #6c95ff");
        setHomeActive("");
        setRecommendActive("");
        break;
      }
      case "/recommend": {
        setRecommendActive("3px solid #6c95ff");
        setCommunityActive("");
        setHomeActive("");
        break;
      }
      case "/detective": {
        setRecommendActive("3px solid #6c95ff");
        setCommunityActive("");
        setHomeActive("");
        break;
      }
      case "/guide": {
        setRecommendActive("3px solid #6c95ff");
        setCommunityActive("");
        setHomeActive("");
        break;
      }
      default: {
        setRecommendActive("");
        setCommunityActive("");
        setHomeActive("");
        break;
      }
    }
  };

  // URL이 바뀌면, setBorderBottom()
  useEffect(setBorderBottom, [location.pathname]);

  // 상단 네비게이션 View
  return (
    <TopNavContainer>
      <StyledLink to="/">
        <img src={require("../../assets/Bookky/북키_메인로고.png")} alt="" />
      </StyledLink>

      <div className="dropdown">
        <StyledLink className="dropbtn home" to="/" borderbottom={homeActive}>
          홈
        </StyledLink>
      </div>

      <div className="dropdown">
        <StyledLink
          className="dropbtn"
          to="/community"
          borderbottom={CommunityActive}
        >
          커뮤니티
        </StyledLink>
        <div className="dropdown-content a">
          <StyledLink to="/community">커뮤니티 홈</StyledLink>
          <StyledLink to="/hot/1">H🔥T게시판</StyledLink>
          <StyledLink to="/free/1">자유게시판</StyledLink>
          <StyledLink to="/qna/1">Q{"&"}A게시판</StyledLink>
          <StyledLink to="/trade/1">중고장터</StyledLink>
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

//////////////////////////////////////// Styled-Components
const TopNavContainer = styled.div`
  z-index: 99;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  width: 100%;
  height: 64px;
  font-weight: bold;

  .dropdown {
    position: relative;
    text-align: center;
    flex: 0 0 130px;
    line-height: 64px;
  }

  .home {
    padding: 18px 40px !important;
  }

  .dropdown a:hover {
    color: #6e95ff;
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
    border-radius: 4px;
    border: 1px solid #6c95ff;
    background-color: var(--bright-base-color);
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
    margin: 10px 20px 0 20px;
    width: 120px;
  }
`;

export default TopNav;
