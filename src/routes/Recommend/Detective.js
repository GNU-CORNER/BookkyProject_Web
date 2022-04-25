import { useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";

// 추천받개 - 명탐정 북키
function Detective() {
  const SideNavState = useSelector((state) => state.SideNavState);

  // 명탐정 북키 View
  return (
    <DetectiveContainer width={SideNavState.width}>
      <PageHeader
        title="명탐정 북키"
        subTitle="당신이 원하는 책, 제가 찾아드리죠 !"
      />
    </DetectiveContainer>
  );
}

//////////////////////////////////////// Styled-Components
const DetectiveContainer = styled.div`
  width: ${(props) => props.width};
`;

export default Detective;
