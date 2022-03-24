import * as React from "react";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Login from "./Login";
import { useLocation } from "react-router-dom";

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

function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();

  React.useEffect(handleClose, [location]);

  return (
    <ModalContainer>
      <button className="LoginBtn" onClick={handleOpen}>
        로그인
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Login />
          </Box>
        </Fade>
      </Modal>
    </ModalContainer>
  );
}

export default LoginModal;
