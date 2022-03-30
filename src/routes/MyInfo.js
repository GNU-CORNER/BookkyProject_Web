import styled from "styled-components";
import { useSelector } from "react-redux";
import InterestBooks from "../components/MyInfo/InterestBooks";
import InterestField from "../components/MyInfo/InterestField";

// SideBar - 내 정보
function MyInfo() {
  // 변수 정의
  const user = useSelector((state) => state.userData);

  // 내 정보 View
  return (
    <MyInfoContainer>
      <MainHeader>
        <Title className="nodrag">
          <p>
            <span>{user.nickname}</span>
            {user.accessToken ? " 님" : ""}의 정보입니다
          </p>
          <p className="sub">
            총 <span>{"5"}개</span>의 관심분야, <span>{"3"}개</span>의
            관심도서가 있네요 !
          </p>
        </Title>
      </MainHeader>
      <ContentContainer>
        <div className="interestField">
          <InterestField />
        </div>
        <div className="interestBooks">
          <InterestBooks />
        </div>
        <div className="myPost">gd</div>
        <div className="myReview">gdgd</div>
      </ContentContainer>
    </MyInfoContainer>
  );
}

//////////////////////////////////////// Styled-Components
const ContentContainer = styled.div`
  margin-top: 3vh;
  display: grid;
  grid-template-columns: repeat(2, 750px);
  grid-template-rows: repeat(6, 80px);
  justify-content: center;
  column-gap: 3vw;
  row-gap: 3vh;

  .interestField {
    border: 1px solid #6e95ff;
    grid-row: 1 / 3;
    border-radius: 5px;
  }

  .interestBooks {
    border: 1px solid #6e95ff;
    grid-row: 3 / 7;
    border-radius: 5px;
  }
  .myPost {
    border: 1px solid #6e95ff;
    grid-row: -7 / -4;
    border-radius: 5px;
  }
  .myReview {
    border: 1px solid #6e95ff;
    grid-row: -4 / -1;
    border-radius: 5px;
  }
`;

const MyInfoContainer = styled.div`
  width: calc(100vw - 160px);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 0 0 15px 15px;
  max-height: 250px;
  height: 20vh;
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

  .sub {
    font-size: 0.7em;
  }
`;

export default MyInfo;
