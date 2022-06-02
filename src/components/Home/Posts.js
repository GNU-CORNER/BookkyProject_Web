import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 홈 - 홈 커뮤니티 게시판 요약 출력
const Posts = ({ posts, slug }) => {
  // 변수 선언
  const navigate = useNavigate();

  // View
  return (
    <PostsContainer>
      {/* 게시글 출력 영역 (최대 3개) */}
      {posts.map((el, cnt) => {
        if (cnt < 3)
          return (
            <h4
              key={el.PID}
              onClick={() => navigate("/postdetail/" + slug + "/" + el.PID)}
            >
              {el.title}
            </h4>
          );
        else return "";
      })}
    </PostsContainer>
  );
};

//////////////////////////////////////// Styled-Components
const PostsContainer = styled.div`
  min-width: 100%;
  margin: auto;
  margin-left: 10px;

  h4 {
    width: fit-content;
    color: gray;
    line-height: 1.5em;
    transition: all 0.3s;

    ::before {
      margin-right: 5px;
      content: "";
      display: inline-block;
      background: url(${require("../../assets/icons/community/post.png")});
      background-size: 1.3em;
      width: 1.3em;
      height: 1.3em;
      vertical-align: -4px;
    }
    :hover {
      cursor: pointer;
      color: var(--bright-base-font-color);
    }
  }
`;
export default Posts;
