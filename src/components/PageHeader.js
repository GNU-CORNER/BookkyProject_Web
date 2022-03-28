import styled from "styled-components";

const Header = styled.div`
  width: fit-content;
  margin: 2vh auto 0 2.5vw;
  font-size: 1.75em;
  font-weight: bold;
`;

const Explain = styled.div`
  width: 50vw;
  margin: 0 5px;
  font-size: 0.65em;
  font-weight: initial;
  color: #c1c1c1;
`;

const PageHeader = ({ title, subTitle }) => {
  return (
    <>
      <Header>
        {title}
        <Explain>{subTitle}</Explain>
      </Header>
    </>
  );
};

export default PageHeader;
