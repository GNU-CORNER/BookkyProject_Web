import styled from "styled-components";

const Header = styled.p`
  margin: 3vh auto 0 3.5vw;
  font-size: 1.75em;
  font-weight: bold;
`;

const PageHeader = ({ title }) => {
  return (
    <>
      <Header>{title}</Header>
    </>
  );
};

export default PageHeader;
