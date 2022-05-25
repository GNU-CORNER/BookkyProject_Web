import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import ChatFromBookky from "../../components/Recommend/ChatFromBookky";
import ChatFromUser from "../../components/Recommend/ChatFromUser";
import Typing from "../../components/Recommend/Typing";

// 추천받개 - 명탐정 북키
function Detective() {
  // 변수 선언
  const SideNavState = useSelector((state) => state.SideNavState);

  // User의 대답 여부
  const [answered, setAnswerd] = useState(false);

  // 채팅 메시지 목록
  const [ChatArray, setChatArray] = useState([
    { mid: "0", who: "bookky", message: "내 이름은 북키, 탐정이죠 🕵🏻‍♀️" },
    { mid: "1", who: "bookky", message: "네가 찾고 있는 도서를 맞춰볼게 ❗" },
    { mid: "2", who: "bookky", message: "자바스크립트와 관련한 책이야 ❓" },
  ]);

  // selectAnswer() : 유저의 답변 선택
  const selectAnswer = (message) => {
    // 마지막이 유저의 채팅이면, 유저 답변 불가능
    if (ChatArray[ChatArray.length - 1].who !== "user") {
      setChatArray([
        ...ChatArray,
        { mid: ChatArray.length + 1, who: "user", message: message },
      ]);
      setAnswerd(true);
    }
  };

  // createBookkyQuestion() : 북키의 질문 생성 (추후 서버로부터 받아오게끔)
  const createBookkyQuestion = () => {
    if (answered === true) {
      setChatArray([
        ...ChatArray,
        {
          mid: ChatArray.length + 1,
          who: "bookky",
          message: "파이썬에 관련한 책이야 ❓",
        },
      ]);
      setAnswerd(false);
    }
  };

  useEffect(createBookkyQuestion, [answered]);

  // 명탐정 북키 View
  return (
    <DetectiveContainer width={SideNavState.width}>
      <PageHeader
        title="명탐정 북키"
        subTitle="당신이 원하는 책, 제가 찾아드리죠 !"
      />
      <ContentsArea>
        <ChatArea>
          <div className="name">북키</div>
          <div className="chat">
            {ChatArray.map((el) => {
              if (el.who === "bookky") {
                return <ChatFromBookky key={el.mid} message={el.message} />;
              } else if (el.who === "user") {
                return <ChatFromUser key={el.mid} message={el.message} />;
              }
            })}
          </div>
        </ChatArea>
        <SelectArea>
          <SelectionBox>
            <h1 className="select-header">답변을 선택하세요</h1>
            <div className="button-area">
              <button
                className="answer"
                onClick={() => selectAnswer("맞아, 확실해 !")}
              >
                1️⃣ 맞아, 확실해 !
              </button>
              <button
                className="answer"
                onClick={() => selectAnswer("전혀 아니야.")}
              >
                2️⃣ 전혀 아니야.
              </button>
              <button
                className="answer"
                onClick={() => selectAnswer("그런 것 같아.")}
              >
                3️⃣ 그런 것 같아.
              </button>
              <button
                className="answer"
                onClick={() => selectAnswer("아닌 것 같아.")}
              >
                4️⃣ 아닌 것 같아.
              </button>
              <button
                className="answer"
                onClick={() => selectAnswer("잘 모르겠는걸 ?")}
              >
                5️⃣ 잘 모르겠는걸 ?
              </button>
              <button
                className="submit"
                onClick={() => selectAnswer("결과를 보여줘 ❗")}
              >
                결과를 보여줘 ❗
              </button>
            </div>
          </SelectionBox>
        </SelectArea>
      </ContentsArea>
    </DetectiveContainer>
  );
}

//////////////////////////////////////// Styled-Components
const DetectiveContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 90vh;

  // 배경 (명탐정 북키)
  ::before {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${require("../../assets/Bookky/북키_추천받개_명탐정북키.png")});
    background-repeat: no-repeat;
    background-size: 50vh 90vh;
    background-position: 90% 50%;
    opacity: 0.5;
  }
`;

const ContentsArea = styled.div`
  margin: 2vh 20vw;
  display: grid;
  grid-template-columns: 50fr 50fr;
`;

const ChatArea = styled.div`
  min-width: 400px;
  background-color: #d7e2ff;
  border-radius: 5px;
  margin: 0 30px;
  padding: 0 15px;

  .name {
    margin: 10px;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
  }

  .chat {
    max-height: 70vh;
    min-height: 70vh;
    overflow: scroll;
  }
`;

const SelectArea = styled.div`
  min-width: 400px;
  display: flex;
  align-items: center;
`;

const SelectionBox = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 20fr 80fr;
  width: 100%;
  height: 500px;
  margin: 0 30px;

  ::before {
    border-radius: 5px;
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 80%;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .select-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
  }

  .button-area {
    position: relative;
    display: grid;
    grid-template-rows: repeat(10fr, 6);

    button:hover {
      background-color: rgba(110, 149, 255, 0.25);
    }
  }

  .submit {
    font-size: 1.1em;
    font-weight: bold;
    color: #6e95ff;
  }
`;

export default Detective;
