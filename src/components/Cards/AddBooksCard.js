import styled from "styled-components";

// 게시글 작성 - 도서 첨부 시 도서 목록 카드
const AddBooksCard = ({
  TITLE,
  AUTHOR,
  PUBLISHER,
  TBID,
  thumbnailImage,
  setAddBooksModal,
  setBookTitle,
  setBookAuthor,
  setSelect,
  setThumbnail,
  setTBID,
}) => {
  // addBook() : 도서 추가하기 버튼 이벤트
  function addBook() {
    setTBID(TBID);
    setBookTitle(TITLE);
    setBookAuthor(PUBLISHER);
    setThumbnail(thumbnailImage);
    setSelect(true);
    if (window.confirm("도서를 추가하시겠습니까?")) {
      setAddBooksModal(false);
    }
  }

  // 도서 카드 View
  return (
    <AddBooksCardContainer>
      <img src={thumbnailImage} alt="user Thumbnail" />
      <div className="book-info">
        <div className="title">{TITLE}</div>
        <div className="sub">
          {AUTHOR}/{PUBLISHER}
        </div>
      </div>
      <div className="add-btn" onClick={addBook}>
        추가하기
      </div>
    </AddBooksCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const AddBooksCardContainer = styled.div`
  position: relative;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  width: 80%;
  height: 120px;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 5px;

  img {
    height: 100px;
  }

  .book-info {
    padding-left: 15px;
    .title {
      font-size: 1.2em;
      font-weight: bold;
    }
    .sub {
      line-height: 1.6em;
      width: 80%;
      font-size: 0.9em;
    }
  }

  .add-btn {
    padding: 15px;
    border-radius: 100px;
    background-color: var(--main-color);
    right: 25px;
    position: absolute;
    color: var(--dark-base-font-color);
    transition: all 0.2s;

    :hover {
      cursor: pointer;
      opacity: 70%;
    }
  }
`;
export default AddBooksCard;
