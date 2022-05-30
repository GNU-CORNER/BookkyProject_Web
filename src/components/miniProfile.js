import styled from "styled-components";

const MiniProfile = ({ nickname, date }) => {
  return (
    <MiniProfileContainer>
      <img
        src={require("../assets/icons/sideNav/welcome.png")}
        width="35px"
        alt="user Profile"
      />
      <div>{nickname}</div>
      <div className="date">{date}</div>
    </MiniProfileContainer>
  );
};

const MiniProfileContainer = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  .date {
    font-size: 0.9em;
    color: #c9c9c9;
  }
`;
export default MiniProfile;
