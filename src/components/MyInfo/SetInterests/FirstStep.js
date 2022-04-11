import { useState } from "react";
import styled from "styled-components";

// 관심분야 설정
const FirstStep = ({ ToNext }) => {
  const [selected_option_1, setOption1] = useState(false);
  const [selected_option_2, setOption2] = useState(false);
  const Selected = "option selected";
  const NotSelected = "option";

  return (
    <QuestionArea>
      <div className="Header">개발 경험이 있습니까?</div>
      <Selection>
        <div className="sub">답변을 선택하세요</div>
        <div
          className={selected_option_1 ? Selected : NotSelected}
          onClick={() => {
            selected_option_1 ? setOption1(false) : setOption1(true);
          }}
        >
          한 번도 안해봤어요
        </div>
        <div
          className={selected_option_2 ? Selected : NotSelected}
          onClick={() => {
            selected_option_2 ? setOption2(false) : setOption2(true);
          }}
        >
          개발경험이 있어요
        </div>
      </Selection>
      <NextBtn onClick={() => ToNext()}>다음</NextBtn>
    </QuestionArea>
  );
};

//////////////////////////////////////// Styled-Components
const QuestionArea = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 400px;
  margin: 5vh auto;
  margin-left: 5vw;
  min-height: 70vh;
  min-width: 400px;

  .Header {
    text-align: center;
    color: #6e95ff;
    font-size: 2em;
    font-weight: 700;
  }

  .sub {
    font-size: 1.2em;
    font-weight: bold;
    color: #6e95ff;
  }
`;

const Selection = styled.div`
  margin-top: 5vh;

  .option {
    border: 2px solid #f1f1f1;
    margin-top: 2vh;
    background-color: #f1f1f1;
    border-radius: 4px;
    line-height: 55px;
    padding-left: 10px;
  }
  .selected {
    border: 2px solid #6e95ff;
  }
`;

const NextBtn = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 55px;
  text-align: center;
  background-color: #6c95ff;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.25);
  }
`;

export default FirstStep;
