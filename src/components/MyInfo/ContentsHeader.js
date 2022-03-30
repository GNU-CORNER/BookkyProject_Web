import styled from "styled-components";

const ContentsHeader = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.div`
  font-size: 1.2em;
  padding: 15px 30px;
`;
export default ContentsHeader;
