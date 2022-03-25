import { useLocation } from "react-router-dom";

function BookDetail() {
  const location = useLocation();

  console.log(location.pathname);

  return <>{location.pathname}</>;
}

export default BookDetail;
