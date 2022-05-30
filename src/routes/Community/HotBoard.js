import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
import PostCard from "../../components/Cards/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../../components/Community/Notice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { updateHot } from "../../redux-modules/posts";

// 커뮤니티 - HOT 게시판
function HotBoard() {
  // 변수 선언
  const posts = useSelector((state) => state.posts.hot);
  const SideNavState = useSelector((state) => state.SideNavState);
  const location = useLocation().pathname.split("/");
  const user = useSelector((state) => state.userData);
  const [page, setPage] = useState(parseInt(location[2]));
  const dispatch = useDispatch();

  // getPosts() : 서버로부터 page에 따른 데이터를 가져와 redux store에 저장.
  function getPosts() {
    axios
      .get(
        "http://203.255.3.144:8002/v1/community/postlist/0", //추후 0대신 핫게 숫자로 변경(05/27)
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
        dispatch(updateHot(res.data.result.postList));
      });
  }

  useEffect(getPosts, [page, dispatch, user.accessToken]);

  // HOT 게시판 View
  return (
    <HotBoardContainer width={SideNavState.width}>
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
  width: ${(props) => props.width};

  .pagination {
    align-items: center;
    margin: 40px 0 50px 0;
  }
`;
const Posts = styled.div`
  margin: 2vh 72px;
  min-height: 70vh;
`;

export default HotBoard;
