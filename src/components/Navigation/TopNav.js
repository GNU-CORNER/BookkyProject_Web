import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// 상단 네비게이션 바
function TopNav() {
  // 변수 선언
  const [homeActive, setHomeActive] = useState("");
  const [CommunityActive, setCommunityActive] = useState("");
  const [recommendActive, setRecommendActive] = useState("");
  const location = useLocation();
  const [isMobile, setMobile] = useState(false);

  // 모바일-PC 반응형
  const windowWidth = window.matchMedia("screen and (max-width : 756px)");

  const onWidthChange = () => {
    setMenu(false);
    setMobile(windowWidth.matches);
    return windowWidth.removeEventListener("change", onWidthChange);
  };

  windowWidth.addEventListener("change", onWidthChange);

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
  useEffect(onWidthChange, []);

  // 상단 네비게이션 View

  const [isMenuOpened, setMenu] = useState(false);

  if (isMobile)
    // 모바일 버전
    return (
      <MobileTopNav>
        <button
          className="toggle-btn"
          onClick={() => {
            setMenu(!isMenuOpened);
            console.log(isMenuOpened);
          }}
        >
          토글버튼
        </button>
        <div style={{ display: isMenuOpened ? "initial" : "none" }}>
          <ul>
            <li>
              <StyledLink to="/">
                <img
                  src={require("../../assets/Bookky/북키_메인로고.png")}
                  alt=""
                />
              </StyledLink>
            </li>
            <li>
              <Link to="/" onClick={() => setMenu(false)}>
                홈
              </Link>
            </li>
            <li>
              <Accordion>
                <AccordionSummary>커뮤니티</AccordionSummary>
                <AccordionDetails>
                  <Link to="/community" onClick={() => setMenu(false)}>
                    커뮤니티 홈
                  </Link>
                  <Link to="/hot/1" onClick={() => setMenu(false)}>
                    H🔥T게시판
                  </Link>
                  <Link to="/hot/1" onClick={() => setMenu(false)}>
                    자유게시판
                  </Link>
                  <Link to="/hot/1" onClick={() => setMenu(false)}>
                    Q{"&"}A게시판
                  </Link>
                  <Link to="/hot/1" onClick={() => setMenu(false)}>
                    책 장터
                  </Link>
                </AccordionDetails>
              </Accordion>
            </li>
            <li>
              <Link to="/recommend" onClick={() => setMenu(false)}>
                추천받개
              </Link>
            </li>
          </ul>
        </div>
      </MobileTopNav>
    );
  // PC 버전
  else
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
            <StyledLink to="/trade/1">책 장터</StyledLink>
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
  background-color: var(--bright-base-bg-color);
  color: var(--bright-base-font-color);
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
    color: var(--main-color);
    transition: all 200ms;
  }

  .dropbtn {
    height: 100%;
    text-align: center;
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
    background-color: var(--bright-base-bg-color);
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-content a {
    color: var(--bright-base-font-color);
    display: block;
    padding: 12px 16px;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    color: #6c95ff;
  }

  // 미디어쿼리
  @media (max-width: 1024px) {
    .toggleBtn {
      display: initial;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 64px;
      background-color: black;
    }
  }
`;

const StyledLink = styled(Link)`
  border-bottom: ${(props) => props.borderbottom};

  img {
    margin: 10px 20px 0 20px;
    min-width: 120px;
    width: 120px;
  }
`;

const MobileTopNav = styled.div`
  z-index: 99;
  position: fixed;

  .toggle-btn {
    width: 64px;
    height: 64px;
  }

  ul {
    width: 90vw;
    background-color: white;
    position: absolute;

    li {
      display: flex;
      flex-direction: column;
      height: 64px;
    }
  }
`;
export default TopNav;
