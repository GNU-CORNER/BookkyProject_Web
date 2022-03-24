import { style } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <div className="LogoArea">
        <img src={require("../assets/Logo.png")} />
      </div>
      <div className="LoginArea">
        <div className="Header">로그인</div>
        <form>
          <input
            type="email"
            value={email}
            autoComplete="username"
            placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <LoginBtn onClick={() => console.log(email, password)}>로그인</LoginBtn>
        <LoginOption>
          <Link to="/signup">회원가입</Link>
          <Link to="/find">로그인에 문제가 있나요?</Link>
        </LoginOption>
        <div className="SocialLogin-title">SNS 간편로그인</div>
        <SocialLogin>
          <div onClick={() => alert("네이버 로그인")}>
            <img src={require("../assets/Social_Naver.png")} />
          </div>
          <div onClick={() => alert("카카오 로그인")}>
            <img src={require("../assets/Social_Kakao.png")} />
          </div>
          <div onClick={() => alert("구글 로그인")}>
            <img src={require("../assets/Social_Google.png")} />
          </div>
        </SocialLogin>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  min-height: 512px;
  text-align: center;

  .LogoArea {
    flex-basis: 40%;
    display: flex;
    border-right: 2px solid #d9d9d9;

    img {
      width: 300px;
      margin: auto;
    }
  }

  .LoginArea {
    flex-basis: 60%;

    input {
      width: 70%;
      line-height: 50px;
      margin: 10px auto;
      padding: 0 10px;
      background-color: #f3f3f3;
      border: 3px solid #f3f3f3;
      border-radius: 5px;
      outline-color: #6c95ff;
      transition: all 0.3s;

      :focus {
        border: 3px solid #6c95ff;
      }
    }
  }

  .Header {
    width: fit-content;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    margin: 4vh auto;
    border-bottom: 3px solid #6c95ff;
    margin-bottom: 5vh;
  }

  .SocialLogin-title {
    position: relative;
    width: 50%;
    font-size: 0.8em;
    margin: 4vh auto 2vh auto;
    padding-top: 2vh;
    border-top: 1px solid #f1f1f1;
  }
`;

const LoginBtn = styled.div`
  width: 70%;
  margin: 20px auto;
  line-height: 55px;
  text-align: center;
  background-color: #6c95ff;
  border-radius: 5px;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.25);
  }
`;

const LoginOption = styled.div`
  width: 70%;
  margin: auto;
  display: flex;

  a {
    font-size: 0.8em;
    flex-basis: 50%;
    color: gray;
  }
`;

const SocialLogin = styled.div`
  width: 30%;
  margin: 10px auto;
  display: flex;

  div {
    line-height: 40px;
    margin: auto;
    cursor: pointer;

    img {
      width: 36px;
      margin: auto;
    }
  }
`;

export default Login;
