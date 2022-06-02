import ReactLoading from "react-loading";
import styled from "styled-components";

// 로딩 표시 컴포넌트
const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading type="spin" color="var(--main-color)" />
    </LoadingContainer>
  );
};

//////////////////////////////////////// Styled-Components
const LoadingContainer = styled.div`
  width: 100%;

  div {
    margin: auto;
  }
`;

export default Loading;
