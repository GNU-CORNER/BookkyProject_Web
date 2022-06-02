import { useSelector } from "react-redux";
import styled from "styled-components";

// 추천받개 안내견 북키 - 로드맵
const RoadMap = () => {
  // 변수 선언
  const SideNavState = useSelector((state) => state.SideNavState);

  return <RoadMapContainer width={SideNavState}>gd</RoadMapContainer>;
};

//////////////////////////////////////// Styled-Components
const RoadMapContainer = styled.div`
  width: ${(props) => props.width};
`;

export default RoadMap;
