import styled from "styled-components";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.userData);

  // 유저 accessToken이 있을 때 (회원)
  if (user.accessToken) {
    return (
      <ProfileContainer>
        <StyledImg src={require("../../assets/profiletest.jpg")} />
        <h3>
          <span>{user.nickname}</span>님
          <br />
          반가워요 !
        </h3>
      </ProfileContainer>
    );
  } else {
    // 유저 accessToken이 없을 때 (비회원)
    return (
      <ProfileContainer>
        <StyledImg src={require("../../assets/welcome.png")} />
        <h3>
          <span>처음 오셨군요</span>
          <br /> 반가워요 !
        </h3>
      </ProfileContainer>
    );
  }
}

const ProfileContainer = styled.div`
  margin-top: 3vh;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
  font-weight: bold;

  span {
    color: #6c95ff;
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
