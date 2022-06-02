import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 커뮤니티 홈 - 게시판 바로가기 제목
const BoardTitle = ({ title, kind }) => {
  // 변수 선언
  const navigate = useNavigate();

  // View
  return (
    <Title>
      <div className="title" onClick={() => navigate(`../${kind}/1`)}>
        {title} {">"}
      </div>
    </Title>
  );
};

//////////////////////////////////////// Styled-Components
const Title = styled.div`
  position: relative;
  background-color: var(--main-color);
  color: white;
  width: 100%;
  line-height: 50px;
  padding-left: 20px;
  border-bottom: 2px solid var(--main-color);
  font-size: 1.4em;
  font-weight: 500;
  display: flex;
  div {
    width: fit-content;

    :hover {
      cursor: pointer;
    }
  }

  .title {
    margin-left: 0px;
    transition: all 0.3s;

    :hover {
      margin-left: 10px;
    }
  }
`;

export default BoardTitle;
