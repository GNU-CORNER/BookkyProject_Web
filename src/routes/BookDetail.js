import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BookDetailHeader from "../components/BookDetail/BookDetailHeader";
import ReviewCard from "../components/Cards/ReviewCard";
import ReviewWriting from "../components/BookDetail/ReviewWriting";
import { useSelector } from "react-redux";

// 도서 상세정보
function BookDetail() {
  // 변수 선언
  const location = useLocation();
  const BID = location.pathname.split("/")[2];
  const user = useSelector((state) => state.userData);
  const [book, setBook] = useState({ BOOK_INDEX: "" });
  const [reviews, setReviews] = useState([{ id: 0 }]);
  const [fold, setFold] = useState(true);
  const SideNavState = useSelector((state) => state.SideNavState);

  // getBookData() : 서버로부터 BID 에 따른 도서데이터를 가져옴
  function getBookData() {
    axios
      .get("http://203.255.3.144:8002/v1/books/detail/" + BID)
      .then((res) => {
        // console.log(res.data.result.bookList);
        setBook(res.data.result.bookList);
      });
  }

  // getBookData() : 서버로부터 BID 에 따른 리뷰데이터를 가져옴
  function getReviewData() {
    if (user.accessToken.length > 0)
      axios
        .get("http://203.255.3.144:8002/v1/books/reviews/" + BID, {
          headers: { "access-token": user.accessToken },
        })
        .then((res) => {
          console.log(res.data);
          setReviews(res.data.result.reviewList);
        });
  }

  // 도서 정보 업데이트
  useEffect(getBookData, [BID]);

  // 리뷰 정보 업데이트
  useEffect(getReviewData, [BID, user.accessToken]);

  // 도서 상세정보 View
  return (
    <BookDetailContainer width={SideNavState.width}>
      <PageHeader title="도서 상세정보" subTitle="선택한 책의 정보에요" />
      <Summary>
        <img src={book.thumbnailImage} alt="book thumbnail" />
        <div className="infoArea">
          <p className="title">{book.TITLE}</p>
          <p className="author">
            {book.AUTHOR} / {book.PUBLISHER}
          </p>
          <hr />
          <p>★★★★☆</p>
          <p>#리액트 #C++ #C언어 #자바스크립트</p>
          <div className="naver_banner">
            <img
              src={require("../assets/icons/login/naver_banner.png")}
              alt="naver_banner"
            />
            <p>책 사러 갈땐?</p>
            <a
              href={
                "https://book.naver.com/search/search.naver?sm=sta_hty.book&sug=&where=nexearch&query=" +
                book.TITLE
              }
              target="_blank"
              rel="noreferrer"
            >
              바로가기
            </a>
          </div>
        </div>
      </Summary>
      <hr />
      <Contents>
        <div className="BookInfo">
          <BookDetailHeader title="도서 정보" />
          <p>
            <span>ISBN</span> : {book.ISBN}
          </p>
          <p>
            <span>출판사</span> : {book.PUBLISHER}
          </p>
          <p>
            <span>저자</span> : {book.AUTHOR}
          </p>
          <p>
            <span>페이지</span> : {book.PAGE}
          </p>
          <p>
            <span>정가</span> : {book.PRICE}
          </p>
        </div>
        <div className="BookIntro">
          <BookDetailHeader title="소개" />
          <p>{book.BOOK_INTRODUCTION}</p>
        </div>
        <div className="BookIndex">
          <BookDetailHeader title="목차" />
          <div>
            {book.BOOK_INDEX.split("^^").map((el, cnt) => {
              if (fold === false) {
                return <div key={cnt}>{el}</div>;
              } else if (fold === true && cnt <= 20) {
                return <div key={cnt}>{el}</div>;
              } else {
                return <div key={cnt}></div>;
              }
            })}
            <div className="foldBtn" onClick={() => setFold(!fold)}>
              {fold ? "펼치기 ▼" : "접기 ▲"}
            </div>
          </div>
        </div>
        <BookReview>
          <BookDetailHeader title="리뷰" />
          <Reviews>
            <ReviewWriting BID={BID} getBookData={getBookData} />
            {reviews
              ? reviews.map((el) => {
                  return (
                    <ReviewCard
                      key={el.id}
                      nickname={el.nickname}
                      contents={el.contents}
                      date={el.createAt}
                      likeCnt={el.likeCnt}
                      rating={el.rating}
                    />
                  );
                })
              : "등록된 리뷰가 없습니다"}
          </Reviews>
        </BookReview>
      </Contents>
    </BookDetailContainer>
  );
}

//////////////////////////////////////// Styled-Components
const BookDetailContainer = styled.div`
  width: ${(props) => props.width};
`;

const Summary = styled.div`
  margin: 2vh 0;
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(250px, 18vw) minmax(250px, 39vw);

  img {
    justify-self: center;
    width: 100%;
  }
  .infoArea {
    padding-left: 5vw;
    display: grid;
    grid-template-rows: 90px 50px 40px 40px auto 50px;
  }

  .title {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 2em;
  }
  .author {
    font-size: 1.1em;
  }

  .naver_banner {
    width: 34vw;
    border-radius: 4px;
    line-height: 50px;
    background-color: #03c75a;
    font-weight: bold;
    color: white;
    position: relative;

    img {
      float: left;
      width: 50px;
    }

    // 반응형 시 display : none 설정할 것.
    a {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
      width: 80px;
      line-height: 30px;
      border-radius: 20px;
      background-color: white;
      text-align: center;
      font-size: 0.8em;
      color: black;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 57vw;
  min-width: 768px;

  .BookInfo,
  .BookIntro,
  .BookIndex {
    font-size: 1.1em;
    margin: 40px 0 20px 0;

    span {
      font-weight: bold;
    }
    p {
      padding: 0 30px;
    }
  }

  .foldBtn {
    padding-left: 20vw;
    color: var(--main-color);
    font-size: 0.9em;
  }
`;

const BookReview = styled.div`
  margin: 40px 0 20px 0;
  p {
    padding: 0 30px;
  }
`;

const Reviews = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  /* filter: blur(7px); */
`;
export default BookDetail;
