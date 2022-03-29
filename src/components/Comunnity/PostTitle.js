import styled from "styled-components";

const PostTitle = ({ title, kind }) => {
  return (
    <PostTitleContainer onClick={() => console.log(title, "클릭")}>
      <Contents>
        <img src={require("../../assets/post.png")} />
        <Title>{title}</Title>
      </Contents>
    </PostTitleContainer>
  );
};

const PostTitleContainer = styled.div`
  margin: 0 20px;
  line-height: 40px;
  font-size: 0.8em;

  img {
    width: 20px;
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  text-decoration: underline #ffffff;
  text-underline-offset: 5px;
  transition: all 0.3s;

  :hover {
    text-decoration: underline 2px solid #6e95ff;
    text-underline-offset: 5px;
  }
`;

const Title = styled.div`
  padding-left: 10px;
  width: fit-content;
  font-size: 1.2em;
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`;

export default PostTitle;
