import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateUserTagArray } from "../../../redux-modules/userData";

// 관심분야 설정 - 2단계
const SecondStep = ({ ToBefore }) => {
  // 변수 선언
  const [Tags, setTags] = useState([{ TMID: "", nameTag: "" }]);
  const [pickedTags, setPickedTags] = useState([]);
  const user = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // getTags() : 서버 데이터 통신 함수 (태그 목록 불러오기)
  function getTags() {
    axios
      .get("http://203.255.3.144:8002/v1/tags")
      .then((res) => setTags(res.data.result.tag));
  }

  // Submit() : 선택한 태그 서버로 전송
  function Submit() {
    console.log(pickedTags);
    axios
      .put(
        "http://203.255.3.144:8002/v1/user/tag",
        { tag: pickedTags },
        {
          headers: {
            "Content-Type": "application/json",
            "access-token": user.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          dispatch(updateUserTagArray(res.data.result.tag));
          navigate("/");
        }
      });
  }

  // 태그 세로 스크롤 뷰 출력
  function SpreadTags() {
    return Tags.map((tag) => {
      return (
        <TagContainer
          key={tag.TMID}
          background={
            pickedTags.includes(tag.TMID) ? "var(--main-color)" : "#f1f1f1"
          }
          color={pickedTags.includes(tag.TMID) ? "white" : "black"}
          onClick={() => {
            if (pickedTags.includes(tag.TMID) === false)
              setPickedTags([...pickedTags, tag.TMID]);
            else {
              pickedTags.splice(pickedTags.indexOf(tag.TMID), 1);
              setPickedTags([...pickedTags]);
            }
          }}
        >
          {tag.nameTag}
        </TagContainer>
      );
    });
  }

  // 최초 로드 시 모든 태그 불러오기
  useEffect(getTags, []);

  // View
  return (
    <PickArea>
      <div className="Header">
        당신의 관심분야를 <br /> 1개 이상 선택하세요
      </div>
      <SpreadTagsArea>
        <SpreadTags />
      </SpreadTagsArea>
      <BtnArea>
        <div className="beforeBtn" onClick={() => ToBefore()}>
          이전
        </div>
        <div onClick={() => Submit(pickedTags)}>
          제출 ({pickedTags.length}개 선택)
        </div>
      </BtnArea>
    </PickArea>
  );
};

////////////////////////////////ㄴ//////// Styled-Components
const PickArea = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 400px;
  margin: 5vh auto;
  margin-left: 5vw;
  min-height: 70vh;
  min-width: 400px;

  .Header {
    color: var(--main-color);
    font-size: 2em;
    font-weight: 700;
  }

  .sub {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--main-color);
  }
`;

const SpreadTagsArea = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  margin-top: 5vh;
  height: 40vh;
  overflow-y: scroll;
  grid-template-columns: repeat(auto-fit, 80px);
  grid-template-rows: repeat(auto-fit, 80px);
  column-gap: 10px;
  row-gap: 10px;

  .option {
    border: 2px solid #f1f1f1;
    margin-top: 2vh;
    background-color: #f1f1f1;
    border-radius: 4px;
    line-height: 55px;
    padding-left: 10px;
  }

  .selected {
    border: 2px solid var(--main-color);
  }
`;

const TagContainer = styled.div`
  padding: 5px;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.background};
  border: 2px solid #f1f1f1;
  border-radius: 100px;
  white-space: normal;
  color: ${(props) => props.color};
  font-weight: 700;

  :hover {
    cursor: pointer;
    background-color: var(--main-color);
    opacity: 50%;
  }
`;

const BtnArea = styled.div`
  line-height: 55px;
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: white;

  div {
    margin: 5px 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-color: #6c95ff;
    border-radius: 4px;
    cursor: pointer;

    :hover {
      box-shadow: 0 5px 7px rgba(0, 0, 0, 0.25);
    }
  }
  .beforeBtn {
    background-color: #f1f1f1;
    color: black;
  }
`;

export default SecondStep;
