import { useSelector } from "react-redux";
import styled from "styled-components";
import TodayBooks from "../../components/Home/TodayBooks";
import Title from "../../components/Home/Title";
import RecommendByTag from "../../components/Home/RecommendByTag";

// Home new ver.
function Home() {
  const SideNavState = useSelector((state) => state.SideNavState);

  // Home View
  return (
    <HomeContainer width={SideNavState.width}>
      <MainHeader>
        <Title />
        <TodayBooks />
      </MainHeader>
      <BooksContainer>
        <div>
          <div className="title">태그 별 추천</div>
          <RecommendByTag />
        </div>
        <div className="lowerArea">
          <div>
            <div className="title">커뮤니티</div>
          </div>
          <div>
            <div className="title">Banner</div>
            <img
              src={require("../../assets/icons/home/testBanner.png")}
              alt=""
            />
          </div>
        </div>
      </BooksContainer>
    </HomeContainer>
  );
}

//////////////////////////////////////// Styled-Components
const HomeContainer = styled.div`
  width: ${(props) => props.width};
  color: var(--bright-base-font-color);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 15px;
  height: 180px;
  background-color: var(--main-color);
  margin: 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const BooksContainer = styled.div`
  display: grid;
  transition: all 0.2s;
  justify-content: center;

  .title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 1.5vh 0;

    ::before {
      content: "";
      display: inline-block;
      vertical-align: -4px;
      width: 5px;
      margin-right: 8px;
      height: 1.2em;
      background-color: var(--main-color);
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }
  }

  .lowerArea {
    display: grid;
    grid-template-columns: 60% 40%;
  }
`;

export default Home;
