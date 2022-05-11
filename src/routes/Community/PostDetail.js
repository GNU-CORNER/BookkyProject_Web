import { useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";

const PostDetail = () => {
  const SideNavState = useSelector((state) => state.SideNavState);

  return (
    <PostDetailContainer width={SideNavState.width}>
      <PageHeader title="게시글 상세보기" subTitle="자유롭게 의견을 나누세요" />
    </PostDetailContainer>
  );
};

const PostDetailContainer = styled.div`
  width: ${(props) => props.width};
`;
export default PostDetail;
