import { useSelector } from "react-redux";
import styled from "styled-components";
import MiniProfile from "../BookDetail/miniProfile";

// BookDetail - ReviewCard
const ReviewCard = ({ nickname, contents, date, likeCnt, rating }) => {
  const user = useSelector((state) => state.userData);

  // ReviewManagement() : 리뷰 관리 (수정, 삭제)
  function ReviewManagement() {
    if (user.nickname === nickname) {
      console.log(user);
      return (
        <div className="ReviewManagement">
          <div
            className="edit btn"
            onClick={() => alert("정말 수정하시겠습니까?")}
          >
            수정
          </div>
          <div
            className="delete btn"
            onClick={() => alert("정말 삭제하시겠습니까?")}
          >
            삭제
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }

  // 리뷰 View
  return (
    <ReviewCardContainer>
      <div className="rating">
        <div>👍34</div>
        <div>⭐⭐⭐⭐☆</div>
      </div>
      <MiniProfile nickname={nickname} date={date} />

      <div className="contents">
        {
          "반갑다 나는 인혁이다반갑다 이다반갑다 나인혁이다반반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다반갑다 이다반갑다 나인혁이다갑다 나는 인혁이다반갑다 나는 인혁이다반갑다 나는 나는 인혁"
        }
      </div>
      <ReviewManagement />
    </ReviewCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const ReviewCardContainer = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;

  .rating {
    right: 15px;
    position: absolute;
    display: flex;
  }

  .contents {
    display: flex;
    min-height: 80px;
  }

  .ReviewManagement {
    margin-top: 5px;
    display: flex;
    font-size: 0.8em;

    .btn {
      text-align: center;
      width: 40px;
      line-height: 25px;
      padding: 0 5px;
      border-radius: 4px;
      color: white;
    }

    .edit {
      background-color: var(--main-color);
    }

    .delete {
      margin-left: 5px;
      background-color: #ff7a7a;
    }
  }
`;
export default ReviewCard;
