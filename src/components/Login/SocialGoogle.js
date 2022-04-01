import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalOpen } from "../../redux-modules/loginModal";
import { updateUser } from "../../redux-modules/userData";
import { useState } from "react";

const SocialGoogle = () => {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [email, setEmail] = useState("");
  const [pwToken, setPwToken] = useState("");

  // Google 통신에 성공했을 때
  const onSuccess = (res) => {
    console.log(res);
    dispatch(modalOpen(false));
    dispatch(updateUser(res.accessToken, res.profileObj.email));
    setEmail(res.profileObj.email);
    setPwToken(res.accessToken);
  };

  // 이메일과 비밀번호로 우리 서버에서 검증
  const hasNickname = () => {
    const params = JSON.stringify({
      email: email,
      pwToken: pwToken,
    });

    axios
      .post("http://203.255.3.144:8002/v1/user/signin", params, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        // 통신에 성공했을 때, 쿠키의 만료시간 생성 (만료시간 == 1시간)
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60);
        console.log(res);

        if (res.data.success === true) {
          setCookie("email", email, {
            expires: expires,
          });
          setCookie("pwToken", pwToken, {
            expires: expires,
          });
          setCookie("refresh_token", res.data.refresh_token);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          navigate("/signupmore");
        }
      });
  };

  useEffect(() => hasNickname, [email]);

  return (
    <GoogleLogin
      clientId="539118426337-4ne8hpe6h2q61u76n0d7qkda6j5rugrq.apps.googleusercontent.com"
      onSuccess={(res) => onSuccess(res)}
      onFailure={(res) => console.log("실패 !", res)}
    />
  );
};

export default SocialGoogle;
