import styled from "styled-components";

const ContentsHeader = ({ title }) => {
  return <Title>{title}</Title>;
};

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
