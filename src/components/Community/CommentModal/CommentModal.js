import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "../Comment";

// Q&A 게시글 상세보기 - 댓글 보기 모달 창 Inner
const CommentModal = ({
  PID,
  setPostCommentCnt,
  getPostData,
  setCommentModal,
}) => {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  const [commentCnt, setCommentCnt] = useState(0);
  const [userComment, setUserComment] = useState("");

  // 댓글 형태
  const [commentArray, setCommentArray] = useState([
    {
      CID: 0,
      comment: "",
      updateAt: "",
      like: 0,
      nickname: "",
      childComment: [
        { CID: 0, comment: "", like: "", updateAt: "", nickname: "" },
      ],
    },
  ]);

  // getCommentData() : 게시글(PID)에 해당하는 댓글 목록 불러오기
  function getCommentData() {
    axios
      .post(
        "http://203.255.3.144:8002/v1/community/comment/2/" + PID,
        {},
        {
          headers: {
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => {
        setCommentArray(res.data.result.commentdata);
        setCommentCnt(res.data.result.commentCnt);
        setPostCommentCnt(res.data.result.commentCnt);
      });
  }

  // submitComment() : 댓글 작성
  function submitComment() {
    console.log(commentArray);
    axios
      .post(
        "http://203.255.3.144:8002/v1/community/writecomment/2",
        {
          comment: userComment,
          parentID: 0,
          PID: PID,
        },
        {
          headers: {
            "access-token": user.accessToken,
          },
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res);
        getCommentData();
      });
  }

  useEffect(getCommentData, [PID, setPostCommentCnt, user.accessToken]);

  // 댓글 보기 모달 창 View
  return (
    <div>
      <WriteComment>
        {/* 댓글 개수 표기 */}
        <p className="reply-cnt">{commentCnt}개의 댓글</p>

        {/* 모달 닫기 버튼 */}
        <img
          className="close-btn"
          src={require("../../../assets/icons/community/close.png")}
          onClick={() => setCommentModal(false)}
          alt="close-btn"
        />

        {/* 댓글 입력 부분 */}
        <div className="input-area">
          <input
            type="text"
            placeholder="댓글을 입력하세요"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            onKeyUp={() => {
              if (window.event.keyCode === 13) {
                submitComment();
                setUserComment("");
              }
            }}
          />
          <div onClick={submitComment}>작성</div>
        </div>
      </WriteComment>

      {/* 게시글 댓글 목록 출력*/}
      {commentArray.map((el) => {
        return (
          <Comment
            key={el.CID}
            CID={el.CID}
            isAccessible={el.isAccessible}
            nickname={el.nickname}
            comment={el.comment}
            like={el.like}
            updateAt={el.updateAt}
            childComment={el.childComment}
            boardNum={2}
            postID={PID}
            getCommentData={getCommentData}
            getPostData={getPostData}
          />
        );
      })}
    </div>
  );
};

//////////////////////////////////////// Styled-Components
const WriteComment = styled.div`
  min-width: 700px;

  .close-btn {
    position: absolute;
    width: 30px;
    right: 40px;
    top: 30px;

    :hover {
      cursor: pointer;
    }
  }

  .reply-cnt {
    padding: 10px 0;
    font-weight: bold;
    font-size: 0.9em;
    margin: 10px 15px;
  }

  .input-area {
    margin: 10px 15px;
    display: flex;
    font-size: 0.8em;

    input {
      border: 2px solid #d5d5d5;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      background-color: #f9f9f9;

      :focus {
        outline-color: var(--main-color);
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: bold;
      font-size: 0.9em;
      background-color: var(--main-color);
      border-radius: 20px;
      margin: 5px 0 5px 5px;
      width: 50px;
      height: 30px;
    }
  }
`;
export default CommentModal;
