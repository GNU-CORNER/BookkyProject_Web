import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BookSelectArea from "../../components/Community/BookSelectArea";
import PageHeader from "../../components/PageHeader";
import { ReactComponent as Upload } from "../../assets/icons/community/upload.svg"; // 모달 닫기 버튼

const ModifyPost = () => {
  // 변수 선언
  const location = useLocation();
  const today = new Date();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userData);
  const SideNavState = useSelector((state) => state.SideNavState);

  // 게시글에서 넘어온 데이터로 초기화
  const postData = location.state;
  const [title, setTitle] = useState(postData.post.title);
  const [contents, setContents] = useState(postData.post.contents);
  const [TBID, setTBID] = useState(postData.book.TBID);
  const [parentQPID] = useState(postData.post.parentQPID);
  const [images, setImages] = useState(postData.post.postImage);

  // onSubmit() :  버튼 클릭 시, 서버와 통신하여 게시글 수정
  function onSubmit() {
    console.log("Images 형태 검사 (base64)", images);
    console.log("도서 TBID 검사", TBID);

    axios
      .put(
        "http://203.255.3.144:8002/v1/community/modifypost/" +
          postData.boardNum,
        {
          title: title,
          contents: contents,
          TBID: TBID,
          PID: postData.PID,
          Images: images,
          parentQPID: parentQPID,
        },
        {
          headers: {
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === true)
          navigate("/postdetail/" + postData.boardNum + "/" + postData.PID);
      });
  }

  // View
  return (
    <ModifyPostContainer width={SideNavState.width}>
      {/* 헤더 */}
      <PageHeader title="게시글 수정" subTitle={postData.boardName} />

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
          Modified at{" "}
          {`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`}
        </p>

        {/* 도서 선택 영역 */}
        <BookSelectArea setTBID={setTBID} book={postData.book} />

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
            window.confirm("게시글을 수정하시겠습니까?") ? onSubmit() : ""
          }
        >
          수정
        </div>
      </InputArea>
    </ModifyPostContainer>
  );
};

//////////////////////////////////////// Styled-Components
const ModifyPostContainer = styled.div`
  width: ${(props) => props.width};
`;

const InputArea = styled.div`
  margin: 0 12vw;
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
    transition: all 0.3s;

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

export default ModifyPost;
