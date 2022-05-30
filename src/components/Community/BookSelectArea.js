import { useState } from "react";
import styled from "styled-components";

const BookSelectArea = () => {
  const [isSelected] = useState(false);

  if (isSelected)
    return <BookSelectAreaContainer>트루</BookSelectAreaContainer>;
  else
    return (
      <BookSelectAreaContainer>
        <div className="img-area"></div>
        <div className="text-area">
          <h1>원하는 도서를 추가해보세요</h1>
          <h3>여기를 눌러서 추가할 도서를 검색하세요</h3>
        </div>
      </BookSelectAreaContainer>
    );
};

const BookSelectAreaContainer = styled.div`
  width: fit-content;
  padding: 5px 15px;
  border: 2px solid #d5d5d5;
  border-radius: 4px;
  display: flex;
  transition: all 0.3s;
  background-color: var(--bright-base-color);

  :hover {
    cursor: pointer;
    opacity: 70%;
    border: 2px solid var(--main-color);
    background-color: var(--main-color);
  }

  :hover .img-area {
    border: 2px solid #ffffff;
    ::before {
      background-image: url(${require("../../assets/icons/community/plus_reverse.png")});
    }
  }

  :hover .text-area {
    color: white;

    h3 {
      color: #f1f1f1;
    }
  }

  .img-area {
    border: 2px solid #d5d5d5;
    border-radius: 4px;
    min-width: 70px;
    height: 86px;
    transition: all 0.3s;

    ::before {
      content: "";
      transition: all 0.3s;
      margin: 28px auto;
      display: block;
      width: 32px;
      height: 32px;
      background-size: cover;
      background: url(${require("../../assets/icons/community/plus.png")});
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
