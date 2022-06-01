import styled from "styled-components";
import { useSelector } from "react-redux";
import InterestBooks from "../../components/MyInfo/MyInfoInterestBooks";
import InterestField from "../../components/MyInfo/MyInfoInterestField";
import ContentsHeader from "../../components/MyInfo/ContentsHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import MyReviews from "../../components/MyInfo/MyReviews";
import MyPosts from "../../components/MyInfo/MyPosts";
import EditUserModalContainer from "../../components/MyInfo/EditUser/EditUserModalContainer";

// SideBar - 내 정보
function MyInfo() {
  // 변수 정의
  const user = useSelector((state) => state.userData);
  const SideNavState = useSelector((state) => state.SideNavState);
  const [myPostCnt, setMyPostCnt] = useState(0);
  const [editUserModal, setEditUserModal] = useState(false);
  const [userData, setUserData] = useState({ nickname: "", userThumbnail: "" });

  // 내 게시글 형태 정의
  const [myPosts, setMyPosts] = useState([
    {
      PID: 0,
      commentCnt: 0,
      communityType: 0,
      contents: "",
      likeCnt: 0,
      title: "",
    },
  ]);

  const [userTags, setUserTags] = useState([{ tag: "", TMID: 0 }]);

  // getPosts() : 서버로부터 내 도서를 가져옴
  function getPosts() {
    if (user.accessToken.length > 0)
      axios
        .get("http://203.255.3.144:8002/v1/myprofile", {
          headers: {
            "access-token": user.accessToken,
          },
        })
        .then((res) => {
          console.log("MyInfo test", res);
          setMyPosts(res.data.result.userPostList);
          // setMyPostCnt(res.data.result.total_size);
          setUserTags(res.data.result.userData.userTagList);
          setUserData(res.data.result.userData);
        });
  }

  useEffect(getPosts, [user.accessToken]);

  // 내 정보 View
  return (
    <MyInfoContainer width={SideNavState.width}>
      <MainHeader>
        <EditUserModalContainer
          editUserModal={editUserModal}
          setEditUserModal={setEditUserModal}
          userData={userData}
        />
        <Title className="nodrag">
          <div>
            <span className="name">{user.nickname}</span>
            {user.accessToken ? " 님" : ""}의 정보입니다
            <img
              className="setting-icon"
              src={require("../../assets/icons/myinfo/setting.png")}
              onClick={() => {
                setEditUserModal(true);
              }}
            />
          </div>
          <p className="sub">
            <span>{"4"}개</span>의 관심분야 / <span>{"15"}권</span>의 관심도서 /
            <span> {myPostCnt}개</span>의 게시글 / <span>{"3"}개</span>의 리뷰
          </p>
        </Title>
      </MainHeader>
      <ContentContainer>
        <div className="interestField">
          <ContentsHeader title="관심 분야" />
          <InterestField userTags={userTags} />
        </div>
        <div className="myPost">
          <ContentsHeader title="내가 작성한 게시글" />
          <div className="posts">
            <MyPosts myPosts={myPosts} />
          </div>
        </div>
        <div className="interestBooks">
          <ContentsHeader title="관심 도서" />
          <InterestBooks />
        </div>

        <div className="myReview">
          <ContentsHeader title="내가 작성한 리뷰" />
          <MyReviews />
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
  column-gap: 1vw;
  row-gap: 3vh;

  //나중에 반응형 수정할 때, grid rows, grid row 수정할 것(03/30)
  .interestField {
    min-height: 280px;
    border-radius: 5px;
    padding: 15px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  }

  .interestBooks {
    min-height: 280px;
    border-radius: 5px;
    padding: 15px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  }
  .myPost {
    min-height: 280px;
    border-radius: 5px;
    padding: 15px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    .posts {
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      height: 245px;
    }
  }
  .myReview {
    min-height: 280px;
    border-radius: 5px;
    padding: 15px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
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
  background-color: var(--main-color);
  margin: 5px 10px;
`;
const Title = styled.div`
  color: #f5f5f5;
  font-size: 2em;
  color: white;
  padding-left: 72px;

  .setting-icon {
    display: inline-block;
    vertical-align: -5px;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      opacity: 60%;
    }
  }

  .name {
    color: #ffd86d;
  }
  .sub {
    margin-top: 5px;
    color: #e9e9e9;
    font-size: 0.65em;
  }
`;

export default MyInfo;
