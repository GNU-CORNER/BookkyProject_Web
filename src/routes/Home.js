import { useSelector } from "react-redux";
import styled from "styled-components";
import SpreadBooks from "../components/Home/SpreadBooks";

function Home() {
  const user = useSelector((state) => state.userData);

  return (
    <HomeContainer>
      <MainHeader>
        <Title className="nodrag">
          <p>{user.accessToken ? "오늘" : "북키가"}</p>
          <p>
            <span>{user.accessToken ? user.nickname : "처음 오신 당신"}</span>
            {user.accessToken ? " 님" : ""}에게
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

///////// Styled-components /////////
const HomeContainer = styled.div`
  width: calc(100vw - 160px);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 0 0 20px 20px;
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
