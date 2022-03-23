import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { SignUpBtn } from "../routes/SignUp";

function Login() {
  return (
    <LoginContainer>
      <div className="LogoArea">
        <img src={require("../assets/Logo.png")} />
      </div>
      <div className="LoginArea">
        <h3>로그인</h3>
        <StyledInput
          id="outlined-basic"
          label="이메일"
          variant="outlined"
          fullWidth
          onChange={(e) => console.log(e.target.value)}
        />
        <StyledInput
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          fullWidth
          onChange={(e) => console.log(e.target.value)}
        />
        <LoginBtn onClick={() => console.log("회원가입")}>로그인</LoginBtn>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;

  .LogoArea {
    flex-basis: 40%;

    img {
      width: 300px;
      margin: auto;
    }
  }

  .LoginArea {
    flex-basis: 60%;
  }
`;

const StyledInput = styled(TextField)`
  background-color: #f7f7f7;
  border: none;
  width: auto;
  line-height: 55px;
  text-align: center;
  margin: 45px 30px 0 30px;
`;

const LoginBtn = styled.div`
  width: auto;
  line-height: 55px;
  text-align: center;
  margin: 45px 30px 0 30px;
  background-color: #6c95ff;
  border-radius: 5px;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.25);
  }
`;
export default Login;
