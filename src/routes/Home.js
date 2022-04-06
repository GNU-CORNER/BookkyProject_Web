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
      <BooksContainer>
        <SpreadBooks />
      </BooksContainer>
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

const BooksContainer = styled.div`
  margin: 0 100px;
  transition: all 0.3s;

  .scroll-menu-arrow {
    padding: 20px;
  }

  .menu-item-wrapper {
    border: 2px solid #f7f7f7;
    border-radius: 4px;
    margin: 0 10px;
    transition: all 0.3s;

    :hover {
      border: 2px solid #6e95ff;
    }
  }
`;
export default Home;
