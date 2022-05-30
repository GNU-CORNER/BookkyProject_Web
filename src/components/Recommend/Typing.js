import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Typing = ({ message, pauseFor }) => {
  console.log(pauseFor);
  return (
    <TypingContainer>
      <Typewriter
        options={{ delay: 25 }}
        onInit={(typewriter) => {
          typewriter.pauseFor(pauseFor).typeString(message).start();
        }}
      />
    </TypingContainer>
  );
};

const TypingContainer = styled.div`
  width: fit-content;
  background-color: var(--bright-base-bg-color);
`;
export default Typing;
