import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MiniProfile from "./miniProfile";

// 도서 상세보기 - 리뷰 쓰기 영역
const ReviewWriting = ({ BID, getBookData }) => {
  // 변수 선언
  const [contents, setContents] = useState("");
  const today = new Date();
  const state = useSelector((state) => state);
  const baseURL = state.baseURL.url;
  const user = state.userData;

  // writeReview() : 작성한 리뷰 서버로 전송
  function submitReview() {
    const params = JSON.stringify({
      contents: contents,
      BID: BID,
    });

    axios
      .post(baseURL + "review/" + BID, params, {
        headers: { "access-token": user.accessToken },
      })
      .then((res) => console.log(res));
  }

  // 리뷰쓰기 View
  return (
    <ReviewWritingContainer>
      {/* 작성자(사용자) 표기 */}
      <MiniProfile
        userThumbnail={user.thumbnail}
        nickname={user.nickname ? user.nickname : "로그인 후 이용하세요"}
        date={`${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}`}
      />

      {/* 입력 영역 */}
      <InputArea>
        <textarea
          placeholder="욕설 및 비속어는 자제해주세요"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <div
          className="writing"
          onClick={() => {
            submitReview();
            getBookData();
          }}
        >
          작 성
        </div>
      </InputArea>
    </ReviewWritingContainer>
  );
};

//////////////////////////////////////// Styled-Components
const ReviewWritingContainer = styled.div`
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
`;

// 입력 영역 스타일링
const InputArea = styled.div`
  display: flex;

  textarea {
    resize: none;
    width: 100%;
    margin: 8px;
    height: 90px;
    border-radius: 4px;
    padding: 5px;
    outline: 2px solid #f1f1f1;
    transition: all 0.2s;

    :focus {
      outline: 2px solid var(--main-color);
    }
  }

  .writing {
    background-color: var(--main-color);
    margin: 8px 0;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--main-color);
    border-radius: 15px;
    font-size: 0.8em;
    font-weight: bold;
    color: white;
  }
`;

export default ReviewWriting;
