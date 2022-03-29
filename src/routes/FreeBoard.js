import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function FreeBoard() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <PageHeader title="자유게시판" subTitle="자유롭게 의견을 나누세요" />
    </>
  );
}

export default FreeBoard;
