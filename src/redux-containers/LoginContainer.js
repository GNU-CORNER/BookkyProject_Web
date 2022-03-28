import { connect } from "react-redux";
import Login from "../components/Login/Login";
import { updateUser } from "../modules/userData";
import { modalOpen } from "../modules/loginModal";

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
