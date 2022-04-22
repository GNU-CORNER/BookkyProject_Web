import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
import PostCard from "../../components/Cards/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../../components/Community/Notice";
import { useSelector } from "react-redux";

// 커뮤니티 - 자유게시판
function FreeBoard() {
  // 변수 선언
  const posts = useSelector((state) => state.posts.free);

  // 자유게시판 View
  return (
    <FreeBoardContainer>
      <PageHeader title="자유게시판" subTitle="자유롭게 의견을 나누세요" />
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
    </FreeBoardContainer>
  );
}

//////////////////////////////////////// Styled-Components
const FreeBoardContainer = styled.div`
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

export default FreeBoard;
