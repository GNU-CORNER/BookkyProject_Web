import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

// 게시글 상세보기 - 대댓글
const Reply = ({
  CID,
  comment,
  updateAt,
  like,
  nickname,
  boardNum,
  getPostData,
  getCommentData,
}) => {
  // 변수 선언
  const user = useSelector((state) => state.userData);

  // deleteComment() : 댓글 삭제
  function deleteComment() {
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
        console.log(res);
        getPostData();
        getCommentData();
      })
      .catch((error) => {
        alert(error.response.data.errorMessage);
      });
  }

  // View
  return (
    <ReplyContainer>
      <img
        className="reply-icon"
        src={require("../../assets/icons/community/reply.png")}
        alt="reply icon"
      />
      <div className="reply-contents">
        <div className="manage-comment">
          {user.nickname === nickname ? (
            <span
              className="delete"
              onClick={() => {
                if (window.confirm("대댓글을 삭제하시겠습니까?"))
                  deleteComment();
              }}
            >
              삭제
            </span>
          ) : (
            <>
              <span>공감하기</span>
              <span>신고</span>
            </>
          )}
        </div>
        <p className="nickname"> {nickname}</p>
        <p className="comment">{comment}</p>
        <p className="subData">
          {updateAt}
          <span onClick={() => console.log(CID)}>공감({like})</span>
        </p>
      </div>
    </ReplyContainer>
  );
};

//////////////////////////////////////// Styled-Components
const ReplyContainer = styled.div`
  display: flex;
  margin: 10px 0;

  .reply-icon {
    margin: auto 20px;
    width: 30px;
    height: 30px;
  }

  .reply-contents {
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    background-color: #f9f9f9;
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
    font-size: 0.9em;

    span {
      color: black;
    }
  }
`;
export default Reply;
