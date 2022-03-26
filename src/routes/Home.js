import { useSelector } from "react-redux";
import styled from "styled-components";
import SpreadBooks from "../components/SpreadBooks";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateUser } from "../modules/userData";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

function Home() {
  const user = useSelector((state) => state.userData);
  console.log(user);
  const dispatch = useDispatch();
  const cookies = useCookies();

  console.log(cookies);
  console.log("여긴작동하나?");

  const AutoLogin = () => {
    if (cookies[0].autologin === "true") {
      axios
        .post(
          "http://203.255.3.144:8002/v1/test1",
          JSON.stringify({
            email: localStorage.getItem("email"),
            pwToken: localStorage.getItem("password"),
          }),
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          if (res.data.success === true) {
            dispatch(
              updateUser(
                res.data.access_token,
                res.data.result.email,
                res.data.result.nickname
              )
            );
          } else {
            console.log("로그인 에러");
          }
        });
    }
  };
  useEffect(AutoLogin, []);

  return (
    <HomeContainer>
      <MainHeader>
        <Title>
          <p>{user.accessToken ? "오늘" : "북키가"}</p>
          <p>
            <span>{user.accessToken ? user.nickname : "처음 오신 당신"}</span>
            {user.accessToken ? " 님" : ""}에게
          </p>
          <p>추천하는 책이에요 !</p>
        </Title>
      </MainHeader>
      <div>
        <TagTitle>{"React"}</TagTitle>
        <SpreadBooks />
      </div>
      <div>
        <TagTitle>{"JavaScript"}</TagTitle>
        <SpreadBooks />
      </div>
    </HomeContainer>
  );
}

///////// Styled-components /////////
const HomeContainer = styled.div`
  width: calc(100vw - 160px);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 0 0 20px 20px;
  max-height: 250px;
  height: 25vh;
  background-color: #6c95ff;
`;

const Title = styled.div`
  color: #f5f5f5;
  font-size: 2em;
  color: white;
  font-weight: 550;
  padding-left: 5vw;

  span {
    color: black;
  }

  /* 드래그 방지 CSS */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TagTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  padding: 5vh 0 0 5vw;
`;

export default Home;
