import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// 커뮤니티 - HOT게시판
function HotBoard() {
  const location = useLocation();
  console.log(location.pathname);

  // HOT게시판 View
  return (
    <>
      <PageHeader title="H🔥T 게시판" subTitle="떠오르고 있는 인기 글이에요" />
    </>
  );
}

//////////////////////////////////////// Styled-Components

export default HotBoard;
