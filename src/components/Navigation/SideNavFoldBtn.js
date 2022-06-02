import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFold } from "../../redux-modules/sideNav";

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
        <img
          className="left"
          src={require("../../assets/icons/sideNav/to-left-arrow.png")}
          alt="Sidenav-fold-btn left"
        />
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
        <img
          className="right"
          src={require("../../assets/icons/sideNav/to-right-arrow.png")}
          alt="Sidenav-fold-btn Right"
        />
      </SideNavFoldBtnContainer>
    );
  }
};

//////////////////////////////////////// Styled-Components
const SideNavFoldBtnContainer = styled.div`
  position: fixed;
  left: ${(props) => props.left};
  bottom: 20px;
  z-index: 99;

  img {
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
