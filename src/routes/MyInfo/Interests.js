import styled from "styled-components";
import { useSelector } from "react-redux";
import BookCard from "../../components/Home/BookCard";

// SideBar - 내 관심도서
function Interests() {
  // 변수 정의
  const user = useSelector((state) => state.userData);
  const mybooks = useSelector((state) => state.books.interests);

  // 관심도서 View
  return (
    <InterstsContainer>
      <MainHeader>
        <Title className="nodrag">
          <p>
            <span>{user.nickname}</span>
            {user.accessToken ? " 님" : ""}의 관심도서입니다
          </p>
          <p className="sub">
            - <span>{mybooks.length}권</span>의 관심도서가 있네요 !
          </p>
        </Title>
      </MainHeader>
      <ContentContainer>
        {mybooks.map((book) => {
          return (
            <div className="border">
              <BookCard
                className="nodrag"
                key={book.BID}
                title={book.TITLE}
                thumnail={book.thumbnailImage}
                author={book.AUTHOR}
                publisher={book.PUBLISHER}
              />
            </div>
          );
        })}
      </ContentContainer>
    </InterstsContainer>
  );
}

//////////////////////////////////////// Styled-Components
const ContentContainer = styled.div`
  margin-top: 3vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-template-rows: repeat(auto-fit, 300px);
  justify-content: center;
  column-gap: 1vw;
  row-gap: 3vh;

  .border {
    display: grid;
    justify-content: center;
    border: 2px solid #f1f1f1;
    transition: all 0.3s;
    border-radius: 4px;

    :hover {
      border: 2px solid #6e95ff;
      cursor: pointer;
    }
  }
`;

const InterstsContainer = styled.div`
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
    color: #ffd86d;
  }
  .sub {
    font-size: 0.7em;
    font-weight: 500;
  }
`;

export default Interests;
