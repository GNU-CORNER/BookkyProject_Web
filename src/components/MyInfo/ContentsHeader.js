import styled from "styled-components";

const ContentsHeader = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.div`
  width: fit-content;
  font-size: 1.2em;
  margin: 10px 5px 10px 0;
  padding-left: 10px;
  font-weight: bold;
  border-radius: 4px;
  border-left: 10px solid #6c95ff;
`;
export default ContentsHeader;
