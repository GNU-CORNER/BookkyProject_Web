import styled from "styled-components";

const ContentsHeader = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.div`
  width: fit-content;
  font-size: 1.2em;
  padding: 10px 5px 10px 0;
  font-weight: bold;
  border-bottom: 2px solid #6c95ff;
`;
export default ContentsHeader;
