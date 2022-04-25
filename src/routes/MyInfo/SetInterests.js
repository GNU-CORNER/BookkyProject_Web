import { useState } from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import FirstStep from "../../components/MyInfo/SetInterests/FirstStep";
import SecondStep from "../../components/MyInfo/SetInterests/SecondStep";
import { useSelector } from "react-redux";

// 관심분야 설정
const Setinterests = () => {
  const [step, setStep] = useState(1);
  const SideNavState = useSelector((state) => state.SideNavState);

  function NextStep() {
    if (step === 1) {
      return <FirstStep ToNext={() => setStep(2)} />;
    } else if (step === 2) {
      return <SecondStep ToBefore={() => setStep(1)} />;
    }
  }
  return (
    <SetInterestsContainer width={SideNavState.width}>
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
  width: ${(props) => props.width};

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
