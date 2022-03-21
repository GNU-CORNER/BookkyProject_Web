import styled from "styled-components";
import SpreadBooks from "../components/SpreadBooks";

function Home() {
  return (
    <HomeContainer>
      <MainHeader>
        <Title>
          오늘 <br />
          <TitleSpan>{"닉네임"}</TitleSpan>님에게 <br />
          추천하는 책이에요 !
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
  position: relative;
  border-radius: 0 0 20px 20px;
  height: 25vh;
  background-color: #6c95ff;
`;

const Title = styled.h1`
  color: #f5f5f5;
  font-weight: bold;
  font-size: 1.6rem;
`;

const TitleSpan = styled.span`
  color: black;
`;

const TagTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  padding: 5vh 0 0 5vw;
`;

export default Home;
