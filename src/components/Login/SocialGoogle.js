import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux-modules/userData";

const SocialGoogle = () => {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    dispatch(updateUser(res.accessToken, res.profileObj.email));
  };
  return (
    <GoogleLogin
      clientId="539118426337-4ne8hpe6h2q61u76n0d7qkda6j5rugrq.apps.googleusercontent.com"
      onSuccess={(res) => onSuccess(res)}
      onFailure={(res) => console.log("실패 !", res)}
      isSignedIn={true}
    />
  );
};

export default SocialGoogle;
