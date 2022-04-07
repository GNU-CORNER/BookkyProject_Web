import styled from "styled-components";
import { useSelector } from "react-redux";
import InterestBooks from "../../components/MyInfo/InterestBooks";
import InterestField from "../../components/MyInfo/InterestField";
import PostCard from "../../components/PostCard";
import ContentsHeader from "../../components/MyInfo/ContentsHeader";
import More from "../../components/MyInfo/More";

// SideBar - 내 정보
function MyInfo() {
  // 변수 정의
  const user = useSelector((state) => state.userData);
  const myposts = useSelector((state) => state.posts.myposts);

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
            - <span>{"4"}개</span>의 관심분야, <span>{"15"}권</span>의 관심도서,{" "}
            <span>{"2"}개</span>의 게시글, <span>{"3"}개</span>의 리뷰가 있네요
            !
          </p>
        </Title>
      </MainHeader>
      <ContentContainer>
        <div className="interestField">
          <ContentsHeader
            title={"🐶 " + user.nickname + "님의 관심분야 목록이에요"}
          />
          <InterestField />
        </div>
        <div className="myPost">
          <ContentsHeader
            title={"🐶 " + user.nickname + "님이 작성한 게시글이에요"}
          />
          <div className="posts">
            {myposts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.contents}
                likes={post.likes}
                comments={post.comments}
              />
            ))}
            <More />
          </div>
        </div>
        <div className="interestBooks">
          <ContentsHeader
            title={"🐶 " + user.nickname + "님의 관심도서 목록이에요"}
          />
          <InterestBooks />
        </div>

        <div className="myReview">
          <ContentsHeader
            title={"🐶 " + user.nickname + "님이 작성한 후기에요"}
          />
          gdgd
        </div>
      </ContentContainer>
    </MyInfoContainer>
  );
}

//////////////////////////////////////// Styled-Components
const ContentContainer = styled.div`
  margin-top: 3vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, 750px);
  grid-template-rows: repeat(auto-fit, 280px);
  justify-content: center;
  column-gap: 3vw;
  row-gap: 3vh;

  //나중에 반응형 수정할 때, grid rows, grid row 수정할 것(03/30)
  .interestField {
    padding: 0 20px;
    border: 2px solid #6e95ff;
    height: 300px;
    /* grid-row: 1 / 3; */
    border-radius: 4px;
  }

  .interestBooks {
    padding: 0 20px;
    border: 2px solid #6e95ff;
    height: 300px;

    /* grid-row: 3 / 7; */
    border-radius: 4px;
  }
  .myPost {
    padding: 0 20px;
    height: 300px;
    border: 2px solid #6e95ff;
    border-radius: 4px;

    .posts {
      display: flex;
      flex-direction: column;
      height: 245px;
      justify-content: center;
    }
  }
  .myReview {
    padding: 0 20px;
    height: 300px;
    border: 2px solid #6e95ff;
    /* grid-row: -4 / -1; */
    border-radius: 4px;
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
  background-color: #6e95ff;
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

export default MyInfo;
