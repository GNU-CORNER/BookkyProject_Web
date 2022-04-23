import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// 커뮤니티 홈 - 게시판 바로가기 제목
const BoardTitle = ({ title, kind }) => {
  const navigate = useNavigate();
  return (
    <Title>
      <div className="title" onClick={() => navigate(`../${kind}`)}>
        {title} {">"}
      </div>
    </Title>
  );
};

//////////////////////////////////////// Styled-Components
const Title = styled.div`
  position: relative;
  background-color: #6e95ff;
  color: white;
  width: 100%;
  line-height: 50px;
  padding-left: 20px;
  border-bottom: 2px solid #6e95ff;
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
