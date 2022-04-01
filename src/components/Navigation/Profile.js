import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// SideBar - 내 프로필
function Profile() {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  const navigate = useNavigate();

  // 회원일 때 (userData에 유저 nickname이 있을 때)
  if (user.nickname) {
    return (
      <ProfileContainer>
        <StyledImg
          onClick={() => navigate("/myinfo")}
          src={require("../../assets/welcome.png")}
          alt=""
        />
        <h3>
          <span onClick={() => navigate("/myinfo")}>{user.nickname}</span>님
          <br />
          반가워요 !
        </h3>
      </ProfileContainer>
    );
  }

  // 비회원일 때 (userData에 유저 nickname이 없을 때)
  else {
    return (
      <ProfileContainer>
        <StyledImg
          className="non-member"
          src={require("../../assets/welcome.png")}
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
  margin-top: 3vh;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
  font-weight: bold;

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
    color: #6c95ff;
    transition: all 0.3s;
    text-decoration: underline 1px solid #ffffff;

    :hover {
      text-decoration: underline 1px solid #6c95ff;
      cursor: pointer;
    }
  }

  h3 {
    margin: 8px;
  }
`;

const StyledImg = styled.img`
  margin: auto;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export default Profile;
