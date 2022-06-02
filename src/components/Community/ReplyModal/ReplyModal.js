import styled from "styled-components";

// Q&A 게시글 - 답글 작성 모달 창 Inner
const ReplyModal = ({ setReplyWriteModal }) => {
  return (
    // 답글 작성 모달 창 View
    <ReplyModalContainer>
      <img
        className="close-btn"
        src={require("../../../assets/icons/community/close.png")}
        onClick={() =>
          window.confirm("답글 작성을 취소하시겠습니까?")
            ? setReplyWriteModal(false)
            : {}
        }
        alt="close-btn"
      />
      <div>답글 작성</div>
    </ReplyModalContainer>
  );
};

//////////////////////////////////////// Styled-Components
const ReplyModalContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;

  .close-btn {
    position: absolute;
    width: 30px;
    right: 40px;
    top: 30px;

    :hover {
      cursor: pointer;
    }
  }
`;

export default ReplyModal;
