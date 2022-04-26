import { useSelector } from "react-redux";
import styled from "styled-components";

// Home - 추천영역 TITLE
const Title = () => {
  const user = useSelector((state) => state.userData);

  return (
    <TitleContainer className="nodrag">
      {/* 회원/비회원에 따른 문구 출력 */}
      <p>{user.nickname ? "오늘" : "북키가"}</p>
      <p>
        <span>{user.nickname ? user.nickname : "처음 오신 당신"}</span>
        {user.nickname ? " 님" : ""}에게
      </p>
      <p>추천하는 책이에요 !</p>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  color: #f5f5f5;
  font-size: 1.6em;
  color: white;
  padding-left: 72px;

  span {
    color: #ffd86d;
  }
`;

export default Title;
