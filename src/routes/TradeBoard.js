import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function TradeBoard() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <PageHeader title="중고장터" subTitle="읽지 않는 책을 사고 파세요" />
    </>
  );
}
export default TradeBoard;
