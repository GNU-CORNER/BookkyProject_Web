import axios from "axios";
import { useCookies } from "react-cookie";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalOpen } from "../../redux-modules/loginModal";
import { updateUser } from "../../redux-modules/userData";

const SocialGoogle = () => {
  // 변수 선언
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setCookie] = useCookies();

  // Google 통신에 성공했을 때
  const onSuccess = (res) => {
    dispatch(modalOpen(false));
    dispatch(updateUser("", res.profileObj.email, 2, "", res.googleId));

    // Google에서 가져온 Email과 tokenID(=password)로 Bookky 서버에서 회원 조회
    hasNickname(res.profileObj.email, res.googleId);
  };

  // 이메일과 비밀번호로 우리 서버에서 검증
  const hasNickname = (email, password) => {
    const params = JSON.stringify({
      email: email,
      pwToken: password,
      loginMethod: 2,
    });

    console.log("여기는 소셜로그인", params);
    // 통신 - 로그인 데이터 전송
    axios
      .post("http://203.255.3.144:8002/v1/user/signin", params, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        //로그인 통신 성공 시
        if (res.data.success === true) {
          // 통신에 성공했을 때, 쿠키의 만료시간 생성 (만료시간 == 1시간)
          const expires = new Date();
          expires.setMinutes(expires.getMinutes() + 60);

          // 로그인 유지를 위한 로그인 정보 쿠키 저장 (만료시간 == 1시간)
          setCookie("email", email, {
            expires: expires,
          });
          setCookie("password", password, {
            expires: expires,
          });
          setCookie("loginMethod", res.data.result.userData.loginMethod, {
            expires: expires,
          });
          setCookie("refresh_token", res.data.result.refresh_token);
          // Redux - 현재 유저 정보 업데이트
          dispatch(
            updateUser(
              res.data.result.access_token,
              res.data.result.userData.email,
              res.data.result.userData.loginMethod,
              res.data.result.userData.nickname,
              password,
              res.data.result.userData.tag_array
            )
          );
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          navigate("/signupmore");
        }
      });
  };

  return (
    <GoogleLogin
      clientId="89666983957-jbbsucr16fc11g0fdpgkvmehj12n3b8v.apps.googleusercontent.com"
      onSuccess={(res) => onSuccess(res)}
      onFailure={(res) => console.log("구글 소셜 로그인 실패 !", res)}
    />
  );
};

export default SocialGoogle;
