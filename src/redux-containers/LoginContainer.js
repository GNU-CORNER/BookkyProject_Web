import { connect } from "react-redux";
import Login from "../components/Login/Login";
import { updateUser } from "../redux-modules/userData";
import { modalOpen } from "../redux-modules/loginModal";

// 로그인 - redux-container
const LoginContainer = ({ updateUser, modalOpen }) => {
  return <Login updateUser={updateUser} modalOpen={modalOpen} />;
};

const mapStateToProps = (state) => ({
  userData: {
    accessToken: state.userData.accessToken,
    email: state.userData.email,
    nickname: state.userData.nickname,
  },
});

const mapDispatchToProps = {
  updateUser,
  modalOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
