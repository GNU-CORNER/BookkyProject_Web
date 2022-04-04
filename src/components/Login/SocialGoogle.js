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

  // Google 통신에 성공했을 때
  const onSuccess = (res) => {
    dispatch(modalOpen(false));
    dispatch(updateUser(res.tokenId, res.profileObj.email));

    // Google에서 가져온 Email과 tokenID(=pwToken)로 Bookky 서버에서 회원 조회
    hasNickname(res.profileObj.email, res.tokenId);
  };

  // 이메일과 비밀번호로 우리 서버에서 검증
  const hasNickname = (email, pwToken) => {
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

        if (res.data.success === true) {
          // 로그인 유지를 위한 로그인 정보 쿠키 저장 (만료시간 == 1시간)
          setCookie("email", email, {
            expires: expires,
          });
          setCookie("pwToken", pwToken, {
            expires: expires,
          });
          setCookie("refresh_token", res.data.refresh_token);
          dispatch(
            updateUser(
              res.data.access_token,
              res.data.result.email,
              res.data.result.nickname
            )
          );
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          console.log("검증시의 유저", error);
          navigate("/signupmore");
        }
      });
  };

  return (
    <GoogleLogin
      clientId="539118426337-4ne8hpe6h2q61u76n0d7qkda6j5rugrq.apps.googleusercontent.com"
      onSuccess={(res) => onSuccess(res)}
      onFailure={(res) => console.log("실패 !", res)}
    />
  );
};

export default SocialGoogle;
