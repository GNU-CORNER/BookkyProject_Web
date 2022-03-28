import styled from "styled-components";
import PageHeader from "../components/PageHeader";

function Detective() {
  return (
    <DetectiveContainer>
      <PageHeader
        title="명탐정 북키"
        subTitle="당신이 원하는 책, 제가 찾아드리죠 !"
      />
    </DetectiveContainer>
  );
}

const DetectiveContainer = styled.div`
  width: calc(100vw - 160px);
`;

export default Detective;
