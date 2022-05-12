import styled from "styled-components";
import TagCard from "./TagCard";

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
}) => {
  return (
    <>
      <SearchBookCardContainer>
        <img src={thumbnailImage} />
        {/* 제목, 저자/출판사, 내용 */}

        <BookInfo>
          <div className="title">{TITLE}</div>
          <div className="sub">{AUTHOR} / 길벗</div>
          <div className="content">
            {BOOK_INTRODUCTION ? BOOK_INTRODUCTION : "정보가 없습니다."}
          </div>
        </BookInfo>
        {/* 별점, 관련태그 */}
        <div className="starRating">★★★★☆ ({RATING})</div>
        <BookInfoSub>
          {tagData.map((el) => {
            return <TagCard tag={el.tag} TID={el.TID} />;
          })}
        </BookInfoSub>
      </SearchBookCardContainer>
      <hr />
    </>
  );
};

const SearchBookCardContainer = styled.div`
  padding: 15px 20px;
  display: flex;
  position: relative;

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
    font-size: 0.9em;
    color: gray;
  }
  .content {
    min-height: 80px;
  }

  .starRating {
    border: 1px solid red;
    width: 280px;
  }
`;

const BookInfo = styled.div`
  min-width: calc(100% - 280px);
  width: calc(100% - 300px);
  padding: 10px;
  flex-direction: column;
`;

const BookInfoSub = styled.div`
  position: absolute;
  left: 140px;
  bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default SearchBookCard;
