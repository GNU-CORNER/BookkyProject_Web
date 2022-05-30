import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Reply from "./ReplyComment";
import axios from "axios";

// 커뮤니티 - 댓글
const Comment = ({
  boardNum,
  postID,
  comment,
  nickname,
  updateAt,
  like,
  childComment,
  CID,
  getPostData,
  isAccessible,
  getCommentData,
}) => {
  const user = useSelector((state) => state.userData);
  const [replyForm, setReplyForm] = useState(false);
  const [userComment, setUserComment] = useState("");

  // submitComment() : 댓글 작성
  function submitComment() {
    axios
      .post(
        "http://203.255.3.144:8002/v1/community/writecomment/" + boardNum,
        {
          comment: userComment,
          parentID: CID,
          PID: postID,
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
        getPostData();
        setUserComment("");
        setReplyForm(false);
        getCommentData();
      });
  }

  // deleteComment() : 댓글 삭제
  function deleteComment() {
    console.log(CID);
    axios
      .delete(
        "http://203.255.3.144:8002/v1/community/deletecomment/" + boardNum,
        {
          data: {
            CID: CID,
          },
          headers: {
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => {
        console.log("삭제 완", res);
        getPostData();
        getCommentData();
      });
  }

  return (
    <CommentContainer>
      <div className="manage-comment">
        {isAccessible ? (
          <>
            <span
              onClick={() =>
                replyForm ? setReplyForm(false) : setReplyForm(true)
              }
            >
              대댓글
            </span>
            <span
              className="delete"
              onClick={() => {
                if (window.confirm("댓글을 삭제하시겠습니까?")) deleteComment();
              }}
            >
              삭제
            </span>
          </>
        ) : (
          <>
            <span>공감하기</span>
            <span
              onClick={() =>
                replyForm ? setReplyForm(false) : setReplyForm(true)
              }
            >
              대댓글
            </span>
            <span>신고</span>
          </>
        )}
      </div>
      <p className="nickname"> {nickname}</p>
      <p className="comment">{comment}</p>
      <p className="subData">
        {updateAt}
        <span>공감({like})</span>
      </p>
      {replyForm ? (
        <div className="input-area">
          <input
            type="text"
            placeholder="대댓글을 입력하세요"
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
      ) : (
        <></>
      )}
      {childComment.map((el) => {
        return (
          <Reply
            key={el.CID}
            CID={el.CID}
            nickname={el.nickname}
            updateAt={el.updateAt}
            like={el.like}
            comment={el.comment}
            boardNum={boardNum}
            postID={postID}
            getPostData={getPostData}
            getCommentData={getCommentData}
          />
        );
      })}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  position: relative;
  padding: 15px;
  border-bottom: 1px solid #d5d5d5;

  .manage-comment {
    font-size: 0.8em;
    position: absolute;
    right: 25px;

    .delete {
      text-decoration: underline 1px solid #ff7a7a;
      color: #ff7a7a;
    }

    span {
      margin-left: 8px;
    }
  }
  .nickname {
    margin-bottom: 5px;
    font-weight: bold;
  }
  .comment {
    min-height: 28.8px;
    font-size: 0.9em;
  }

  .subData {
    margin-top: 10px;
    color: #d5d5d5;
    font-size: 0.8em;

    span {
      margin-left: 10px;
      color: black;
    }
  }

  .input-area {
    margin-top: 15px;
    display: flex;
    padding-left: 70px;
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
export default Comment;
