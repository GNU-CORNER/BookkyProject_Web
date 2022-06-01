import styled from "styled-components";

// 도서 상세보기 - 리뷰작성 사용자 미니프로필
const MiniProfile = ({ nickname, date }) => {
  // 미니 프로필 View
  return (
    <MiniProfileContainer>
      <img
        src={require("../../assets/icons/sideNav/welcome.png")}
        width="35px"
        alt="user Profile"
      />
      <div>{nickname}</div>
      <div className="date">{date}</div>
    </MiniProfileContainer>
  );
};

//////////////////////////////////////// Styled-Components
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
