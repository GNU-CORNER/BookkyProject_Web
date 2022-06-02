import styled from "styled-components";

// 추천받개 명탐정 북키 - 북키의 대화
const ChatFromBookky = ({ message, hideImg }) => {
  // View
  return (
    <ChatFromBookkyContainer>
      {/* hideImg = 이미지를 숨길 것인지에 관한 변수 */}
      {!hideImg ? (
        // case 1 : 북키 프로필 사진을 출력
        <img
          src={require("../../../assets/icons/sideNav/welcome.png")}
          alt="bookky profile"
        />
      ) : (
        // case 2 :  북키의 최초 2,3 번째 대화에는 프로필 사진을 숨긴다.
        <div className="imgArea" />
      )}
      {/* 대화 메시지 */}
      <div className="message">{message}</div>
    </ChatFromBookkyContainer>
  );
};

//////////////////////////////////////// Styled-Components
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
