import styled from "styled-components";
import TagCard from "./TagCard";

// 검색 결과 - 도서 카드
const SearchBookCard = () => {
  return (
    <>
      <SearchBookCardContainer>
        <img
          src={
            "https://cdn.mhns.co.kr/news/photo/202109/512494_619892_2832.jpg"
          }
        />
        {/* 제목, 저자/출판사, 내용 */}

        <BookInfo>
          <div className="title">Deep Learning</div>
          <div className="sub">사이토 고키 / 길벗</div>
          <div className="contents">
            라이브러리나 프레임워크에 의존하지 않고고, 딥러닝의 핵심을
            ‘밑바닥부터’ 직접 만들어보며 즐 라이브러리나 프레임워크에 의존하지
            않고고, 딥러닝의 핵심을 ‘밑바닥부터’ 직접 만들어보며 즐 라이브러리나
            라이브러리나 프레임워크에 의존하지 않고고, 딥러닝의 핵심을
            ‘밑바닥부터’ 직접 만들어보며 즐기는...
          </div>
        </BookInfo>
        {/* 별점, 관련태그 */}
        <BookInfoSub>
          <div>★★★★☆ (4.0)</div>
          <TagCard tag="자바스크립트" />
          <TagCard tag="리액트" />
          <TagCard tag="자바스크립트" />
        </BookInfoSub>
      </SearchBookCardContainer>
      <hr />
    </>
  );
};

const SearchBookCardContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;

  img {
    // 크기 : 책 전지 표준
    width: 148px;
    height: 210px;
  }
  .title {
    font-size: 1.3em;
    font-weight: bold;
  }
  .sub {
    font-size: 0.9em;
    color: gray;
  }
  .contents {
  }
`;

const BookInfo = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
`;

const BookInfoSub = styled.div`
  padding: 30px 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default SearchBookCard;
