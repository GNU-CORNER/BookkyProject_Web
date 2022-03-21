import styled from "styled-components";

const Token = "";

function Profile() {
  if (!Token) {
    return (
      <ProfileContainer>
        <StyledImg src={require("../assets/profiletest.jpg")} />
        <h3>
          <span>처음 오셨군요</span>
          <br /> 반가워요 !
        </h3>
      </ProfileContainer>
    );
  } else {
    return (
      <ProfileContainer>
        <StyledImg src={require("../assets/profiletest.jpg")} />
        <h3>{"닉네임"}님 반가워요 !</h3>
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
