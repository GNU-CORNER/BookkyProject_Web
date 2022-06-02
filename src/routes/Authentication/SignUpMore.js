import { useState } from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux-modules/userData";
import { useCookies } from "react-cookie";

// 회원가입 (소셜 회원일 때, 닉네임만 추가 등록)
const SignUpMore = () => {
  // 변수 선언
  const user = useSelector((state) => state.userData);
  const SideNavState = useSelector((state) => state.SideNavState);
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState("");
  const [, setCookie] = useCookies();
  const navigate = useNavigate();

  // 회원가입 버튼 클릭 시
  function SendSignUp(nickName) {
    // 통신 - 데이터 (이메일, 닉네임, 비밀번호, 로그인메소드)
    const params = JSON.stringify({
      email: user.email,
      nickname: nickName,
      pwToken: user.accessToken,
      loginMethod: user.loginMethod,
    });

    // 통신 - 회원가입 데이터 전송
    axios
      .post("http://203.255.3.144:8002/v1/user/signup", params, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        //로그인 통신 성공 시
        if (res.data.success === true) {
          // 통신에 성공했을 때, 쿠키의 만료시간 생성 (만료시간 == 1시간)
          const expires = new Date();
          expires.setMinutes(expires.getMinutes() + 60);

          // 로그인 유지를 위한 로그인 정보 쿠키 저장 (만료시간 == 1시간)
          setCookie("email", user.email, {
            expires: expires,
          });
          setCookie("pwToken", user.accessToken, {
            expires: expires,
          });
          setCookie("LoginMethod", user.loginMethod, {
            expires: expires,
          });
          setCookie("refresh_token", res.data.refresh_token);
          // Redux - 현재 유저 정보 업데이트
          dispatch(
            updateUser(
              user.accessToken,
              res.data.result.email,
              res.data.result.loginMethod,
              res.data.result.nickname
            )
          );
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <SignUpContainer width={SideNavState.width}>
      <PageHeader title="회원가입" subTitle="지금 바로, 북키와 함께하세요 !" />
      <Frame>
        <InputArea>
          <form>
            <div className="Header">
              <div className="Title">추가정보 입력</div>
              <div className="Sub">추가정보 입력 후, 회원가입을 완료하세요</div>
            </div>
            <p>
              닉네임 <span>(10자 이내)</span>
            </p>
            <input
              type="text"
              value={nickName}
              onChange={(e) => {
                setNickName(e.target.value);
              }}
            />
            <SignUpBtn onClick={() => SendSignUp(nickName)}>
              회원가입 완료
            </SignUpBtn>
          </form>
        </InputArea>

        <img src={require("../../assets/Bookky/북키_회원가입.png")} alt="" />
      </Frame>
    </SignUpContainer>
  );
};

//////////////////////////////////////// Styled-Components
const SignUpContainer = styled.div`
  width: ${(props) => props.width};
  position: relative;
  display: flex;
  flex-direction: column;
`;

const InputArea = styled.div`
  position: relative;
  min-width: 400px;
  margin: auto;
  margin-right: 5vw;
  min-height: 70vh;
  min-width: 400px;

  .Header {
    margin-bottom: calc(6vh - 32px);
    text-align: center;

    .Sub {
      color: gray;
      margin: 5px;
      font-size: 1em;
    }
  }

  .Title {
    width: fit-content;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    margin: auto;
    border-bottom: 3px solid var(--main-color);
  }

  p {
    font-size: 0.9em;
    font-weight: bold;
    padding-left: 10px;

    span {
      color: var(--main-color);
      font-size: 0.8em;
    }
  }

  input {
    width: 22vw;
    min-width: 400px;
    height: 45px;
    margin-bottom: 20px;
    padding: 0 10px;
    background-color: #f3f3f3;
    border: 3px solid #f3f3f3;
    border-radius: 5px;
    outline-color: var(--main-color);

    :focus {
      border: 3px solid var(--main-color);
    }
  }
`;

const SignUpBtn = styled.div`
  position: absolute;
  width: 22vw;
  min-width: 400px;
  line-height: 55px;
  bottom: 30px;
  text-align: center;
  background-color: var(--main-color);
  border-radius: 4px;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.25);
  }
`;

const Frame = styled.div`
  min-height: 75vh;
  display: flex;

  img {
    width: 468px;
    margin: 5vh auto 5vh 0;
  }
`;

export default SignUpMore;
