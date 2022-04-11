import { useState } from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import FirstStep from "../../components/MyInfo/SetInterests/FirstStep";
import SecondStep from "../../components/MyInfo/SetInterests/SecondStep";

// 관심분야 설정
const Setinterests = () => {
  const [step, setStep] = useState(1);

  function NextStep() {
    if (step === 1) {
      return <FirstStep ToNext={() => setStep(2)} />;
    } else if (step === 2) {
      return <SecondStep ToBefore={() => setStep(1)} />;
    }
  }
  return (
    <SetInterestsContainer>
      <PageHeader
        title={"관심분야 설정 [" + step + "/2]"}
        subTitle="당신의 관심분야를 선택해주세요"
      />
      <Frame>
        <img
          src={require("../../assets/Bookky/" +
            (step === 1
              ? "Bookky_Pick_Interest1.png"
              : "Bookky_Pick_Interest2.png"))}
          alt=""
        />
        <NextStep />
      </Frame>
    </SetInterestsContainer>
  );
};

//////////////////////////////////////// Styled-Components
const SetInterestsContainer = styled.div`
  position: relative;
  width: calc(100vw - 160px);
  display: flex;
  flex-direction: column;
`;

const Frame = styled.div`
  min-height: 75vh;
  display: flex;

  img {
    width: 468px;
    height: 540px;
    margin: 10vh 0 10vh auto;
  }
`;

export default Setinterests;
