import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";

// 커뮤니티 - 자유게시판
function FreeBoard() {
  const location = useLocation();
  console.log(location.pathname);

  // 자유게시판 View
  return (
    <FreeBoardContainer>
      <PageHeader title="자유게시판" subTitle="자유롭게 의견을 나누세요" />
    </FreeBoardContainer>
  );
}

//////////////////////////////////////// Styled-Components
const FreeBoardContainer = styled.div``;
export default FreeBoard;
