import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Reply from "./ReplyComment";
import axios from "axios";

// 커뮤니티 - 댓글
const Comment = ({
  boardNum,
  PID,
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
  // 변수 선언
  const state = useSelector((state) => state);
  const baseURL = state.baseURL.url;
  const user = state.userData;
  const [replyForm, setReplyForm] = useState(false);
  const [userComment, setUserComment] = useState("");

  // submitComment() : 대댓글 작성 통신
  function submitComment() {
    console.log("postID", PID);
    axios
      .post(
        baseURL + "community/writecomment/" + boardNum,
        {
          comment: userComment,
          parentID: CID, // CID(대댓글의 경우) or 0(댓글작성의 경우)
          PID: PID,
        },
        {
          headers: {
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => {
        console.log("댓글 작성", res);
        try {
          getPostData();
          getCommentData();
          setUserComment("");
          setReplyForm(false);
        } catch (error) {
          console.log(error);
        }
      });
  }

  // deleteComment() : 댓글 삭제
  function deleteComment() {
    console.log(CID);
    axios
      .delete(baseURL + "community/deletecomment/" + boardNum, {
        data: {
          CID: CID,
        },
        headers: {
          "access-token": user.accessToken,
        },
      })
      .then((res) => {
        console.log("삭제 완", res);
        getPostData();
        getCommentData();
      });
  }

  // View
  return (
    <CommentContainer>
      {/* 댓글 관리 메뉴 영역 */}
      <div className="manage-comment">
        {/* 내가 작성한 댓글인지 판단 */}
        {isAccessible ? (
          // 내가 작성했다면 관리 메뉴 출력 (삭제)
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
          // 내 댓글이 아니라면, 일반 메뉴 출력 (공감하기, 신고)
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

      {/* 댓글 컨텐츠 영역 (닉네임, 댓글 내용, 공감수 등) */}
      <p className="nickname"> {nickname}</p>
      <p className="comment">{comment}</p>
      <p className="subData">
        {updateAt}
        <span>공감({like})</span>
      </p>

      {/* 대댓글 버튼 클릭시 작성 메뉴 Open/Close*/}
      {replyForm ? (
        <div className="input-area">
          <input
            type="text"
            placeholder="대댓글을 입력하세요"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            onKeyUp={() => {
              // Enter 키 - 댓글 작성 이벤트
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

      {/* 대댓글 출력 */}
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
            PID={PID}
            getPostData={getPostData}
            getCommentData={getCommentData}
          />
        );
      })}
    </CommentContainer>
  );
};

//////////////////////////////////////// Styled-Components
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
