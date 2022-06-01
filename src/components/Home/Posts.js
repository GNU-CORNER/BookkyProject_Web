import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Posts = ({ posts, slug }) => {
  const navigate = useNavigate();
  return (
    <PostsContainer>
      {posts.map((el, cnt) => {
        if (cnt < 3)
          return (
            <h4
              key={el.PID}
              onClick={() => navigate("/postdetail/" + slug + "/" + el.PID)}
            >
              - {el.title}
            </h4>
          );
        else return "";
      })}
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  min-width: 100%;
  margin: auto;
  margin-left: 10px;

  h4 {
    width: fit-content;
    color: gray;
    line-height: 1.5em;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      color: var(--bright-base-font-color);
    }
  }
`;
export default Posts;
