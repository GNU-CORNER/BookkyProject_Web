import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BookSelectArea from "../../components/Community/BookSelectArea";
import PageHeader from "../../components/PageHeader";

// 커뮤니티 - 글쓰기
const WritePost = () => {
  // 변수 선언
  const [slug, setSlug] = useState(0);
  const location = useLocation().state;
  const [boardName, setBoardname] = useState("");
  const SideNavState = useSelector((state) => state.SideNavState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [book, setBook] = useState("");
  const [picture, setPicture] = useState("");

  // 최초 렌더링 시 초기화
  function init() {
    switch (location.boardName) {
      case "free":
        setSlug(0);
        setBoardname("자유게시판");
        break;
      case "trade":
        setSlug(1);
        setBoardname("중고장터");

        break;
      case "qna":
        setSlug(2);
        setBoardname("Q&A게시판");

        break;
      default:
        setSlug(0);
        setBoardname("");
        break;
    }
  }

  useEffect(init, [location]);
  return (
    <WritePostContainer width={SideNavState.width}>
      <PageHeader title="게시글 작성" subTitle={boardName} />
      <InputArea>
        <textarea
          className="title-input"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <BookSelectArea />
        <ImgSelectArea>
          <div>x</div>
          <div>x</div>
        </ImgSelectArea>
        <textarea
          className="contents-Input"
          placeholder="내용을 입력하세요"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <div className="submit" onClick={() => console.log(title, contents)}>
          글작성
        </div>
      </InputArea>
    </WritePostContainer>
  );
};

//////////////////////////////////////// Styled-Components
const WritePostContainer = styled.div`
  width: ${(props) => props.width};
`;

const InputArea = styled.div`
  margin-top: 10px;
  .submit {
    text-align: right;
    margin-right: 72px;
  }
  display: grid;
  grid-template-rows: 50px 100px 100px 50vh;

  textarea {
    border-radius: 4px;
    margin: 0px 72px 10px 72px;
    resize: none;
    background-color: #f5f5f5;
    padding: 10px;

    :focus {
      outline: 2px solid #6e95ff;
    }
  }

  .title-input {
    display: inline-block;
    vertical-align: middle;
    font-weight: bold;
    font-size: 1.2em;
    height: 40px;
  }

  .contents-Input {
    font-size: 1.1em;
    padding: 10px;
  }
`;

const ImgSelectArea = styled.div`
  margin: 10px 72px;
  display: flex;

  div {
    border: 2px solid #6e95ff;
    border-radius: 4px;
    width: 80px;
    height: 100%;
    margin-right: 5px;
  }
`;
export default WritePost;
