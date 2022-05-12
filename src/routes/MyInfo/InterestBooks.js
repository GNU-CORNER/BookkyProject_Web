import styled from "styled-components";
import { useSelector } from "react-redux";
import BookCard from "../../components/Cards/BookCard";

// SideBar - 내 관심도서
function Interests() {
  // 변수 정의
  const user = useSelector((state) => state.userData);
  const mybooks = useSelector((state) => state.books.interests);
  const SideNavState = useSelector((state) => state.SideNavState);

  // 관심도서 View
  return (
    <InterstsContainer width={SideNavState.width}>
      <MainHeader>
        <Title className="nodrag">
          <p>
            <span>{user.nickname}</span>
            {user.accessToken ? " 님" : ""}의 관심도서입니다
          </p>
          <p className="sub">
            총 <span>{mybooks.length}권</span>의 관심도서가 있네요 !
          </p>
        </Title>
      </MainHeader>
      <ContentArea>
        {mybooks.map((book) => {
          return (
            <BookCard
              key={book.BID}
              className="nodrag"
              title={book.TITLE}
              thumnail={book.thumbnailImage}
              author={book.AUTHOR}
              publisher={book.PUBLISHER}
            />
          );
        })}
      </ContentArea>
    </InterstsContainer>
  );
}

//////////////////////////////////////// Styled-Components
const ContentArea = styled.div`
  width: ${(props) => props.width};
  margin: 3vh 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-template-rows: repeat(auto-fit, 250px);
  justify-content: center;
  column-gap: 1vw;
  row-gap: 3vh;
`;

const InterstsContainer = styled.div`
  width: ${(props) => props.width};
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 15px;
  max-height: 250px;
  height: 180px;
  background-color: #6c95ff;
  margin: 5px 10px;
`;

const Title = styled.div`
  color: #f5f5f5;
  font-size: 2em;
  color: white;
  font-weight: 550;
  padding-left: 72px;

  span {
    color: #ffd86d;
  }
  .sub {
    font-size: 0.7em;
    font-weight: 500;
  }
`;

export default Interests;
