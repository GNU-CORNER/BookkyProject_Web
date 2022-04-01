import styled from "styled-components";
import PageHeader from "../../components/PageHeader";

// 추천받개 - 명탐정 북키
function Detective() {
  // 명탐정 북키 View
  return (
    <DetectiveContainer>
      <PageHeader
        title="명탐정 북키"
        subTitle="당신이 원하는 책, 제가 찾아드리죠 !"
      />
    </DetectiveContainer>
  );
}

//////////////////////////////////////// Styled-Components
const DetectiveContainer = styled.div`
  width: calc(100vw - 160px);
`;

export default Detective;
