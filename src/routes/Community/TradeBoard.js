import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
import PostCard from "../../components/Cards/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../../components/Community/Notice";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { updateTrade } from "../../redux-modules/posts";

// 커뮤니티 - 중고장터
function TradeBoard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname.split("/");
  const boardName = location[1];
  const posts = useSelector((state) => state.posts.trade);
  const user = useSelector((state) => state.userData);
  const SideNavState = useSelector((state) => state.SideNavState);
  const [page, setPage] = useState(parseInt(location[2]));
  const [count, setCount] = useState(1);

  // getPosts() : 서버로부터 page에 따른 데이터를 가져와 redux store에 저장.
  function getPosts() {
    axios
      .get(
        "http://203.255.3.144:8002/v1/community/postlist/1",
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
        dispatch(updateTrade(res.data.result.postList));
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
  useEffect(() => navigate("/trade/" + page), [page, navigate]);

  // 중고장터 View
  return (
    <TradeBoardContainer width={SideNavState.width}>
      <PageHeader title="중고장터" subTitle="읽지 않는 책을 사고 파세요" />
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
            board={1}
          />
        ))}
      </Posts>
      <Bottom>
        <div
          className="write"
          onClick={() =>
            navigate("/writepost", { state: { boardName: boardName } })
          }
        >
          글쓰기
        </div>
        <Stack className="pagination" spacing={2}>
          <Pagination
            count={countPage(count)}
            page={page}
            color="primary"
            onChange={handleChange}
          />
        </Stack>
      </Bottom>
    </TradeBoardContainer>
  );
}

//////////////////////////////////////// Styled-Components
const TradeBoardContainer = styled.div`
  width: ${(props) => props.width};

  .pagination {
    align-items: center;
  }
`;
const Posts = styled.div`
  margin: 2vh 12vw;
  min-height: 70vh;
`;

const Bottom = styled.div`
  margin: 40px 0 40px 0;
  position: relative;
  display: flex;
  justify-content: center;

  .write {
    padding: 10px;
    border-radius: 4px;
    background-color: var(--main-color);
    position: absolute;
    right: 12vw;
    color: white;
    font-weight: bold;

    :hover {
      cursor: pointer;
    }
  }
`;
export default TradeBoard;
