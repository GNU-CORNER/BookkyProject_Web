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
    { TBID: 0, TITLE: "", AUTHOR: "", PUBLISHER: "" },
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
      <img
        className="close-btn"
        src={require("../../../assets/icons/community/close.png")}
        onClick={() => setAddBooksModal(false)}
      />
      <input
        type="text"
        placeholder="제목 또는 태그로 도서 검색"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={() => {
          if (window.event.keyCode === 13) getBooks();
        }}
      />
      {bookList.length <= 0 ? (
        <div className="default-book-list">검색 결과가 없습니다.</div>
      ) : bookList[0].TBID === 0 ? (
        <div className="default-book-list">여기에 도서 목록이 출력됩니다.</div>
      ) : (
        bookList.map((el) => (
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
        ))
      )}
    </AddBooksModalContainer>
  );
};

const AddBooksModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .close-btn {
    position: absolute;
    width: 30px;
    right: 0;
    top: 2vh;

    :hover {
      cursor: pointer;
    }
  }

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

  .default-book-list {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px;
  }
`;

export default AddBooksModal;
