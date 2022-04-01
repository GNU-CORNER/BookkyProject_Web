import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux-modules/userData";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

// SideBar - 하단 메뉴 (내 정보, 다크모드, 로그아웃)
function BottomMenu() {
  // 변수 선언
  const dispatch = useDispatch();
  const location = useLocation();
  const [, , removeCookie] = useCookies();
  const user = useSelector((state) => state.userData);

  // 로그아웃 버튼 클릭 시
  const logout = () => {
    removeCookie("autologin");
    removeCookie("refresh_token");
    removeCookie("email");
    removeCookie("pwToken");
    dispatch(updateUser("", "", ""));
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    location.pathname = "/";
  };

  // 회원일 때 (userData에 유저 nickname이 있을 때)
  if (user.nickname) {
    return (
      <BottomMenuContainer>
        <Link to="/myinfo" className="btn">
          <img src={require("../../assets/BottomMenu/MyInfo.png")} alt="" />내
          정보
        </Link>
        {/* 다크모드 추후 구현할 것(03/30) */}
        <button className="btn" onClick={() => console.log("다크모드")}>
          <img src={require("../../assets/BottomMenu/DarkMode.png")} alt="" />{" "}
          다크모드
        </button>
        <button className="LogoutBtn btn" onClick={logout}>
          로그아웃
        </button>
      </BottomMenuContainer>
    );
  }

  // 비회원일 때 (userData에 유저 nickname이 없을 때)
  else {
    return (
      <BottomMenuContainer>
        <button className="btn" onClick={() => console.log("다크모드")}>
          <img src={require("../../assets/BottomMenu/DarkMode.png")} alt="" />
          다크모드
        </button>
      </BottomMenuContainer>
    );
  }
}

//////////////////////////////////////// Styled-Components
const BottomMenuContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;

  .btn {
    position: relative;
    background-color: #f7f7f7;
    display: block;
    width: 80%;
    line-height: 35px;
    margin: 8px auto;
    padding-left: 15px;
    border-radius: 30px;
    font-size: 0.8em;
    border: 2px solid #6e95ff;
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
      background-color: #6e95ff;
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
