import styled from "styled-components";
import TagCard from "./TagCard";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

// 검색 결과 - 도서 카드
const SearchBookCard = ({
  BID,
  TITLE,
  AUTHOR,
  thumbnailImage,
  BOOK_INTRODUCTION,
  PUBLISH_DATE,
  RATING,
  tagData,
  PUBLISHER,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <SearchBookCardContainer
        onClick={() => {
          navigate("/books/" + BID);
          window.scrollTo(0, 0);
        }}
      >
        <img src={thumbnailImage} />
        {/* 제목, 저자/출판사, 내용 */}
        <BookInfo>
          <div className="title">{TITLE}</div>
          <div className="sub">
            {AUTHOR} / {PUBLISHER}
          </div>
          <div className="content">
            {BOOK_INTRODUCTION ? BOOK_INTRODUCTION : "정보가 없습니다."}
          </div>
        </BookInfo>
        {/* 별점, 관련태그 */}
        <Rating
          className="starRating"
          name="half-rating"
          value={parseFloat(RATING)}
          defaultValue={0}
          precision={0.5}
          readOnly
        />
        <BookInfoSub>
          {tagData.map((el, cnt) => {
            return <TagCard key={cnt} tag={el.tag} TID={el.TID} />;
          })}
        </BookInfoSub>
      </SearchBookCardContainer>
      <hr />
    </>
  );
};

const SearchBookCardContainer = styled.div`
  height: 180px;
  padding: 15px 20px;
  display: flex;
  position: relative;
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: rgba(110, 149, 255, 0.2);
  }
  img {
    // 크기 : 책 전지 표준
    width: 110px;
    height: 150px;
  }
  .title {
    font-size: 1.3em;
    font-weight: bold;
  }
  .sub {
    line-height: 25px;
    font-size: 0.9em;
    color: gray;
  }
  .content {
    line-height: 1.2em;
    height: 3.6em;
    overflow: hidden;
  }

  .starRating {
    width: fit-content;
    align-items: center;
  }
`;

const BookInfo = styled.div`
  min-width: calc(100% - 240px);
  width: calc(100% - 240px);
  padding: 5px 20px;
  flex-direction: column;
`;

const BookInfoSub = styled.div`
  position: absolute;
  left: 150px;
  bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default SearchBookCard;
