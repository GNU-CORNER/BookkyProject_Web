import { useState } from "react";
import styled from "styled-components";

const BookSelectArea = () => {
  const [isSelected, setSelect] = useState(false);

  if (isSelected)
    return <BookSelectAreaContainer>트루</BookSelectAreaContainer>;
  else
    return (
      <BookSelectAreaContainer>
        <div className="img-area">
          <img
            className="none"
            src={require("../../assets/icons/community/plus.png")}
          />
        </div>
        <div className="text-area">
          <h1>원하는 도서를 추가해보세요</h1>
          <h3>여기를 눌러서 추가할 도서를 검색하세요</h3>
        </div>
      </BookSelectAreaContainer>
    );
};

const BookSelectAreaContainer = styled.div`
  width: fit-content;
  margin: 0 72px;
  padding: 5px 15px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: flex;
  transition: all 0.3s;
  background-color: var(--bright-base-color);

  :hover {
    cursor: pointer;
    opacity: 70%;
    border: 1px solid #6e95ff;
    background-color: #6e95ff;
  }

  :hover .img-area {
    border: 1px solid #ffffff;
  }
  :hover .text-area {
    color: white;

    h3 {
      color: #f1f1f1;
    }
  }

  .img-area {
    border: 1px solid #6e95ff;
    border-radius: 4px;
    min-width: 70px;
    height: 86px;
    transition: all 0.3s;

    .none {
      margin: 28px auto;
      width: 30px;
    }
  }

  .text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-left: 20px;
    transition: all 0.3s;

    h1 {
      line-height: 30px;
      font-size: 1.2em;
      font-weight: bold;
    }

    h3 {
      transition: all 0.3s;

      color: gray;
      line-height: 25px;
    }
  }
`;
export default BookSelectArea;
