import { useSelector } from "react-redux";
import styled from "styled-components";
import SpreadBooks from "../../components/Home/SpreadBooks";
import TodayBooks from "../../components/Home/TodayBooks";

// Home
function Home() {
  const user = useSelector((state) => state.userData);
  const SideNavState = useSelector((state) => state.SideNavState);

  // Home View
  return (
    <HomeContainer width={SideNavState.width}>
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
        <TodayBooks />
      </MainHeader>
      <BooksContainer>{/* <SpreadBooks /> */}</BooksContainer>
    </HomeContainer>
  );
}

//////////////////////////////////////// Styled-Components
const HomeContainer = styled.div`
  width: ${(props) => props.width};
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 15px;
  height: 200px;
  background-color: #6c95ff;
  margin: 5px 10px;
`;

const Title = styled.div`
  color: #f5f5f5;
  font-size: 1.6em;
  color: white;
  padding-left: 72px;

  span {
    color: #ffd86d;
  }
`;

const BooksContainer = styled.div`
  margin: 0 80px;
  transition: all 0.3s;

  .menu-item-wrapper {
    transition: all 0.3s;
    border: 2px solid #ffffff;

    :hover {
      border: 2px solid var(--main-color);
    }
  }
`;

export default Home;
