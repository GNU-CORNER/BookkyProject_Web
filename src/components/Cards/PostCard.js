import styled from "styled-components";

// 커뮤니티 - 게시글 한 개마다의 표현 단위
const PostCard = ({ title, content, likes, comments }) => {
  // PostCard View
  return (
    <PostCardContainer>
      <div className="flex-area">
        <div className="title">{title}</div>
        <div className="counts">
          <img src={require("../../assets/icons/community/like.png")} alt="" />
          <p>{likes}</p>
          <img
            src={require("../../assets/icons/community/comment.png")}
            alt=""
          />
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
  border-radius: 4px;
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

    img {
      width: 18px;
      height: 18px;
      margin: auto 8px;
    }

    p {
      font-size: 0.9em;
    }
  }
  .content {
    color: #c9c9c9;
    font-size: 0.9em;
  }
`;

export default PostCard;
