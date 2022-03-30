import { connect } from "react-redux";
import LoginModal from "../components/Login/LoginModal";
import { modalOpen } from "../redux-modules/loginModal";

// 로그인 모달 - redux-container
const LoginModalContainer = ({ modal, modalOpen }) => {
  return <LoginModal modal={modal} modalOpen={modalOpen} />;
};

const mapStateToProps = (state) => ({
  modal: state.modalOpen.modal,
});

const mapDispatchToProps = {
  modalOpen,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModalContainer);
