import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../modules/userData";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

function BottomMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies();

  console.log("userselect", user);

  const logout = () => {
    removeCookie("autologin");
    dispatch(updateUser("", "", ""));
    location.pathname = "/";
  };

  // 유저 accessToken이 있을 때 (회원)
  if (user.accessToken) {
    return (
      <BottomMenuContainer>
        <Link
          to="/myinfo"
          className="btn"
          onClick={() => console.log("내 정보")}
        >
          <img src={require("../assets/BottomMenu/MyInfo.png")} alt="" />내 정보
        </Link>
        <button className="btn" onClick={() => console.log("다크모드")}>
          <img src={require("../assets/BottomMenu/DarkMode.png")} alt="" />{" "}
          다크모드
        </button>
        <button className="LogoutBtn btn" onClick={logout}>
          로그아웃
        </button>
      </BottomMenuContainer>
    );
  } else {
    return (
      <BottomMenuContainer>
        <button className="btn" onClick={() => console.log("다크모드")} alt="">
          <img src={require("../assets/BottomMenu/DarkMode.png")} alt="" />{" "}
          다크모드
        </button>
      </BottomMenuContainer>
    );
  }
}

const BottomMenuContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;

  .btn {
    position: relative;
    background-color: #f7f7f7;
    display: block;
    width: 80%;
    line-height: 40px;
    margin: 10px auto;
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
      top: 11px;
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
