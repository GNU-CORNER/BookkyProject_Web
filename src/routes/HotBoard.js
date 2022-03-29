import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function HotBoard() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <PageHeader title="H🔥T 게시판" subTitle="떠오르고 있는 인기 글이에요" />
    </>
  );
}

export default HotBoard;
