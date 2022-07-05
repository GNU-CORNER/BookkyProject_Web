import styled from "styled-components";
import { ReactComponent as DarkMode } from "../../assets/icons/sideNav/moon-fill.svg";

// SideBar - 하단 메뉴 (내 정보, 다크모드, 로그아웃)
function BottomMenu() {
  // View
  return (
    <BottomMenuContainer>
      <button className="btn" onClick={() => console.log("다크모드")}>
        <DarkMode />
        DARK
      </button>
    </BottomMenuContainer>
  );
}

//////////////////////////////////////// Styled-Components
const BottomMenuContainer = styled.div`
  width: 70%;
  position: absolute;
  bottom: 10px;

  .btn {
    position: relative;
    background-color: #f7f7f7;
    display: flex;
    width: 80%;
    line-height: 35px;
    margin: 0 auto;
    border-radius: 30px;
    font-size: 0.8em;
    border: 2px solid #808080;
    color: #808080;
    font-weight: bold;
    text-align: center;
    transition: all 0.4s;
    justify-content: center;
    align-items: center;

    svg {
      transition: all 0.4s;
      fill: #808080;
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }

    :hover svg {
      fill: #ffffff;
    }
    :hover {
      background-color: #808080;
      color: #ffffff;
    }
  }
  .LogoutBtn {
    color: #ff6d94;
    padding-left: 0;
    border: 2px solid #ff6d94;

    :hover {
      background-color: #ff6d94;
      border: 2px solid #ff6d94;
    }
  }
`;

export default BottomMenu;
