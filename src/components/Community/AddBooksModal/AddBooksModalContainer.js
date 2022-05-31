import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AddBooksModal from "./AddBooksModal";
import styled from "styled-components";

const AddBooksModalContainer = ({
  addBooksModal,
  setAddBooksModal,
  setBookTitle,
  setBookAuthor,
  setSelect,
  setThumbnail,
  setTBID,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={addBooksModal}
        onClose={() => setAddBooksModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* 모달 뒤, 흐려지는 배경 */}
        <Fade in={addBooksModal}>
          <StyledBox sx={style}>
            <AddBooksModal
              setAddBooksModal={setAddBooksModal}
              setBookTitle={setBookTitle}
              setBookAuthor={setBookAuthor}
              setSelect={setSelect}
              setThumbnail={setThumbnail}
              setTBID={setTBID}
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
  bgcolor: "background.paper",
  borderRadius: 2,
  overflow: "scroll",
  boxShadow: 24,
  p: 40,
};

const StyledBox = styled(Box)`
  padding: 30px 50px !important;
`;
export default AddBooksModalContainer;
