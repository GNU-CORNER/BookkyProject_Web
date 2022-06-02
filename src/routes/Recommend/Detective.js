import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import ChatFromBookky from "../../components/Recommend/Detective/ChatFromBookky";
import ChatFromUser from "../../components/Recommend/Detective/ChatFromUser";
import SelectionBox from "../../components/Recommend/Detective/SelectionBox";

// 추천받개 - 명탐정 북키
function Detective() {
  // 변수 선언
  const SideNavState = useSelector((state) => state.SideNavState);

  // User의 대답 여부
  const [answered, setAnswerd] = useState(false);
  const [onSubmit, setSubmit] = useState(false);

  // 채팅 메시지 목록
  const [ChatArray, setChatArray] = useState([
    { mid: "0", who: "bookky", message: "내 이름은 북키, 탐정이죠 🕵🏻‍♀️" },
    {
      mid: "1",
      who: "bookky",
      message: "질문에 대답해줘, 도서를 추천해줄게 ❗",
      hideImg: true,
    },
    {
      mid: "2",
      who: "bookky",
      message: "자바스크립트와 관련한 책이야 ❓",
      hideImg: true,
    },
  ]);

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
                return (
                  <ChatFromBookky
                    key={el.mid}
                    message={el.message}
                    hideImg={el.hideImg}
                  />
                );
              } else if (el.who === "user") {
                return <ChatFromUser key={el.mid} message={el.message} />;
              } else if (el.who === "submit") {
                return "";
              } else return "";
            })}
          </div>
        </ChatArea>
        <SelectArea>
          {
            // 결과를 보여줘 ! 클릭 여부에 따른 출력
            onSubmit ? (
              <></>
            ) : (
              <SelectionBox
                ChatArray={ChatArray}
                setAnswerd={setAnswerd}
                setChatArray={setChatArray}
                answered={answered}
                setSubmit={setSubmit}
              />
            )
          }
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
  padding: 0 8px;

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

export default Detective;
