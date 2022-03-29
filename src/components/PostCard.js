import styled from "styled-components";

const PostCard = ({ title, content }) => {
  return (
    <PostCardContainer>
      <div className="title">{title}test</div>
      <div className="content">{content}test</div>
    </PostCardContainer>
  );
};

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
