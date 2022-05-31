import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
import PostCard from "../../components/Cards/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../../components/Community/Notice";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateMyPosts } from "../../redux-modules/posts";

// SideBar - 내 글 보기
function MyPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname.split("/");
  const posts = useSelector((state) => state.posts.myposts);
  const SideNavState = useSelector((state) => state.SideNavState);
  const user = useSelector((state) => state.userData);
  const [page, setPage] = useState(parseInt(location[2]));
  const [count, setCount] = useState(1);

  // getPosts() : 서버로부터 page에 따른 데이터를 가져와 redux store에 저장.
  function getPosts() {
    axios
      .get(
        "http://203.255.3.144:8002/v1/community/postlist/3",
        {
          params: {
            quantity: 10,
            page: page,
          },
        },
        {
          headers: {
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => {
        setCount(res.data.result.total_size);
        dispatch(updateMyPosts(res.data.result.postList));
      });
  }

  // 페이지네이션 - 현재 페이지 지정 함수
  function handleChange(event, value) {
    setPage(value);
  }

  // 페이지네이션 - 전체 페이지 개수 설정 함수
  function countPage(count) {
    let remainder;
    if (count % 10 > 0) remainder = 1;
    else remainder = 0;
    return parseInt(count / 10) + remainder;
  }

  useEffect(getPosts, [page, dispatch, user.accessToken]);
  useEffect(() => navigate("/myposts/" + page), [page, navigate]);

  // 내 글 보기 View
  return (
    <MyPostContainer width={SideNavState.width}>
      <PageHeader
        title="내 글 보기"
        subTitle="커뮤니티에서 내가 작성한 글이에요"
      />
      <Posts>
        <Notice notice="상대방을 비방하는 글은 자제해주세요" />
        {posts.map((post) => (
          <PostCard
            key={post.PID}
            pid={post.PID}
            title={post.title}
            content={post.contents}
            likes={post.likeCnt}
            comments={post.commentCnt}
            board={0}
          />
        ))}
      </Posts>
      <Stack className="pagination" spacing={2}>
        <Pagination
          count={countPage(count)}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </MyPostContainer>
  );
}

//////////////////////////////////////// Styled-Components
const MyPostContainer = styled.div`
  width: ${(props) => props.width};

  .pagination {
    align-items: center;
  }
`;
const Posts = styled.div`
  padding: 1px 36px;
  margin: 2vh 72px;
`;

export default MyPost;
