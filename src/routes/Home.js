import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <>
      <MainHeader>dkssud</MainHeader>
      <StyledTest className="test">ddff</StyledTest>
      <Link to="/Detail">Hello</Link>
    </>
  );
}

///////// Styled-components /////////
const MainHeader = styled.div`
  padding: 4em;
  margin: 5px;
  background-color: red;
`;

const StyledTest = styled.div`
  background-color: blue;
`;

export default Home;
