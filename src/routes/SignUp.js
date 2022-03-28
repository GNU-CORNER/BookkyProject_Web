import { useState } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [verifiNumber, setVerifiNumber] = useState("");
  const navigate = useNavigate();

  function SendSignUp(nickName, email, password) {
    const params = JSON.stringify({
      email: email,
      nickname: nickName,
      pwToken: password,
    });

    axios
      .post("http://203.255.3.144:8002/v1/test1", params, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("응답", res);
        if (res.data.success === true) {
          navigate("/");
        }
      });
  }

  return (
    <SignUpContainer>
      <PageHeader title="회원가입" subTitle="지금 바로, 북키와 함께하세요 !" />
      <Frame>
        <InputArea>
          <form>
            <div className="Header">환영합니다 !</div>
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
            <p>이메일</p>
            <EmailVerifiArea>
              <input
                type="email"
                value={email}
                maxLength="35"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button onClick={() => alert("인증번호가 전송되었습니다")}>
                인증번호 받기
              </button>
            </EmailVerifiArea>
            <p>인증번호</p>
            <input
              type="text"
              value={verifiNumber}
              maxLength="6"
              onChange={(e) => {
                setVerifiNumber(e.target.value);
              }}
            />
            <p>비밀번호</p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>비밀번호 확인</p>
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
            <SignUpBtn onClick={() => SendSignUp(nickName, email, password)}>
              회원가입
            </SignUpBtn>
          </form>
        </InputArea>

        <img src={require("../assets/Bookky/Bookky_SignUp.png")} alt="" />
      </Frame>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: calc(100vw - 160px);
  height: 85vh;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const InputArea = styled.div`
  margin: auto;
  margin-right: 8vw;
  min-width: 400px;
  width: 25vw;

  /* border: 1px solid blue; */

  .Header {
    width: fit-content;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    margin: auto;
    border-bottom: 3px solid #6c95ff;
    margin-bottom: 5vh;
  }

  p {
    font-size: 0.9em;
    font-weight: bold;
    padding-left: 10px;

    span {
      color: #6c95ff;
      font-size: 0.8em;
    }
  }
  input {
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    padding: 0 10px;
    background-color: #f3f3f3;
    border: 3px solid #f3f3f3;
    border-radius: 5px;
    outline-color: #6c95ff;

    :focus {
      border: 3px solid #6c95ff;
    }
  }
`;

const SignUpBtn = styled.div`
  width: 100%;
  line-height: 55px;
  text-align: center;
  margin-top: 45px;
  background-color: #6c95ff;
  border-radius: 5px;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.25);
  }
`;

const EmailVerifiArea = styled.div`
  position: relative;

  button {
    font-size: 0.8em;
    position: absolute;
    width: 100px;
    line-height: 30px;
    top: 6.5px;
    right: 9px;
    color: white;
    background-color: #6c95ff;
    border: 1px solid #6c95ff;
    border-radius: 5px;
  }
`;

const Frame = styled.div`
  display: flex;

  img {
    width: 468px;
    margin: 5vh auto 5vh 0;
  }
`;
export default SignUp;
