import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Post } from "../../assets/icons/community/document.svg"; // 모달 닫기 버튼

// 커뮤니티 홈 - 게시글 제목
const PostTitle = ({ title, PID, kind }) => {
  // 변수 선언
  const navigate = useNavigate();

  // View
  return (
    <PostTitleContainer
      onClick={() => navigate("/postdetail/" + kind + "/" + PID)}
    >
      <Contents>
        <Post />
        <Title>{title}</Title>
      </Contents>
    </PostTitleContainer>
  );
};

//////////////////////////////////////// Styled-Components
const PostTitleContainer = styled.div`
  margin: 0 20px;
  line-height: 40px;
  font-size: 0.8em;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  text-decoration: underline #ffffff;
  text-underline-offset: 5px;
  transition: all 0.3s;

  :hover {
    text-decoration: underline 2px solid var(--main-color);
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
