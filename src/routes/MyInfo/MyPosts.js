import { useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
import PostCard from "../../components/Cards/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../../components/Comunnity/Notice";

// SideBar - 내 글 보기
function MyPost() {
  const posts = useSelector((state) => state.posts.myposts);

  // 내 글 보기 View
  return (
    <MyPostContainer>
      <PageHeader
        title="내 글 보기"
        subTitle="커뮤니티에서 내가 작성한 글이에요"
      />
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
    </MyPostContainer>
  );
}

//////////////////////////////////////// Styled-Components
const MyPostContainer = styled.div`
  width: calc(100vw - 160px);

  .pagination {
    align-items: center;
  }
`;
const Posts = styled.div`
  padding: 1px 36px;
  margin: 2vh 72px;
`;

export default MyPost;
