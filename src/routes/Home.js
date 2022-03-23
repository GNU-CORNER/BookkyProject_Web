import styled from "styled-components";
import SpreadBooks from "../components/SpreadBooks";

function Home() {
  return (
    <HomeContainer>
      <MainHeader>
        <Title>
          <p>오늘</p>
          <p>
            <span>{`" 저니녁 "`}</span> 님에게
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
  font-size: 1.8em;
  color: white;
  font-weight: 500;
  padding-left: 5vw;

  span {
    color: black;
    font-weight: bold;
  }
`;

const TagTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  padding: 5vh 0 0 5vw;
`;

export default Home;
