import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import AddBooksCard from "../../Cards/AddBooksCard";
import PageHeader from "../../PageHeader";

const AddBooksModal = ({
  setAddBooksModal,
  setBookTitle,
  setBookAuthor,
  setSelect,
  setThumbnail,
  setTBID,
}) => {
  const [bookList, setBookList] = useState([
    { TBID: "", TITLE: "", AUTHOR: "", PUBLISHER: "" },
  ]);
  const [input, setInput] = useState("");

  function getBooks() {
    console.log(input);
    axios
      .get("http://203.255.3.144:8002/v1/books/search", {
        params: {
          keyword: input,
        },
      })
      .then((res) => {
        console.log(res);
        setBookList(res.data.result);
      });
  }
  return (
    <AddBooksModalContainer>
      <PageHeader
        title="도서 추가"
        subTitle=" 원하는 도서를 게시글에 추가하세요"
      />
      <input
        type="text"
        placeholder="제목 또는 태그로 도서 검색"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={() => {
          if (window.event.keyCode === 13) getBooks();
        }}
      />
      {bookList.map((el) => (
        <AddBooksCard
          key={el.TBID}
          TBID={el.TBID}
          TITLE={el.TITLE}
          AUTHOR={el.AUTHOR}
          PUBLISHER={el.PUBLISHER}
          thumbnailImage={el.thumbnailImage}
          setBookTitle={setBookTitle}
          setAddBooksModal={setAddBooksModal}
          setBookAuthor={setBookAuthor}
          setSelect={setSelect}
          setThumbnail={setThumbnail}
          setTBID={setTBID}
        />
      ))}
    </AddBooksModalContainer>
  );
};

const AddBooksModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    border-radius: 5px;
    background-color: #f9f9f9;
    width: 80%;
    margin: 10px 50px;
    height: 40px;
    padding-left: 10px;

    :focus {
      outline: 2px solid var(--main-color);
    }
  }
`;

export default AddBooksModal;
