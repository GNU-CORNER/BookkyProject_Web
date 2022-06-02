import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
import PostCard from "../../components/Cards/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../../components/Community/Notice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateHot } from "../../redux-modules/posts";

// 커뮤니티 - HOT 게시판
function HotBoard() {
  // 변수 선언
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.hot);
  const SideNavState = useSelector((state) => state.SideNavState);
  const location = useLocation().pathname.split("/");
  const user = useSelector((state) => state.userData);
  const [page, setPage] = useState(parseInt(location[2]));
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  // getPosts() : 서버로부터 page에 따른 데이터를 가져와 redux store에 저장.
  function getPosts() {
    axios
      .get(
        "http://203.255.3.144:8002/v1/community/hotcommunity", //추후 0대신 핫게 숫자로 변경(05/27)
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
        console.log(res);
        setCount(res.data.result.total_size);
        dispatch(updateHot(res.data.result.postList));
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

  // 최초 로드시 게시글 정보 업데이트
  useEffect(getPosts, [page, dispatch, user.accessToken]);

  // 페이지 이동 시, 해당 페이지로 url 변경
  useEffect(() => navigate("/hot/" + page), [page, navigate]);

  // HOT 게시판 View
  return (
    <HotBoardContainer width={SideNavState.width}>
      <PageHeader title="H🔥T 게시판" subTitle="떠오르고 있는 인기 글이에요" />
      <Posts>
        <Notice notice="상대방을 비방하는 글은 자제해주세요" />
        {posts.map((post) => (
          <PostCard
            key={post.PID}
            pid={post.PID}
            title={post.title}
            content={post.contents}
            likes={post.likes}
            comments={post.comments}
            communityType={post.communityType}
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
  margin: 2vh 12vw;
  min-height: 70vh;
`;

export default HotBoard;
