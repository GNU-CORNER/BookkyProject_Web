import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function QnaBoard() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <PageHeader title="Q&amp;A 게시판" subTitle="궁금한 점이 있나요?" />
    </>
  );
}

export default QnaBoard;
