import * as React from "react";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LoginContainer from "../redux-containers/LoginContainer";

function LoginModal({ modal, modalOpen }) {
  return (
    <ModalContainer>
      <button className="LoginBtn" onClick={() => modalOpen(true)}>
        로그인
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal}
        onClose={() => modalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <Box sx={style}>
            <LoginContainer />
          </Box>
        </Fade>
      </Modal>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  margin: 0 auto;

  .LoginBtn {
    margin: 15px auto 15px auto;
    width: 145px;
    line-height: 25px;
    color: white;
    border-radius: 20px;
    background-color: #6c95ff;
    text-align: center;
    font-size: 0.8em;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default LoginModal;
