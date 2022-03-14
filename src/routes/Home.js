import styled from "styled-components";
import BookCard from "../components/BookCard";

function Home() {
  const Books = [
    {
      name: "리다기",
      description: "Hello",
      Author: "전인혁",
    },
    {
      name: "리다기2",
      description: "Hello2",
      Author: "전인혁2",
    },
    {
      name: "리다243기",
      description: "Hel2lo33334",
      author: "전인333혁",
    },
    {
      name: "리다4444기44444",
      description: "Hell444o",
      author: "전인혁4444",
    },
  ];

  return (
    <HomeContainer>
      <MainHeader className="test">
        <Title>
          오늘 <br />
          <TitleSpan>{"닉네임"}</TitleSpan>님에게 <br />
          추천하는 책이에요 !
        </Title>
      </MainHeader>
      <TagTitle>{"태그명"}</TagTitle>

      {/* Contents */}
      <div className="grid grid-cols-6 gap-5">
        {Books.map(() => {
          <BookCard
            name={Books.name}
            Author={Books.author}
            description={Books.description}
          />;
        })}
      </div>
    </HomeContainer>
  );
}

///////// Styled-components /////////
const HomeContainer = styled.div`
  width: calc(100vw - 160px);
`;

const MainHeader = styled.div`
  height: 20vh;
  background-color: #6c95ff;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #f5f5f5;
`;

const TitleSpan = styled.span`
  color: black;
`;

const TagTitle = styled.h2`
  font-weight: bold;
  font-size: 32px;
`;

export default Home;
