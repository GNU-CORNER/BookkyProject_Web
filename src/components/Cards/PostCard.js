import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Like } from "../../assets/icons/community/heart-fill.svg"; // 좋아요 아이콘
import { ReactComponent as Comment } from "../../assets/icons/community/comment.svg"; // 좋아요 아이콘

// 커뮤니티 - 게시글 한 개마다의 표현 단위
const PostCard = ({
  pid,
  title,
  content,
  likes,
  comments,
  board,
  communityType,
}) => {
  const navigate = useNavigate();

  // PostCard View
  return (
    <PostCardContainer
      onClick={() =>
        navigate("/postdetail/" + communityType + "/" + pid, {
          state: { pid: pid, communityType: communityType },
        })
      }
    >
      <div className="flex-area">
        <div className="title">{title}</div>
        <div className="counts">
          <Like width="20px" height="20px" fill="rgb(255,122,122)" alt="" />
          <p>{likes}</p>
          <Comment width="20px" height="20px" fill="#6e95ff" alt="" />
          <p>{comments}</p>
        </div>
      </div>
      <div className="content">{content}</div>
    </PostCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const PostCardContainer = styled.div`
  border: 1px solid #d5d5d5;
  /* border-radius: 4px; */
  min-height: 90px;
  max-height: 90px;
  margin: -1px 0;
  padding: 10px;
  transition: all 0.2s;

  :hover {
    background-color: rgba(110, 149, 255, 0.2);
    cursor: pointer;
  }

  .flex-area {
    display: flex;
    justify-content: space-between;
  }

  .title {
    position: relative;
    font-size: 1.1em;
    font-weight: 500;
  }

  .counts {
    display: flex;

    svg {
      margin-left: 3px;
    }
    p {
      margin: auto 5px;
      font-size: 0.9em;
      font-weight: bold;
    }
  }
  .content {
    color: #c9c9c9;
    font-size: 0.9em;
    line-height: 1em;
    height: 4em;
    overflow: hidden;
  }
`;

export default PostCard;
