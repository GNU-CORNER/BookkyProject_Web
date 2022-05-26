import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CommentModal from "./CommentModal";

const CommentModalContainer = ({ commentModal, setCommentModal }) => {
  console.log(commentModal);
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
          <Box sx={style}>
            <CommentModal />
          </Box>
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
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 40,
};

export default CommentModalContainer;
