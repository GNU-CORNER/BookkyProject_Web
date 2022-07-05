import styled from "styled-components";

// 추천받개 명탐정 북키 - 사용자의 대화
const ChatFromUser = ({ message }) => {
  // View
  return (
    <ChatFromUserContainer>
      {/* 대화 메시지 */}
      <div className="message">{message}</div>
    </ChatFromUserContainer>
  );
};

//////////////////////////////////////// Styled-Components
const ChatFromUserContainer = styled.div`
  margin: 8px 0;
  line-height: 30px;
  display: flex;
  text-align: right;
  justify-content: flex-end;

  .message {
    padding: 0 8px;
    border-radius: 5px;
    width: fit-content;
    background-color: var(--main-color);
    color: #fff;
  }
`;
export default ChatFromUser;
