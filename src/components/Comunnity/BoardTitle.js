import styled from "styled-components";

const BoardTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.p`
  line-height: 50px;
  padding-left: 20px;
  border-bottom: 2px solid #6e95ff;
  font-size: 1.5em;
  font-weight: bold;
`;
export default BoardTitle;
