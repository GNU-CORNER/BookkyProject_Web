import { useEffect } from "react";
import styled from "styled-components";

const SelectionBox = ({
  ChatArray,
  setAnswerd,
  setChatArray,
  answered,
  setSubmit,
}) => {
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

  // submitSelection() : 결과를 보여줘 선택 시
  const submitSelection = () => {
    console.log(ChatArray);
    if (ChatArray[ChatArray.length - 1].who !== "user") {
      setChatArray([
        ...ChatArray,
        {
          mid: ChatArray.length + 1,
          who: "user",
          message: "결과를 보여줘 ❗",
        },
      ]);
      setAnswerd(false);
      setSubmit(true);
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

  useEffect(createBookkyQuestion, [
    answered,
    ChatArray,
    setAnswerd,
    setChatArray,
  ]);

  return (
    <SelectionBoxContainer>
      <h1 className="select-header">답변을 선택하세요</h1>
      <div className="button-area">
        <button
          className="answer"
          onClick={() => selectAnswer("맞아, 확실해 !")}
        >
          1️⃣ 맞아, 확실해 !
        </button>
        <button className="answer" onClick={() => selectAnswer("전혀 아니야.")}>
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
        <button className="submit" onClick={submitSelection}>
          결과를 보여줘 ❗
        </button>
      </div>
    </SelectionBoxContainer>
  );
};
export default SelectionBox;

const SelectionBoxContainer = styled.div`
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
