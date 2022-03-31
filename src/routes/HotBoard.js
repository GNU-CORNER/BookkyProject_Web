import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import PostCard from "../components/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../components/Comunnity/Notice";
import { useSelector } from "react-redux";

// 커뮤니티 - HOT 게시판
function HotBoard() {
  // 변수 선언
  const posts = useSelector((state) => state.posts.hot);

  // HOT 게시판 View
  return (
    <HotBoardContainer>
      <PageHeader title="H🔥T 게시판" subTitle="떠오르고 있는 인기 글이에요" />
      <Posts>
        <Notice notice="상대방을 비방하는 글은 자제해주세요" />
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.contents}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </Posts>
      <Stack className="pagination" spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </HotBoardContainer>
  );
}

//////////////////////////////////////// Styled-Components
const HotBoardContainer = styled.div`
  width: calc(100vw - 160px);

  .pagination {
    align-items: center;
    margin: 40px 0 50px 0;
  }
`;
const Posts = styled.div`
  padding: 1px 36px;
  margin: 2vh 72px;
`;

export default HotBoard;
