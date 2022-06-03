import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 게시글 상세보기 - 도서 정보 보기
const PostDetailBookCard = ({ book }) => {
  // 변수 선언
  const navigate = useNavigate();

  // View
  if (book.TBID === undefined) return <></>;
  else {
    return (
      <PostDetailBookCardContainer>
        {/* 도서 썸네일 출력 */}
        <img className="img-area" src={book.thumbnailImage} alt=" " />
        <div
          className={"text-area"}
          onClick={() => navigate("/books/" + book.TBID)}
        >
          <div className="book-title">{book.TITLE}</div>
          <div className="book-author">
            {book.AUTHOR}/{book.PUBLISHER}
          </div>
        </div>
      </PostDetailBookCardContainer>
    );
  }
};

//////////////////////////////////////// Styled-Components
const PostDetailBookCardContainer = styled.div`
  margin: 10px 0;
  width: 40%;
  align-items: center;
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
`;
export default PostDetailBookCard;
