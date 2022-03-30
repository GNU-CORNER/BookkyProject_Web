import styled from "styled-components";

// 커뮤니티 - 게시글 한 개마다의 표현 단위
const PostCard = ({ title, content }) => {
  // PostCard View
  return (
    <PostCardContainer>
      <div className="title">{title}test</div>
      <div className="content">{content}test</div>
    </PostCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const PostCardContainer = styled.div`
  border: 1px solid gray;
  min-height: 80px;

  .title {
    font-size: 1.2em;
    font-weight: 500;
  }
  .content {
  }
`;

export default PostCard;
