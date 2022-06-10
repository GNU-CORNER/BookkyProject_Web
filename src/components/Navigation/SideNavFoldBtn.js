import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFold } from "../../redux-modules/sideNav";
import { ReactComponent as ToRight } from "../../assets/icons/sideNav/alt-from-left.svg";
import { ReactComponent as ToLeft } from "../../assets/icons/sideNav/alt-from-right.svg";

// Sidebar 접기 버튼 >> <<
const SideNavFoldBtn = () => {
  // 변수 선언
  const SideNavState = useSelector((state) => state.SideNavState);
  const dispatch = useDispatch();

  // 사이드바 비활성화 시 (접기)
  if (SideNavState.isfold === false) {
    return (
      <SideNavFoldBtnContainer
        left="120px"
        onClick={() => dispatch(setFold(true, "100vw"))}
      >
        <ToLeft className="left" />
      </SideNavFoldBtnContainer>
    );
  }
  // 사이드바 활성화 시 (펼치기)
  else {
    return (
      <SideNavFoldBtnContainer
        left="10px"
        onClick={() => dispatch(setFold(false, "calc(100vw - 160px)"))}
      >
        <ToRight className="right" />
      </SideNavFoldBtnContainer>
    );
  }
};

//////////////////////////////////////// Styled-Components
const SideNavFoldBtnContainer = styled.div`
  position: fixed;
  left: ${(props) => props.left};
  bottom: 15px;
  z-index: 99;

  svg {
    fill: #6e95ff;
    width: 30px;
    height: 30px;
    transition: all 0.4s;
  }
  :hover {
    cursor: pointer;
  }

  .left:hover {
    transform: translate(-10px);
  }
  .right:hover {
    transform: translate(10px);
  }
`;
export default SideNavFoldBtn;
