import styled from "styled-components";
import BoardTitle from "../../components/Comunnity/BoardTitle";
import PostTitle from "../../components/Comunnity/PostTitle";
import PageHeader from "../../components/PageHeader";
import { useSelector } from "react-redux";

// 커뮤니티 홈
function Comunnity() {
  // 변수 선언
  const posts_hot = useSelector((state) => state.posts.hot);
  const posts_free = useSelector((state) => state.posts.free);
  const posts_qna = useSelector((state) => state.posts.qna);
  const posts_trade = useSelector((state) => state.posts.trade);

  // 커뮤니티 홈 View
  return (
    <ComunnityContainer>
      <PageHeader title="커뮤니티 홈" subTitle="최신 글 모아보기" />
      <ContentsContainer>
        <div className="hotBoard">
          <BoardTitle title="H🔥T게시판" kind="hot" />
          {posts_hot.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
        <div className="freeBoard">
          <BoardTitle title="자유게시판" kind="free" />
          {posts_free.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
        <div className="qnaBoard">
          <BoardTitle title="Q&amp;A게시판" kind="qna" />
          {posts_qna.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
        <div className="tradeBoard">
          <BoardTitle title="중고장터" kind="trade" />
          {posts_trade.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
      </ContentsContainer>
    </ComunnityContainer>
  );
}

//////////////////////////////////////// Styled-Components
const ComunnityContainer = styled.div`
  width: calc(100vw - 160px);
`;

const ContentsContainer = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(750px, 750px));
  grid-template-rows: repeat(2, 300px);
  justify-content: center;
  column-gap: 3vw;
  row-gap: 3vw;

  .hotBoard {
    border: 2px solid #6e95ff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }

  .freeBoard {
    border: 2px solid #6e95ff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }
  .qnaBoard {
    border: 2px solid #6e95ff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }
  .tradeBoard {
    border: 2px solid #6e95ff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }
`;

export default Comunnity;
