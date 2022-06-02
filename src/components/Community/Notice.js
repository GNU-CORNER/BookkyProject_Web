import styled from "styled-components";

// 커뮤니티 게시판 - 공지 사항 출력 (게시판 최상단)
const Notice = ({ notice }) => {
  // View
  return (
    <NoticeContainer>
      <img
        src={require("../../assets/icons/community/notice.png")}
        alt="notice"
      />
      {notice}
    </NoticeContainer>
  );
};

//////////////////////////////////////// Styled-Components
const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  max-height: 40px;
  border: 2px solid #d5d5d5;
  margin: 5px 0;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
  color: gray;
  img {
    margin: 0 10px;
    width: 28px;
    height: 28px;
  }
`;
export default Notice;
