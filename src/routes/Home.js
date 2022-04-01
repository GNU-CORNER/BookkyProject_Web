import { useSelector } from "react-redux";
import styled from "styled-components";
import SpreadBooks from "../components/Home/SpreadBooks";

// Home
function Home() {
  const user = useSelector((state) => state.userData);

  // Home View
  return (
    <HomeContainer>
      <MainHeader>
        <Title className="nodrag">
          {/* 회원/비회원에 따른 문구 출력 */}
          <p>{user.nickname ? "오늘" : "북키가"}</p>
          <p>
            <span>{user.nickname ? user.nickname : "처음 오신 당신"}</span>
            {user.nickname ? " 님" : ""}에게
          </p>
          <p>추천하는 책이에요 !</p>
        </Title>
      </MainHeader>
      <div>
        <TagTitle>{"React"}</TagTitle>
        <SpreadBooks />
      </div>
      <div>
        <TagTitle>{"JavaScript"}</TagTitle>
        <SpreadBooks />
      </div>
    </HomeContainer>
  );
}

//////////////////////////////////////// Styled-Components
const HomeContainer = styled.div`
  width: calc(100vw - 160px);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 0 0 15px 15px;
  max-height: 250px;
  height: 25vh;
  background-color: #6c95ff;
`;

const Title = styled.div`
  color: #f5f5f5;
  font-size: 2em;
  color: white;
  font-weight: 550;
  padding-left: 5vw;

  span {
    color: black;
  }
`;

const TagTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  padding: 5vh 0 0 5vw;
`;

export default Home;
