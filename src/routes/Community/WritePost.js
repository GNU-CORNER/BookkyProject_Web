import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BookSelectArea from "../../components/Community/BookSelectArea";
import PageHeader from "../../components/PageHeader";

// 커뮤니티 - 글쓰기
const WritePost = () => {
  // 변수 선언
  const today = new Date();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userData);
  const SideNavState = useSelector((state) => state.SideNavState);
  const location = useLocation().state;
  const [boardName, setBoardname] = useState("");
  const [slug, setSlug] = useState(0);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [TBID, setTBID] = useState(0);
  const [parentQPID, setQPID] = useState(0);
  const [postImage, setPostImg] = useState(0);

  // const [picture, setPicture] = useState("");

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

  // onSubmit() : 글쓰기 버튼 클릭 시, 서버와 통신하여 게시글 작성
  function onSubmit() {
    console.log(TBID);
    function setPathName() {
      switch (slug) {
        case 0:
          return "free";
        case 1:
          return "trade";
        case 2:
          return "qna";
        default:
          return "";
      }
    }

    // 통신 - 데이터 (이메일, 비밀번호)
    const params = JSON.stringify({
      title: title,
      contents: contents,
      TBID: TBID,
      parentQPID: parentQPID,
      postImage: postImage,
    });

    axios
      .post(
        "http://203.255.3.144:8002/v1/community/writepost/" + slug,
        params,
        {
          headers: {
            "access-token": user.accessToken,
          },
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log("리스폰스", res);
        navigate(`/${setPathName()}/1`);
      });
  }
  useEffect(init, [location]);

  // 게시글 작성하기 View
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
        <p className="createAt">
          Created at{" "}
          {`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`}
        </p>
        <BookSelectArea setTBID={setTBID} />
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
        <div className="submit" onClick={onSubmit}>
          작성
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
  margin: 2vh 12vw;
  position: relative;

  .createAt {
    color: #d5d5d5;
    line-height: 20px;
    margin-bottom: 10px;
  }

  .submit {
    margin-top: 10px;
    display: flex;
    justify-self: flex-end;
    padding: 10px;
    border-radius: 4px;
    background-color: var(--main-color);
    color: white;
    font-weight: bold;
    width: fit-content;
    :hover {
      cursor: pointer;
    }
  }

  display: grid;
  grid-template-rows: 45px 30px 100px 100px 45vh;

  textarea {
    border-radius: 4px;
    resize: none;
    background-color: #f5f5f5;
    padding: 10px;

    :focus {
      outline: 2px solid var(--main-color);
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
  margin: 10px 0;
  display: flex;

  div {
    border: 2px solid #d5d5d5;
    border-radius: 4px;
    width: 80px;
    height: 100%;
    margin-right: 5px;
  }
`;
export default WritePost;
