import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// 커뮤니티 - 자유게시판
function FreeBoard() {
  const location = useLocation();
  console.log(location.pathname);

  // 자유게시판 View
  return (
    <>
      <PageHeader title="자유게시판" subTitle="자유롭게 의견을 나누세요" />
    </>
  );
}

//////////////////////////////////////// Styled-Components

export default FreeBoard;
