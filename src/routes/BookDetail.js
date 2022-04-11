import { useLocation } from "react-router-dom";

// 도서 상세정보
function BookDetail() {
  const location = useLocation();

  console.log(location.pathname);

  // 도서 상세정보 View
  return <>{location.pathname}</>;
}

//////////////////////////////////////// Styled-Components

export default BookDetail;
