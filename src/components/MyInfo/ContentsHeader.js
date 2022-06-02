import styled from "styled-components";

// 내 정보 - 각 항목의 헤더 (관심분야, 관심도서, 내 게시글,내 리뷰)
const ContentsHeader = ({ title }) => {
  return <Title>{title}</Title>;
};

//////////////////////////////////////// Styled-Components
const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;

  ::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 1.2em;
    margin-right: 8px;
    vertical-align: -4px;
    background-color: var(--main-color);
  }
`;
export default ContentsHeader;
