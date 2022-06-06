import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BookSelectArea from "../../components/Community/BookSelectArea";
import PageHeader from "../../components/PageHeader";
import { ReactComponent as Upload } from "../../assets/icons/community/upload.svg"; // 모달 닫기 버튼

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
  const [parentQPID] = useState(0);
  const [images, setImages] = useState([]);

  // 최초 렌더링 시 초기화
  function init() {
    switch (location.boardName) {
      case "free":
        setSlug(0);
        setBoardname("자유게시판");
        break;
      case "trade":
        setSlug(1);
        setBoardname("책 장터");
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
    console.log("Images 형태 검사 (base64)", images);
    console.log("도서 TBID 검사", TBID);

    // setPathName() : 전송 완료 후 이동할 경로 설정
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

    // params : 전송할 body 데이터 ( 글 제목 / 글 내용/ 첨부 도서 번호 / 첨부 사진 / 상위 게시글 번호(Q&A 용) )
    const params = JSON.stringify({
      title: title,
      contents: contents,
      TBID: TBID,
      Images: images,
      parentQPID: parentQPID,
    });

    // post 통신 : 게시글 작성
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
        console.log("게시글 작성 response", res);
        if (res.data.success === true) navigate(`/${setPathName()}/1`);
      });
  }

  // URL 경로 이동 시 마다 초기화
  useEffect(init, [location]);

  // 게시글 작성하기 View
  return (
    <WritePostContainer width={SideNavState.width}>
      {/* 헤더 */}
      <PageHeader title="게시글 작성" subTitle={boardName} />

      {/* 컨텐츠 영역 */}
      <InputArea>
        {/* 제목 input */}
        <input
          className="title-input input"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* 게시글 작성 날짜 출력 */}
        <p className="createAt">
          Created at{" "}
          {`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`}
        </p>

        {/* 도서 선택 영역 */}
        <BookSelectArea setTBID={setTBID} />

        {/* 업로드 된 이미지 Preview */}
        <ImgSelectArea>
          {images.map((el, cnt) => {
            return (
              <div className="upload uploaded-img" key={cnt}>
                <img src={el} alt="uploaded-img preview" />
              </div>
            );
          })}

          {/* 이미지 업로드 */}
          <label htmlFor="input-img">
            <div className="upload upload-btn">
              <Upload className="upload-btn" />

              <div>이미지 업로드</div>
            </div>
          </label>
          <input
            type="file"
            id="input-img"
            accept="image/*"
            onChange={(e) => {
              const reader = new FileReader(); // FileReader 객체 생성
              reader.readAsDataURL(e.target.files[0]);
              reader.onloadend = () => setImages([...images, reader.result]);
            }}
            style={{ display: "none" }}
          />
        </ImgSelectArea>

        {/* 내용 input */}
        <textarea
          className="contents-Input input"
          placeholder="내용을 입력하세요"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />

        {/* 작성 버튼 (submit) */}
        <div
          className="submit"
          onClick={() =>
            window.confirm("게시글을 작성하시겠습니까?") ? onSubmit() : ""
          }
        >
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
  display: grid;
  grid-template-rows: 45px 30px 100px 120px 40vh;
  padding: 15px;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;

  .createAt {
    color: #d5d5d5;
    line-height: 20px;
    margin-bottom: 10px;
  }

  .input {
    border-radius: 4px;
    resize: none;
    background-color: #f9f9f9;
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
    line-height: 1.5em;
    font-size: 1.1em;
    padding: 10px;
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
`;

const ImgSelectArea = styled.div`
  margin: 10px 0;
  display: flex;

  .upload {
    font-size: 0.7em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    border-radius: 4px;
    width: 100px;
    height: 100px;
    margin-right: 5px;
  }

  .upload-btn {
    div {
      margin: 5px 0 0 0;
    }

    svg {
      transition: all 0.3s;
      fill: gray;
      width: 40px;
      height: 40px;
    }

    :hover {
      color: var(--main-color);
      border: 2px solid var(--main-color);
      cursor: pointer;
    }

    :hover svg {
      border: none;
      fill: #6e95ff;
    }
  }

  .uploaded-img {
    img {
      padding: 2px;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
`;

export default WritePost;
