import ReactTypingEffect from "react-typing-effect";

const Typing = ({ message }) => {
  return (
    <p>
      <ReactTypingEffect text={message} />
    </p>
  );
};

export default Typing;
