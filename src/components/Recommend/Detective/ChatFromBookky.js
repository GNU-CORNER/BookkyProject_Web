import styled from "styled-components";

const ChatFromBookky = ({ message, hideImg }) => {
  return (
    <ChatFromBookkyContainer>
      {!hideImg ? (
        <img
          src={require("../../../assets/icons/sideNav/welcome.png")}
          alt="bookky profile"
        />
      ) : (
        <div className="imgArea" />
      )}
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

  img {
    margin: 0 5px;
    width: 30px;
    height: 30px;
  }

  .imgArea {
    margin: 0 20px;
  }
`;

export default ChatFromBookky;
