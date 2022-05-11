import styled from "styled-components";

// SideBar - 하단 메뉴 (내 정보, 다크모드, 로그아웃)
function BottomMenu() {
  // 변수 선언

  return (
    <BottomMenuContainer>
      <button className="btn" onClick={() => console.log("다크모드")}>
        <img
          src={require("../../assets/icons/sideNav/night-mode.png")}
          alt=""
        />
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
    display: block;
    width: 80%;
    line-height: 35px;
    margin: 0 auto;
    padding-left: 25px;
    border-radius: 30px;
    font-size: 0.8em;
    border: 2px solid #808080;
    color: #808080;
    font-weight: bold;
    text-align: center;
    transition: all 0.4s;

    img {
      position: absolute;
      left: 15px;
      top: 9px;
      width: 18px;
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
