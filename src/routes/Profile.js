import styled from "styled-components";

function Profile() {
  return (
    <ProfileContainer>
      <StyledImg src={require("../assets/profiletest.jpg")} />
      <h3>{"닉네임"}님 반가워요 !</h3>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
`;

const StyledImg = styled.img`
  display: inline-block;
  border-radius: 100%;
  width: 85px;
  height: 85px;
  object-fit: cover;
`;

export default Profile;
