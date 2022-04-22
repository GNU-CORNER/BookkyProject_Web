import { useSelector } from "react-redux";
import styled from "styled-components";
import MiniProfile from "../miniProfile";

const ReviewWriting = () => {
  const user = useSelector((state) => state.userData);

  return (
    <ReviewWritingContainer>
      <MiniProfile
        nickname={user.nickname ? user.nickname : "로그인 후 이용하세요"}
        date={Date.now()}
      />
      <InputArea>
        <textarea placeholder="욕설 및 비속어는 자제해주세요" />
        <div className="writing">
          <img src={require("../../assets/icons/writing.png")} />작 성
        </div>
      </InputArea>
    </ReviewWritingContainer>
  );
};

const ReviewWritingContainer = styled.div`
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
`;

const InputArea = styled.div`
  display: flex;

  textarea {
    resize: none;
    width: 100%;
    margin: 8px;
    height: 90px;
    border-radius: 4px;
    padding: 5px;
    outline: 2px solid #f1f1f1;
    transition: all 0.2s;

    :focus {
      outline: 2px solid #6e95ff;
    }
  }

  .writing {
    background-color: #6e95ff;
    margin: 8px 0;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #6e95ff;
    border-radius: 15px;
    font-size: 0.8em;
    font-weight: bold;
    color: white;
  }
`;

export default ReviewWriting;
