import styled from "styled-components";
import { useSelector } from "react-redux";
import InterestBooks from "../components/MyInfo/InterestBooks";
import InterestField from "../components/MyInfo/InterestField";
import PostCard from "../components/PostCard";
import ContentsHeader from "../components/MyInfo/ContentsHeader";

const dumys = [
  {
    id: 1,
    title: "제목이다 인마",
    contents:
      "자유 게시판입니다.1 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. ,,,",
    likes: 3,
    comments: 5,
  },
  {
    id: 2,
    title: "제목이다 인마2",
    contents:
      "자유 게시판입니다2. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. ,,,",
    likes: 5,
    comments: 5,
  },
];

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
          <ContentsHeader title={user.nickname + "님의 관심분야 목록이에요"} />
          <InterestField />
        </div>
        <div className="interestBooks">
          <ContentsHeader title={user.nickname + "님의 관심도서 목록이에요"} />
          <InterestBooks />
        </div>
        <div className="myPost">
          <ContentsHeader title={user.nickname + "님이 쓴 글이에요 ✏ ️"} />
          {dumys.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.contents}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
        <div className="myReview">
          <ContentsHeader title={user.nickname + "님이 쓴 후기에요 ✏ "} />
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
  grid-template-rows: repeat(6, 80px);
  justify-content: center;
  column-gap: 3vw;
  row-gap: 3vh;

  //나중에 반응형 수정할 때, grid rows, grid row 수정할 것(03/30)
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
  s span {
    color: black;
  }

  .sub {
    font-size: 0.7em;
  }
`;

export default MyInfo;
