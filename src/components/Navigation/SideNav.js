import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import LoginModalContainer from "../../redux-containers/LoginModalContainer";
import { useSelector } from "react-redux";
import BottomMenu from "./BottomMenu";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import TagCard from "../Home/Cards/TagCard";

// 사이드 네비게이션 바
function SideNav() {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  const tagArray = useSelector((state) => state.userData.tagArray);

  // 내 관심분야 출력해주는 컴포넌트
  function SpreadTags() {
    if (tagArray) {
      return tagArray.map((tag) => {
        return <TagCard tag={tag} key={tag} />;
      });
    } else {
      return <></>;
    }
  }

  // 회원일 때 (userData에 유저 nickname이 있을 때)
  if (user.nickname) {
    return (
      <>
        <SideNavContainer mainColor={"#"}>
          <Profile />

          <div className="sidemenu-area">
            <StyledLink to="/interests" className="MenuBtn">
              관심 도서
            </StyledLink>
            <StyledLink to="/myposts" className="MenuBtn">
              내 글 보기
            </StyledLink>
            <StyledLink to="/myinfo" className="MenuBtn">
              내 후기 보기
            </StyledLink>
          </div>
          <StyledAccordion>
            <AccordionSummary
              expandIcon={
                <img
                  src={require("../../assets/arrowDown.png")}
                  width={"14px"}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              내 관심분야
            </AccordionSummary>
            <AccordionDetails>
              <SpreadTags />
              <More to="/myinfo">더 보기</More>
            </AccordionDetails>
          </StyledAccordion>
          <BottomMenu />
        </SideNavContainer>
      </>
    );
  }

  // 비회원일 때 (userData에 유저 nickname이 없을 때)
  else {
    return (
      <>
        <SideNavContainer>
          <Profile />
          <LoginModalContainer />
          <StyledLink to="/signup" className="SignUpBtn">
            개서적이 처음이신가요?
          </StyledLink>
          <BottomMenu />
        </SideNavContainer>
      </>
    );
  }
}

//////////////////////////////////////// Styled-Components
const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 160px;
  height: calc(100vh - 64px);
  margin-top: 64px;
  border-right: 1px solid #e5e7eb;
  background-color: #ffffff;

  .sidemenu-area {
    display: flex;
    flex-direction: column;
    padding: 2.5px 0;
  }

  .MenuBtn {
    margin: 5px 20px;
    font-weight: bold;
  }

  .SignUpBtn {
    color: #6c95ff;
    margin: 0 auto;
    font-size: 0.8em;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 4px !important;
  margin: 0px !important;
  text-align: center;
  box-shadow: none !important;

  #panel1a-header {
    padding-left: 20px;
    font-weight: bold;
  }
`;

const More = styled(Link)`
  color: #6e95ff;
  font-size: 0.9em;
  text-decoration: underline 1px solid #6f95ff;
`;
export default SideNav;
