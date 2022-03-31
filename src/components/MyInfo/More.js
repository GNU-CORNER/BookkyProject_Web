import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// MyInfo() - 더 보기 버튼
const More = () => {
  // 변수 선언
  const navigate = useNavigate();
  return (
    <MoreBtn onClick={() => navigate("/comunnity")}>더 보기 {">"} </MoreBtn>
  );
};

//////////////////////////////////////// Styled-Components
const MoreBtn = styled.div`
  text-align: center;
  line-height: 43px;
  background-color: #f1f1f1;
  color: gray;
  border: 1px solid #d5d5d5;
  min-height: 45px;
  border-radius: 4px;
  transition: all 0.3s;
  font-weight: bold;
  :hover {
    background-color: #d5d5d5;
    color: black;
    cursor: pointer;
  }
`;
export default More;
