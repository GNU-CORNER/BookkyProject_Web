import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import BookCard from "../Cards/BookCard";
import { useEffect } from "react";
import { updateInterests } from "../../redux-modules/books";

//MyInfo - 내 관심도서 컴포넌트
const InterestBooks = () => {
  const state = useSelector((state) => state);
  const baseURL = state.baseURL.url;
  const user = state.userData;
  const mybooks = state.books.interests;
  const dispatch = useDispatch();

  // getBooks() : 서버로부터 사용자의 관심도서를 받아 redux-store에 저장
  function getBooks() {
    if (user.accessToken) {
      console.log("성공");
      axios
        .get(baseURL + "user/favoritebook/0", {
          headers: {
            "access-token": user.accessToken,
          },
        })
        .then((res) => {
          dispatch(updateInterests(res.data.result.favoriteBookList));
        });
    }
  }

  useEffect(getBooks, [user, dispatch]);

  // View
  return (
    <InterestFieldContainer>
      {
        // 관심도서가 없을 때
        mybooks.length <= 0 ? (
          <div className="no-Books">관심도서가 없습니다</div>
        ) : (
          // 관심도서가 있을 때, 4개까지 출력
          mybooks.map((book, cnt) => {
            if (cnt < 4)
              return (
                <BookCard
                  key={cnt}
                  bid={book.TBID}
                  className="nodrag"
                  title={book.TITLE}
                  thumnail={book.thumbnailImage}
                  author={book.AUTHOR}
                  publisher={book.PUBLISHER}
                />
              );
            else return <></>;
          })
        )
      }
    </InterestFieldContainer>
  );
};

//////////////////////////////////////// Styled-Components
const InterestFieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 175px);
  overflow: hidden;
  padding: 9px 0 12px 0;

  .no-Books {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px;
  }
`;

export default InterestBooks;
