import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function HotBoard() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <PageHeader title="자유게시판" />
    </>
  );
}

export default HotBoard;
