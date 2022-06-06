import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Post } from "../../assets/icons/community/document.svg"; // 모달 닫기 버튼

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
            <div className="post">
              <Post width="18px" height="18px" />
              <h4
                key={el.PID}
                onClick={() => navigate("/postdetail/" + slug + "/" + el.PID)}
              >
                {el.title}
              </h4>
            </div>
          );
        else return "";
      })}
    </PostsContainer>
  );
};

//////////////////////////////////////// Styled-Components
const PostsContainer = styled.div`
  min-width: 100%;
  margin: 5px auto auto 10px;

  .post {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  h4 {
    font-size: 0.9em;
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
