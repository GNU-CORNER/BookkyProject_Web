import { useSelector } from "react-redux";
import styled from "styled-components";
import MiniProfile from "../BookDetail/miniProfile";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useState } from "react";

// BookDetail - ReviewCard
const ReviewCard = ({
  AUTHOR,
  RID,
  TBID,
  UID,
  bookTitle,
  contents,
  createAt,
  isAccessible,
  isLiked,
  likeCnt,
  nickname,
  rating,
  thumbnail,
  views,
  userThumbnail,
}) => {
  const user = useSelector((state) => state.userData);
  const [like, setLike] = useState(isLiked !== undefined ? isLiked : false);

  function likeReview() {
    axios
      .put(
        "http://203.255.3.144:8002/v1/review/like/" + RID,
        {},
        {
          headers: {
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => console.log(res));
  }

  // ReviewManagement() : 리뷰 관리 (수정, 삭제)
  function ReviewManagement() {
    if (user.nickname === nickname) {
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
        <div className="like-btn">
          <span onClick={likeReview}>공감</span>({likeCnt ? likeCnt : 0}){" "}
        </div>
        {/* 별점, 관련태그 */}
        <Rating
          value={parseFloat(rating)}
          defaultValue={0}
          precision={0.5}
          readOnly
        />
        <div className="like-btn">
          ({String(rating).length === 1 ? rating + ".0" : rating})
        </div>
      </div>
      <MiniProfile
        userThumbnail={userThumbnail}
        nickname={nickname}
        date={createAt}
      />

      <div className="contents">{contents}</div>
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
    align-items: center;

    .like-btn {
      font-size: 0.9em;
      margin-right: 5px;
    }
  }

  .contents {
    display: flex;
    padding: 10px;
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
