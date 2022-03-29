import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardTitle = ({ title, kind }) => {
  const navigate = useNavigate();
  return (
    <Title>
      <div onClick={() => navigate(`../${kind}`)}>{title}</div>
      <div className="Link" onClick={() => navigate(`../${kind}`)}>
        {">"}
      </div>
    </Title>
  );
};

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

  div {
    width: fit-content;
    :hover {
      cursor: pointer;
    }
  }

  .Link {
    position: absolute;
    font-size: 1.2em;
    bottom: 0;
    right: 15px;
    :hover {
      cursor: pointer;
    }
  }
`;

const GoBoard = styled(Link)``;
export default BoardTitle;
