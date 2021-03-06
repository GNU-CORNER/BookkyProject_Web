import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ReplyModal from "./ReplyModal";
import styled from "styled-components";

// Q&A 게시글 상세보기 - 댓글 보기 모달 창
const ReplyModalContainer = ({
  replyWriteModal,
  setReplyWriteModal,
  parentQPID,
  parentTitle,
  getPostData,
  post,
  title,
  postImage,
  replyCnt,
}) => {
  // 댓글보기 모달 창 View
  return (
    <StyledModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={replyWriteModal}
      onClose={() =>
        window.confirm("답글 작성을 취소하시겠습니까?")
          ? setReplyWriteModal(false)
          : {}
      }
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {/* 모달 뒤, 흐려지는 배경 */}
      <Fade in={replyWriteModal}>
        <StyledBox sx={style}>
          <ReplyModal
            setReplyWriteModal={setReplyWriteModal}
            parentQPID={parentQPID}
            parentTitle={parentTitle}
            getPostData={getPostData}
            post={post}
            replytitle={title}
            postImage={postImage}
          />
        </StyledBox>
      </Fade>
    </StyledModal>
  );
};

//////////////////////////////////////// Styled-Components, Fade style 정의
const StyledModal = styled(Modal)`
  .css-sox5kk-MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1500,
  height: 900,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 40,
};

const StyledBox = styled(Box)`
  padding: 50px !important;
`;

export default ReplyModalContainer;
