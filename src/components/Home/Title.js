import { useSelector } from "react-redux";
import styled from "styled-components";

// Home - 추천영역 TITLE
const Title = () => {
  // 변수 선언
  const user = useSelector((state) => state.userData);

  // View
  return (
    <TitleContainer className="nodrag">
      <p className="subTitle">Today's Books</p>
      {/* 회원/비회원에 따른 문구 출력 */}
      <p>
        {user.nickname ? "오늘 " : "북키가 "}
        <span>{user.nickname ? user.nickname : "처음 오신 당신"}</span>
        {user.nickname ? " 님" : ""}에게 추천하는 책이에요
      </p>
    </TitleContainer>
  );
};

//////////////////////////////////////// Styled-Components
const TitleContainer = styled.div`
  color: #f5f5f5;
  font-size: 1.9em;
  color: white;
  padding-left: 72px;

  span {
    color: #ffd86d;
  }

  .subTitle {
    margin-bottom: 8px;
    font-size: 0.8em;
    color: white;
  }
`;

export default Title;
