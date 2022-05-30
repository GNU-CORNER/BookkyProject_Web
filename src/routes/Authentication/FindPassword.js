import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";

// 비밀번호 찾기 (기능 구현해야함 03/30)
function FindPassWord() {
  // 변수 정의
  const [email, setEmail] = useState("");
  const [verifiNumber, setVerifiNumber] = useState("");
  // const [password, setPassword] = useState(""); (임시 주석)
  // const [passwordConfirm, setPasswordConfirm] = useState(""); (임시 주석)
  const SideNavState = useSelector((state) => state.SideNavState);

  // 비밀번호 찾기 View
  return (
    <>
      <FindContainer width={SideNavState.width}>
        <PageHeader title="로그인에 문제가 있나요?" />
        <InputArea>
          <div className="Header">비밀번호 찾기</div>
          <p>이메일</p>
          <EmailVerifiArea>
            <input
              type="email"
              value={email}
              maxlength="35"
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
            maxlength="6"
            onChange={(e) => {
              setVerifiNumber(e.target.value);
            }}
          />

          <SignUpBtn onClick={() => console.log()}>다음 단계</SignUpBtn>
        </InputArea>
      </FindContainer>
    </>
  );
}

//////////////////////////////////////// Styled-Components
const FindContainer = styled.div`
  width: ${(props) => props.width};

  height: 85vh;
`;

const InputArea = styled.div`
  margin: auto;
  min-width: 400px;
  width: 25vw;
  margin-top: 15vh;

  .Header {
    width: fit-content;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    margin: auto;
    border-bottom: 3px solid var(--main-color);
    margin-bottom: 5vh;
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
    width: 100%;
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
  width: 100%;
  line-height: 55px;
  text-align: center;
  margin-top: 45px;
  background-color: var(--main-color);
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
    background-color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 5px;
  }
`;

export default FindPassWord;
