import styled from "styled-components";

// 모든 메뉴 공통 - 페이지 제목과 설명 표시
const PageHeader = ({ title, subTitle }) => {
  // PageHeader View
  return (
    <Header>
      {title}
      <Explain>{subTitle}</Explain>
    </Header>
  );
};

//////////////////////////////////////// Styled-Components
const Header = styled.div`
  width: fit-content;
  margin: 2vh auto 0 2.5vw;
  font-size: 1.75em;
  font-weight: bold;
`;

const Explain = styled.div`
  width: 50vw;
  line-height: 2em;
  margin: 0 5px;
  font-size: 0.7em;
  font-weight: initial;
  color: #c1c1c1;
`;

export default PageHeader;
