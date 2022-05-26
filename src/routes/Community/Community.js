import styled from "styled-components";
import BoardTitle from "../../components/Community/BoardTitle";
import PostTitle from "../../components/Community/PostTitle";
import PageHeader from "../../components/PageHeader";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

// 커뮤니티 홈
function Community() {
  // 변수 선언
  const [posts, setPosts] = useState({
    AnyList: [{ title: "", PID: 0 }],
    HotList: [{ title: "", PID: 0, communityType: 0 }],
    MarketList: [{ title: "", PID: 0 }],
    QnAList: [{ title: "", PID: 0 }],
  });
  const SideNavState = useSelector((state) => state.SideNavState);

  //getPosts() : 서버로부터 게시글 목록을 불러옴
  const getPosts = () => {
    axios
      .get("http://203.255.3.144:8002/v1/community/home", {
        params: {
          count: 6,
        },
      })
      .then((res) => {
        setPosts(res.data.result);
        console.log(res);
      });
  };

  useEffect(getPosts, []);
  // 커뮤니티 홈 View
  return (
    <CommunityContainer width={SideNavState.width}>
      <PageHeader title="커뮤니티 홈" subTitle="최신 글 모아보기" />
      <ContentsContainer>
        <div className="hotBoard">
          <BoardTitle title="H🔥T게시판" kind="hot" />
          {posts.HotList.map((post) => (
            <PostTitle
              key={post.PID}
              title={post.title}
              PID={post.PID}
              kind={post.communityType}
            />
          ))}
        </div>
        <div className="freeBoard">
          <BoardTitle title="자유게시판" kind="free" />
          {posts.AnyList.map((post, cnt) => (
            <PostTitle
              key={post.PID}
              title={post.title}
              PID={post.PID}
              kind={0}
            />
          ))}
        </div>
        <div className="qnaBoard">
          <BoardTitle title="Q&amp;A게시판" kind="qna" />
          {posts.QnAList.map((post, cnt) => (
            <PostTitle
              key={post.PID}
              title={post.title}
              PID={post.PID}
              kind={2}
            />
          ))}
        </div>
        <div className="tradeBoard">
          <BoardTitle title="중고장터" kind="trade" />
          {posts.MarketList.map((post, cnt) => (
            <PostTitle
              key={post.PID}
              title={post.title}
              PID={post.PID}
              kind={1}
            />
          ))}
        </div>
      </ContentsContainer>
    </CommunityContainer>
  );
}

//////////////////////////////////////// Styled-Components
const CommunityContainer = styled.div`
  width: ${(props) => props.width};
`;

const ContentsContainer = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(750px, 750px));
  grid-template-rows: repeat(2, 300px);
  justify-content: center;
  column-gap: 3vw;
  row-gap: 3vw;

  .hotBoard {
    border: 2px solid var(--main-color);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }

  .freeBoard {
    border: 2px solid var(--main-color);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }
  .qnaBoard {
    border: 2px solid var(--main-color);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }
  .tradeBoard {
    border: 2px solid var(--main-color);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }
`;

export default Community;
