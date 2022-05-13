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
      <ContentsArea>
        <div>채팅창영역</div>
        <div>답변창영역</div>
      </ContentsArea>
    </DetectiveContainer>
  );
}

//////////////////////////////////////// Styled-Components
const DetectiveContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 90vh;

  // 배경 (명탐정 북키)
  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${require("../../assets/Bookky/북키_추천받개_명탐정북키.png")});
    background-repeat: no-repeat;
    background-size: 50vh 90vh;
    background-position: 90% 50%;
    opacity: 0.5;
  }
`;

const ContentsArea = styled.div`
  border: 1px solid red;
  margin: 2vh 20vw;
  display: grid;
  grid-template-columns: 50fr 50fr;
`;
export default Detective;
