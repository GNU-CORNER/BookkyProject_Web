import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import EditUserModal from "./EditUserModal";
import styled from "styled-components";

// 내 정보 - 사용자 정보 변경 시의 모달 창
const EditUserModalContainer = ({
  editUserModal,
  setEditUserModal,
  userData,
}) => {
  // View
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={editUserModal}
      onClose={() =>
        window.confirm("회원 정보 변경을 취소하시겠습니까?")
          ? setEditUserModal(false)
          : ""
      }
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {/* 모달 뒤, 흐려지는 배경 */}
      <Fade in={editUserModal}>
        <StyledBox sx={style}>
          <EditUserModal
            setEditUserModal={setEditUserModal}
            userData={userData}
          />
        </StyledBox>
      </Fade>
    </Modal>
  );
};

//////////////////////////////////////// Styled-Components, Fade style 정의
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 700,
  bgcolor: "background.paper",
  borderRadius: 2,
  overflow: "scroll",
  boxShadow: 24,
  p: 40,
};

const StyledBox = styled(Box)`
  padding: 0 !important;
`;
export default EditUserModalContainer;
