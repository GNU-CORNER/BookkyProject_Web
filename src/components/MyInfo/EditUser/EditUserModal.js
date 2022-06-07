import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  updateUserNickname,
  updateUserThumbnail,
} from "../../../redux-modules/userData";
import { ReactComponent as Close } from "../../../assets/icons/community/cross.svg"; // 모달 닫기 버튼

// 내 정보 - 사용자 정보 수정
const EditUserModal = ({ setEditUserModal, userData }) => {
  // 변수 선언
  const [nickname, setNickname] = useState(userData.nickname);
  const [message, setMessage] = useState("닉네임을 입력하세요");
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  // submit() : 수정하기 버튼 클릭 시
  function submit() {
    // 전송 데이터(닉네임, 프로필사진(base64))
    const params = JSON.stringify({
      nickname: nickname,
      images: image,
    });

    axios
      .put("http://203.255.3.144:8002/v1/user/myprofile", params, {
        headers: {
          "access-token": user.accessToken,
        },
      })
      .then((res) => {
        console.log("정보 변경 완료", res);
        if (res.status === 200) {
          dispatch(updateUserThumbnail(res.data.result.route));
          dispatch(updateUserNickname(res.data.result.nickname));
          setEditUserModal(false);
        }
      });
  }

  // checkNickname(nickname) : 닉네임 중복검사
  function checkNickname(nickname) {
    axios
      .get("http://203.255.3.144:8002/v1/user/nickname", {
        params: {
          nickname: nickname,
        },
      })
      .then((res) => {
        switch (res.data.success) {
          case true:
            setMessage("사용할 수 있는 닉네임입니다.");
            break;
          case false:
            setMessage("이미 사용중인 닉네임입니다.");
            break;
          default:
            setMessage("닉네임을 입력하세요.");
            break;
        }
      })
      .catch((error) => {
        switch (error.response.data.success) {
          case true:
            setMessage("사용할 수 있는 닉네임입니다.");
            break;
          case false:
            setMessage("이미 사용중인 닉네임입니다.");
            break;
          default:
            setMessage("닉네임을 입력하세요.");
            break;
        }
      });
  }

  // View
  return (
    <EditUserModalContainer>
      {/* 모달 닫기 버튼 */}
      <Close
        className="close-btn"
        onClick={() =>
          window.confirm("회원 정보 변경을 취소하시겠습니까?")
            ? setEditUserModal(false)
            : ""
        }
      />
      <div className="inner">
        <h2 className="header">프로필 수정</h2>

        {/* 프로필 사진 변경 영역 */}
        <div className="edit-thumbnail">
          <input
            id="image-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onloadend = () => setImage(reader.result);
            }}
          />

          {
            // 새로운 프로필 사진을 선택했을 때
            image.length > 0 ? (
              <label htmlFor="image-input">
                <img
                  className="thumbnail-img"
                  src={image}
                  alt="user-thumbnail-img"
                />
              </label>
            ) : // 프로필 사진이 없을 때
            userData.userThumbnail === null ||
              userData.userThumbnail === undefined ? (
              <label htmlFor="image-input">
                <img
                  className="thumbnail-img"
                  src={require("../../../assets/icons/sideNav/welcome.png")}
                  alt="default-thumbnail-img"
                />
              </label>
            ) : (
              // 프로필 사진은 있지만, 새로운 사진 선택을 안했을 때
              <label htmlFor="image-input">
                <img
                  className="thumbnail-img"
                  src={userData.userThumbnail}
                  alt="user-thumbnail-img"
                />
              </label>
            )
          }

          {/* 닉네임 변경 영역 */}
          <NicknameArea>
            <input
              className="nickname"
              type="text"
              value={nickname}
              onChange={(e) => {
                checkNickname(e.target.value);
                setNickname(e.target.value);
              }}
            />
            {/* 닉네임 상태에 따른 메시지 출력 */}
            <div className="input-notice">{message}</div>
          </NicknameArea>
        </div>
      </div>

      {/* 수정하기 버튼 */}
      <div
        className="submit"
        onClick={() =>
          window.confirm("회원 정보를 변경하시겠습니까?") ? submit() : ""
        }
      >
        수정하기
      </div>
    </EditUserModalContainer>
  );
};

//////////////////////////////////////// Styled-Components
const EditUserModalContainer = styled.div`
  position: relative;
  height: 100%;

  .close-btn {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 20px;
    top: 2vh;

    :hover {
      cursor: pointer;
    }
  }

  .inner {
    padding: 30px;
  }
  .header {
    font-size: 1.8em;
    font-weight: bold;
    padding: 10px 0;
  }
  .edit-thumbnail {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .thumbnail-img {
    width: 120px;
    height: 120px;
    transition: all 0.3s;
    :hover {
      cursor: pointer;
      opacity: 60%;
    }
  }

  .submit {
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    background-color: var(--main-color);
    position: absolute;
    bottom: 0;
    width: 100%;
    line-height: 55px;
    text-align: center;
    transition: all 0.3s;
    :hover {
      cursor: pointer;
      opacity: 70%;
    }
  }
`;

const NicknameArea = styled.div`
  position: relative;
  width: 540px;
  text-align: center;

  .input-label {
  }

  .input-notice {
    font-weight: bold;
    font-size: 0.8em;

    ::before {
      content: "닉네임";
      font-size: 0.9em;
      display: block;
      width: 40px;
      top: 2px;
      margin-left: 60px;
      position: absolute;
    }
  }
  .nickname {
    margin: 20px 0;
    text-align: center;
    border-radius: 5px;
    background-color: #f9f9f9;
    outline: 2px solid black;
    width: 80%;
    height: 40px;
    font-size: 1.1em;
    font-weight: bold;

    :focus {
      outline-color: var(--main-color);
    }
  }
`;
export default EditUserModal;
