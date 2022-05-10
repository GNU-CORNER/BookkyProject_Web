import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TagDetail = () => {
  const location = useLocation();
  const [books, setBooks] = useState({});
  const tagNum = location.pathname.split("/")[2];

  async function getBookData() {
    await axios
      .get("http://203.255.3.144:8002/v1/books/tag/" + tagNum)
      .then((res) => {
        console.log(res.data.result.bookList.data);
        setBooks(res.data.result.bookList.data);
      });
  }

  useEffect(getBookData, []);

  return <> </>;
};

export default TagDetail;
