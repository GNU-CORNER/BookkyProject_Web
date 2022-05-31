import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CommentModal from "./CommentModal";
import styled from "styled-components";

const CommentModalContainer = ({
  commentModal,
  setCommentModal,
  PID,
  setCommentCnt,
  getPostData,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={commentModal}
        onClose={() => setCommentModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* 모달 뒤, 흐려지는 배경 */}
        <Fade in={commentModal}>
          <StyledBox sx={style}>
            <CommentModal
              PID={PID}
              setPostCommentCnt={setCommentCnt}
              setCommentModal={setCommentModal}
              getPostData={getPostData}
            />
          </StyledBox>
        </Fade>
      </Modal>
    </>
  );
};

//////////////////////////////////////// Styled-Components, Fade style 정의
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1300,
  height: 800,
  overflow: "scroll",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 40,
};

const StyledBox = styled(Box)`
  padding: 50px !important;
`;

export default CommentModalContainer;
