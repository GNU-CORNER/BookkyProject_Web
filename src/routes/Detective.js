import { useLocation } from "react-router-dom";

function Detective() {
  const location = useLocation();

  console.log(location.pathname);

  return <>{location.pathname}보드</>;
}

export default Detective;
