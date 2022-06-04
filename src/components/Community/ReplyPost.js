import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostDetailBookCard from "../Cards/PostDetailBookCard";
import CommentModalContainer from "./CommentModal/CommentModalContainer";
import ReplyModalContainer from "./ReplyModal/ReplyModalContainer";

// Q&A 게시판 - 게시글 상세보기 답글
const ReplyPost = ({
  contents,
  createAt,
  like,
  nickname,
  thumbnail,
  title,
  updateAt,
  views,
  PID,
  isAccessible,
  commentCnt,
  postImage,
  TBID,
  book,
  parentQPID,
  setReplyWriteModal,
  replyWriteModal,
}) => {
  // 변수 선언
  const [commentModal, setCommentModal] = useState(false);
  const navigate = useNavigate();

  // deletePost() : 게시글 삭제 요청
  function deletePost() {
    console.log("답글 삭제");
  }

  // modifyPost() : 게시글 수정
  function modifyPost() {
    setReplyWriteModal(true);
  }

  // View
  return (
    <ReplyPostContainer>
      {/* 작성자 프로필 */}
      <div className="profile">
        <img src={thumbnail} alt="e" />
        <p>{nickname}</p>
      </div>

      {/* 답글 컨텐츠 영역 상단(제목, 작성일) */}
      <div className="title">Re : {title}</div>
      <div className="subData">
        <p className="createAt">
          {createAt === updateAt ? "Created at " : "Modified at "}
          {createAt === updateAt ? createAt : updateAt}
        </p>
      </div>
      {/* 답글 컨텐츠 영역 하단(내용, 좋아요) */}
      <div className="body">
        <PostDetailBookCard book={book} />
        {/* 이미지 */}
        {postImage !== undefined
          ? postImage.map((el, cnt) => (
              <img key={cnt} src={el} alt="post-img" />
            ))
          : ""}
        <div className="main-text">{contents}</div>
        <div className="reactions bottom">
          <div className="likes">좋아요({like.length})</div>

          {/* Q&A 게시판 - 댓글 모달 */}
          <CommentModalContainer
            commentModal={commentModal}
            setCommentModal={setCommentModal}
            PID={PID}
          />

          {/* 댓글 버튼 클릭 시, 댓글 모달 Open */}
          <div
            className="comments"
            onClick={() => {
              setCommentModal(true);
            }}
          >
            댓글({commentCnt})
          </div>
        </div>
        <ReplyModalContainer
          post={{
            title: title,
            book: book,

            contents: contents,
            PID: PID,
          }}
          title={title}
          postImage={postImage}
          setReplyWriteModal={setReplyWriteModal}
          replyWriteModal={replyWriteModal}
        />
        {/* 내가 작성한 게시글이면 게시글 관리 메뉴 출력 (수정 및 삭제) */}
        {isAccessible ? (
          <div className="manage-post bottom">
            <div className="btn modify" onClick={modifyPost}>
              수정
            </div>
            <div
              className="btn delete"
              onClick={() => {
                if (window.confirm("게시글을 삭제하시겠습니까?")) deletePost();
              }}
            >
              삭제
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </ReplyPostContainer>
  );
};

//////////////////////////////////////// Styled-Components
const ReplyPostContainer = styled.div`
  position: relative;
  min-width: 700px;
  margin: 0 0 2vh 0;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 15px;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;

  .profile {
    display: flex;
    position: absolute;
    right: 0;

    p {
      margin: 0 10px;
      font-weight: bold;
      line-height: 32px;
    }

    img {
      object-fit: cover;
      border-radius: 4px;
      width: 32px;
      height: 32px;
    }
  }
  .title {
    font-size: 1.8em;
    font-weight: bold;
    line-height: 32px;
  }

  .subData {
    margin: 5px 0;
    padding: 0 10px;
    width: fit-content;
    background-color: #f5f5f5;
    border-radius: 10px;
    line-height: 20px;
    font-size: 0.9em;
    display: flex;
    color: #c5c5c5;

    .createAt {
    }

    .views {
      margin-left: 15px;

      ::before {
        content: "";
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 5px;
        background-size: cover;
        background-image: url(${require("../../assets/icons/community/views.png")});
      }
    }
  }

  .body {
    position: relative;
    margin-top: 2vh;
    padding: 10px;

    .main-text {
      height: 20vh;
    }

    .bottom {
      line-height: 25px;
      bottom: 0;
    }
    // reactions
    .reactions {
      display: flex;
      font-size: 0.9em;
      font-weight: bold;
    }

    .likes {
      margin-right: 15px;

      :hover {
        cursor: pointer;
      }

      ::before {
        display: inline-block;
        content: "";
        margin-right: 3px;
        width: 20px;
        height: 20px;
        vertical-align: -4px;
        background-size: cover;
        background-image: url(${require("../../assets/icons/community/heart.png")});
      }
    }

    .comments {
      :hover {
        cursor: pointer;
      }
    }

    // manage-post (게시글 수정, 삭제 버튼 영역)
    .manage-post {
      position: absolute;
      display: flex;
      right: 0;
    }

    // btn (버튼 공통 속성)
    .btn {
      text-align: center;
      font-size: 0.8em;
      width: 45px;
      margin-left: 5px;
      border-radius: 5px;
      color: white;
      font-weight: bold;

      :hover {
        cursor: pointer;
      }
    }

    // modify(수정 버튼 속성) delete (삭제 버튼 속성)
    .modify {
      background-color: var(--main-color);
    }
    .delete {
      background-color: #ff7a7a;
    }
  }
`;

export default ReplyPost;
