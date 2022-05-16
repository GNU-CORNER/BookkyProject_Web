import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { updateUser } from "../../redux-modules/userData";

// SideBar - 내 프로필
function Profile() {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [, , removeCookie] = useCookies();

  // 로그아웃 버튼 클릭 시
  const logout = () => {
    removeCookie("autologin");
    removeCookie("refresh_token");
    removeCookie("email");
    removeCookie("password");
    removeCookie("loginMethod");
    dispatch(updateUser("", "", ""));
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("loginMethod");
    location.pathname = "/";
  };

  // 회원일 때 (userData에 유저 nickname이 있을 때)
  if (user.nickname) {
    return (
      <ProfileContainer>
        <StyledImg
          onClick={() => navigate("/myinfo")}
          src={require("../../assets/icons/sideNav/welcome.png")}
          alt=""
        />
        <h3>
          <span onClick={() => navigate("/myinfo")}>{user.nickname}</span>님
          <br />
          반가워요 !
        </h3>
        <div className="LogoutBtn" onClick={logout}>
          로그아웃
        </div>
      </ProfileContainer>
    );
  }

  // 비회원일 때 (userData에 유저 nickname이 없을 때)
  else {
    return (
      <ProfileContainer>
        <StyledImg
          className="non-member"
          src={require("../../assets/icons/sideNav/welcome.png")}
        />
        <h3>
          <span className="non-member">처음 오셨군요</span>
          <br /> 반가워요 !
        </h3>
      </ProfileContainer>
    );
  }
}

//////////////////////////////////////// Styled-Components
const ProfileContainer = styled.div`
  height: 190px;
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .non-member {
    text-decoration: none;
    cursor: initial;
  }

  .non-member:hover {
    text-decoration: none;
    cursor: initial;
  }

  span,
  img {
    margin: 5px;
    line-height: 1.3em;
    color: #6c95ff;
    transition: all 0.3s;
    text-decoration: underline 1px solid #ffffff;

    :hover {
      text-decoration: underline 1px solid #6c95ff;
      cursor: pointer;
    }
  }

  .LogoutBtn {
    margin-top: 10px;
    font-size: 0.8em;
    color: #ff6d94;
    text-decoration: underline 1px solid #ff6d94;

    :hover {
      cursor: pointer;
    }
  }
`;

const StyledImg = styled.img`
  border-radius: 100%;
  width: 80px;
  height: 80px;
`;

export default Profile;
