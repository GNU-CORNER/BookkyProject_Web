import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// 커뮤니티 - Q&A게시판
function QnaBoard() {
  // 변수 정의
  const location = useLocation();
  console.log(location.pathname);

  // Q&A게시판 View
  return (
    <>
      <PageHeader title="Q&amp;A 게시판" subTitle="궁금한 점이 있나요?" />
    </>
  );
}

//////////////////////////////////////// Styled-Components

export default QnaBoard;
