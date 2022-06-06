import { useState } from "react";
import styled from "styled-components";
import AddBooksModalContainer from "./AddBooksModal/AddBooksModalContainer";

// 게시글 작성 - 도서 선택 영역
const BookSelectArea = ({ setTBID, book }) => {
  // 변수 선언
  const [isSelected, setSelect] = useState(book ? true : false);
  const [addBooksModal, setAddBooksModal] = useState(false);
  const [thumbnail, setThumbnail] = useState(book ? book.thumbnailImage : "");
  const [bookTitle, setBookTitle] = useState(
    book ? book.TITLE : "원하는 도서를 추가해보세요"
  );
  const [bookAuthor, setBookAuthor] = useState(
    book
      ? book.length !== 0
        ? book.AUTHOR + " / " + book.PUBLISHER
        : "여기를 눌러서 추가할 도서를 검색하세요"
      : ""
  );

  // View
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
      {/* 도서 선택 여부에 따른 도서 썸네일 출력 */}
      {isSelected ? <img className="img-area" src={thumbnail} alt="" /> : <></>}
      <div
        // 도서 선택 여부에 따른 스타일 적용
        className={isSelected ? "text-area" : "text-area noSelect"}
        onClick={() => setAddBooksModal(true)}
      >
        <div className="book-title">{bookTitle}</div>
        <div className="book-author">{bookAuthor}</div>
      </div>
    </BookSelectAreaContainer>
  );
};

//////////////////////////////////////// Styled-Components
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

    :hover .book-author {
      color: #f1f1f1;
    }
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

  .noSelect {
    align-items: center;
  }
`;

export default BookSelectArea;
