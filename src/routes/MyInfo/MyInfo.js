import styled from "styled-components";
import { useSelector } from "react-redux";
import InterestBooks from "../../components/MyInfo/MyInfoInterestBooks";
import InterestField from "../../components/MyInfo/MyInfoInterestField";
import PostCard from "../../components/Cards/PostCard";
import ContentsHeader from "../../components/MyInfo/ContentsHeader";
import More from "../../components/MyInfo/More";

// SideBar - 내 정보
function MyInfo() {
  // 변수 정의
  const user = useSelector((state) => state.userData);
  const myposts = useSelector((state) => state.posts.myposts);
  const SideNavState = useSelector((state) => state.SideNavState);

  // 내 정보 View
  return (
    <MyInfoContainer width={SideNavState.width}>
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
          <ContentsHeader title={user.nickname + "님의 관심분야에요"} />
          <InterestField />
        </div>
        <div className="myPost">
          <ContentsHeader title={user.nickname + "님이 작성한 게시글이에요"} />
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
          <ContentsHeader title={user.nickname + "님의 관심도서에요"} />
          <InterestBooks />
        </div>

        <div className="myReview">
          <ContentsHeader title={user.nickname + "님이 작성한 리뷰에요"} />
          gdgd
        </div>
      </ContentContainer>
    </MyInfoContainer>
  );
}

//////////////////////////////////////// Styled-Components
const ContentContainer = styled.div`
  width: ${(props) => props.width};
  margin-top: 3vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, 750px);
  grid-template-rows: repeat(auto-fit, 280px);
  justify-content: center;
  column-gap: 3vw;
  row-gap: 3vh;

  //나중에 반응형 수정할 때, grid rows, grid row 수정할 것(03/30)
  .interestField {
  }

  .interestBooks {
  }
  .myPost {
    .posts {
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      height: 245px;
      justify-content: center;
    }
  }
  .myReview {
  }
`;

const MyInfoContainer = styled.div`
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
