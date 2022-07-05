import styled from "styled-components";
import { ReactComponent as MegaPhone } from "../../assets/icons/community/megaphone.svg"; // 모달 닫기 버튼

// 커뮤니티 게시판 - 공지 사항 출력 (게시판 최상단)
const Notice = ({ notice }) => {
  // View
  return (
    <NoticeContainer>
      <MegaPhone />
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

  svg {
    margin: 0 10px;
    width: 24px;
    height: 24px;
  }
`;
export default Notice;
