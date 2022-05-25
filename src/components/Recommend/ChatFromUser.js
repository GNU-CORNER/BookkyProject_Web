import styled from "styled-components";

const ChatFromUser = ({ message }) => {
  return (
    <ChatFromUserContainer>
      <div className="message">{message}</div>
    </ChatFromUserContainer>
  );
};

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
