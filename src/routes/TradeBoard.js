import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// 커뮤니티 - 중고장터
function TradeBoard() {
  const location = useLocation();
  console.log(location.pathname);

  // 중고장터 View
  return (
    <>
      <PageHeader title="중고장터" subTitle="읽지 않는 책을 사고 파세요" />
    </>
  );
}

//////////////////////////////////////// Styled-Components

export default TradeBoard;
