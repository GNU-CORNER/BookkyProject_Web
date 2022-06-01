import { useSelector } from "react-redux";
import styled from "styled-components";

const RoadMap = () => {
  const SideNavState = useSelector((state) => state.SideNavState);

  return <RoadMapContainer width={SideNavState}>gd</RoadMapContainer>;
};

const RoadMapContainer = styled.div`
  width: ${(props) => props.width};
`;
export default RoadMap;
