import { useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
import PostCard from "../../components/Cards/PostCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Notice from "../../components/Community/Notice";
import { useLocation, useNavigate } from "react-router-dom";

// 커뮤니티 - 중고장터
function TradeBoard() {
  const posts = useSelector((state) => state.posts.trade);
  const SideNavState = useSelector((state) => state.SideNavState);
  const navigate = useNavigate();
  const boardName = useLocation().pathname.split("/")[1];
  // 중고장터 View
  return (
    <TradeBoardContainer width={SideNavState.width}>
      <PageHeader title="중고장터" subTitle="읽지 않는 책을 사고 파세요" />
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
      <button
        onClick={() =>
          navigate("/writepost", { state: { boardName: boardName } })
        }
      >
        헬로
      </button>
    </TradeBoardContainer>
  );
}

//////////////////////////////////////// Styled-Components
const TradeBoardContainer = styled.div`
  width: ${(props) => props.width};

  .pagination {
    align-items: center;
    margin: 40px 0 50px 0;
  }
`;
const Posts = styled.div`
  margin: 2vh 72px;
`;

export default TradeBoard;
