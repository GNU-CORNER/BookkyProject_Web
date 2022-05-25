import styled from "styled-components";

const ChatFromBookky = ({ message }) => {
  return (
    <ChatFromBookkyContainer>
      <div className="message">{message}</div>
    </ChatFromBookkyContainer>
  );
};

const ChatFromBookkyContainer = styled.div`
  margin: 8px 0;
  line-height: 30px;
  display: flex;

  .message {
    padding: 0 8px;
    border-radius: 5px;
    width: fit-content;
    background-color: var(--bright-base-bg-color);
  }
`;
export default ChatFromBookky;
