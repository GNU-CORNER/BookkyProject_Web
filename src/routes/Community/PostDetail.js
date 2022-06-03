import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostDetailBookCard from "../../components/Cards/PostDetailBookCard";
import Comment from "../../components/Community/Comment";
import CommentModalContainer from "../../components/Community/CommentModal/CommentModalContainer";
import ReplyModalContainer from "../../components/Community/ReplyModal/ReplyModalContainer";
import ReplyPost from "../../components/Community/ReplyPost";
import PageHeader from "../../components/PageHeader";

// 커뮤니티 - 게시글 상세보기
const PostDetail = () => {
  //변수 선언
  const SideNavState = useSelector((state) => state.SideNavState);
  const user = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/");
  const PID = parseInt(location[3]);
  const boardNum = parseInt(location[2]);
  const [boardName, setBoardName] = useState("");
  const [commentCnt, setCommentCnt] = useState(0);
  const [replyCnt, setReplyCnt] = useState(0);
  const [commentModal, setCommentModal] = useState(false);
  const [replyWriteModal, setReplyWriteModal] = useState(false);
  const [userComment, setUserComment] = useState("");

  // 첨부 도서 형태
  const [book, setBook] = useState({
    AUTHOR: "",
    PUBLISHER: "위키북스",
    RATING: 2.5,
    TBID: 0,
    TITLE: "",
    thumbnailImage: "",
  });

  // 게시글 형태
  const [post, setPost] = useState({
    UID: 0,
    contents: "",
    createAt: "",
    like: [],
    nickname: "",
    title: "",
    updateAt: "",
    postImage: [],
    views: 0,
  });

  // 댓글 틀
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

  // 답글 틀
  const [replyPost, setReplyPost] = useState([
    {
      PID: 0,
      contents: "",
      createAt: "",
      isAccessible: false,
      like: [],
      nickname: "",
      parentQPID: 0,
      thumbnail: null,
      title: "",
      updateAt: "",
      views: 0,
    },
  ]);

  // init() : 최초 로드 시 - 게시판 이름 설정
  function init() {
    switch (boardNum) {
      case 0:
        setBoardName("자유게시판");
        break;
      case 1:
        setBoardName("중고장터");
        break;

      case 2:
        setBoardName("Q&A게시판");
        break;

      default:
        setBoardName("");
        break;
    }
  }

  // getPostData() : 게시글 데이터 요청
  function getPostData() {
    if (user.accessToken.length > 0)
      axios
        .get(
          "http://203.255.3.144:8002/v1/community/postdetail/" +
            boardNum +
            "/" +
            PID,
          {
            headers: {
              "access-token": user.accessToken,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setPost(res.data.result.postdata);
          setCommentCnt(res.data.result.commentCnt);
          setCommentArray(res.data.result.commentdata);
          setReplyPost(res.data.result.replydata);
          setReplyCnt(res.data.result.replyCnt);
          setBook(res.data.result.Book);
        });
  }

  // deletePost() : 게시글 삭제 요청
  function deletePost() {
    function setPathName() {
      switch (boardNum) {
        case 0:
          return "free";
        case 1:
          return "trade";
        case 2:
          return "qna";
        default:
          return "";
      }
    }
    axios
      .delete("http://203.255.3.144:8002/v1/community/deletepost/" + boardNum, {
        data: {
          PID: PID,
        },
        headers: {
          "access-token": user.accessToken,
        },
      })
      .then(() => {
        navigate(`/${setPathName()}/1`);
      })
      .catch((error) => {
        alert(error.response.data.errorMessage);
      });
  }

  // likePost() : 게시글의 좋아요 버튼 클릭 시 서버와 통신
  function likePost() {
    if (user.accessToken.length > 0)
      axios
        .post(
          "http://203.255.3.144:8002/v1/community/like/" + boardNum + "/" + PID,
          {},
          {
            headers: {
              "access-token": user.accessToken,
            },
          }
        )
        .then((res) => console.log(res));
  }

  // modifyPost() : 게시글 수정
  function modifyPost() {
    navigate("/modifypost", {
      state: {
        post: post,
        book: book,
        PID: PID,
        boardName: boardName,
        boardNum: boardNum,
      },
    });
  }

  // submitComment() : 댓글 작성
  function submitComment() {
    axios
      .post(
        "http://203.255.3.144:8002/v1/community/writecomment/" + boardNum,
        {
          comment: userComment,
          parentID: 0,
          PID: PID,
        },
        {
          headers: {
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => {
        getPostData();
      });
  }

  // 게시글 업데이트
  useEffect(getPostData, [boardNum, PID, user]);

  // 최초 로드시, 게시판 정보 초기화 (게시판 번호, 게시판 이름)
  useEffect(init, [boardNum]);

  // 게시글 상세보기 View
  return (
    <PostDetailContainer width={SideNavState.width}>
      {/* 헤더*/}
      <PageHeader title="게시글 상세보기" subTitle={boardName} />
      <ContentArea>
        {/* 작성자 프로필 */}
        <div className="profile">
          <img src={post.thumbnail} alt="e" />
          <p>{post.nickname}</p>
        </div>

        {/* 게시글 컨텐츠 영역 상단 (제목, 작성일, 조회수)*/}
        <div className="title">{post.title}</div>
        <div className="subData">
          <p className="createAt">
            {post.createAt === post.updateAt ? "Created at " : "Modified at "}
            {post.createAt === post.updateAt ? post.createAt : post.updateAt}
          </p>
          <p className="views">{post.views} views</p>
        </div>

        {/* 게시글 컨텐츠 영역 하단 (내용, 이미지, 첨부 도서, 좋아요, 댓글, 답글)*/}
        <div className="body">
          <PostDetailBookCard book={book} />
          {/* 이미지 */}
          {post.postImage !== undefined
            ? post.postImage.map((el, cnt) => (
                <img key={cnt} src={el} alt="post-img" />
              ))
            : ""}

          {/* 내용 */}
          <div className="main-text">{post.contents}</div>

          {/* 좋아요 */}
          <div className="reactions bottom">
            <div className="likes" onClick={() => likePost()}>
              좋아요({post.like.length})
            </div>

            {/* Q&A 게시판일 때, 댓글 모달 창 */}
            <CommentModalContainer
              commentModal={commentModal}
              setCommentModal={setCommentModal}
              setCommentCnt={setCommentCnt}
              getPostData={getPostData}
              PID={PID}
            />
            {boardNum === 2 ? (
              <div
                className="comments"
                onClick={() => {
                  setCommentModal(true);
                }}
              >
                댓글({commentCnt})
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* 내가 작성한 게시글이면 게시글 관리 메뉴 출력 (수정 및 삭제) */}
          {post.isAccessible ? (
            <div className="manage-post bottom">
              <div className="btn modify" onClick={modifyPost}>
                수정
              </div>
              <div
                className="btn delete"
                onClick={() => {
                  if (window.confirm("게시글을 삭제하시겠습니까?"))
                    deletePost();
                }}
              >
                삭제
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </ContentArea>

      {/* 댓글과 답글 출력 */}
      {
        // Case 1 : Q&A 게시판일 경우
        boardNum === 2 ? (
          <ReplyArea>
            <ReplyHeader>
              <ReplyModalContainer
                replyWriteModal={replyWriteModal}
                setReplyWriteModal={setReplyWriteModal}
                PID={PID}
              />
              <div className="reply-cnt">{replyCnt}개의 답글</div>
              <div
                className="reply-write-btn reply-cnt"
                onClick={() => setReplyWriteModal(true)}
              >
                답글 쓰기
              </div>
            </ReplyHeader>
            {replyPost.map((el, cnt) => {
              return (
                <ReplyPost
                  key={el.PID}
                  PID={el.PID}
                  title={el.title}
                  contents={el.contents}
                  createAt={el.createAt}
                  updateAt={el.updateAt}
                  like={el.like}
                  views={el.views}
                  nickname={el.nickname}
                  thumbnail={el.thumbnail}
                  commentCnt={el.commentCnt}
                />
              );
            })}
          </ReplyArea>
        ) : (
          // Case 2 : Q&A 게시판이 아닌 경우 (자유, 중고장터, Hot)
          <CommentArea>
            <WriteComment>
              <p className="reply-cnt">{commentCnt}개의 댓글</p>
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

            {/* 댓글 리스트 출력 */}
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
                  boardNum={boardNum}
                  PID={PID}
                  getPostData={getPostData}
                />
              );
            })}
          </CommentArea>
        )
      }
    </PostDetailContainer>
  );
};

//////////////////////////////////////// Styled-Components
const PostDetailContainer = styled.div`
  width: ${(props) => props.width};
`;

const ContentArea = styled.div`
  position: relative;
  min-width: 700px;
  margin: 0 12vw 0 12vw;
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
    padding: 10px;
    margin-top: 1vh;

    .main-text {
      min-height: 30vh;
      line-height: 1.5em;
      margin-bottom: 30px;
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

const CommentArea = styled.div`
  margin: 0 12vw;
`;
const ReplyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ReplyArea = styled.div`
  margin: 0 12vw;
  position: relative;

  .reply-cnt {
    padding: 10px 0;
    font-weight: bold;
    font-size: 0.9em;
    margin: 10px 15px;
    width: fit-content;
  }

  .reply-write-btn {
    :hover {
      cursor: pointer;
    }
  }
`;
const WriteComment = styled.div`
  min-width: 700px;

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
export default PostDetail;
