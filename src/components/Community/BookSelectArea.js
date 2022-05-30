import { useEffect, useState } from "react";
import styled from "styled-components";
import AddBooksModalContainer from "./AddBooksModal/AddBooksModalContainer";

const BookSelectArea = ({ setTBID }) => {
  const [isSelected, setSelect] = useState(false);
  const [addBooksModal, setAddBooksModal] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [bookTitle, setBookTitle] = useState("원하는 도서를 추가해보세요");
  const [bookAuthor, setBookAuthor] = useState(
    "여기를 눌러서 추가할 도서를 검색하세요"
  );

  if (isSelected)
    return (
      <BookSelectAreaContainer>
        <AddBooksModalContainer
          addBooksModal={addBooksModal}
          setAddBooksModal={setAddBooksModal}
          setBookTitle={setBookTitle}
          setBookAuthor={setBookAuthor}
          setSelect={setSelect}
          setThumbnail={setThumbnail}
          setTBID={setTBID}
        />
        <img className="img-area" src={thumbnail} />
        <div className="text-area" onClick={() => setAddBooksModal(true)}>
          <div className="book-title">{bookTitle}</div>
          <div className="book-author">{bookAuthor}</div>
        </div>
      </BookSelectAreaContainer>
    );
  else
    return (
      <BookSelectAreaContainer>
        <AddBooksModalContainer
          addBooksModal={addBooksModal}
          setAddBooksModal={setAddBooksModal}
          setBookTitle={setBookTitle}
          setBookAuthor={setBookAuthor}
          setSelect={setSelect}
          setThumbnail={setThumbnail}
          setTBID={setTBID}
        />
        <div className="text-area" onClick={() => setAddBooksModal(true)}>
          <div className="book-title">{bookTitle}</div>
          <div className="book-author">{bookAuthor}</div>
        </div>
      </BookSelectAreaContainer>
    );
};

const BookSelectAreaContainer = styled.div`
  width: 40%;
  padding: 5px 20px;
  border: 2px solid #6e95ff;
  border-radius: 4px;
  display: flex;
  transition: all 0.3s;
  background-color: var(--bright-base-color);

  :hover {
    cursor: pointer;
    opacity: 70%;
    border: 2px solid var(--main-color);
    background-color: var(--main-color);
  }

  :hover .img-area {
    border: 2px solid #ffffff;
    ::before {
    }
  }

  :hover .text-area {
    color: white;

    h3 {
      color: #f1f1f1;
    }
  }

  .img-area {
    border-radius: 4px;
    min-width: 70px;
    height: 86px;
    transition: all 0.3s;
    border: 2px solid #6e95ff;

    ::before {
      content: "";
      transition: all 0.3s;
      margin: 28px auto;
      display: block;
      width: 32px;
      height: 32px;
      background-size: cover;
    }
  }

  .text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-left: 20px;
    transition: all 0.3s;

    .book-title {
      width: fit-content;
      line-height: 30px;
      font-size: 1.2em;
      font-weight: bold;
    }

    .book-author {
      width: fit-content;
      transition: all 0.3s;

      color: gray;
      line-height: 25px;
    }
  }
`;
export default BookSelectArea;
