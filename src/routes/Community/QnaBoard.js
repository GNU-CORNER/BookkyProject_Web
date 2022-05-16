import { useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// 커뮤니티 - Q&A게시판
function QnaBoard() {
  // 변수 정의
  const posts = useSelector((state) => state.posts.qna);
  const navigate = useNavigate();
  const boardName = useLocation().pathname.split("/")[1];
  const SideNavState = useSelector((state) => state.SideNavState);

  // Q&A게시판 View
  return (
    <QnaBoardContainer width={SideNavState.width}>
      <PageHeader title="Q&amp;A 게시판" subTitle="궁금한 점이 있나요?" />
      <button
        onClick={() =>
          navigate("/writepost", { state: { boardName: boardName } })
        }
      >
        헬로
      </button>
    </QnaBoardContainer>
  );
}

//////////////////////////////////////// Styled-Components
const QnaBoardContainer = styled.div`
  width: ${(props) => props.width};
`;

export default QnaBoard;
