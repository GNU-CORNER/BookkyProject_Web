// 사용자의 데이터를 관리
// 액션타입 정의 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const UPDATE_USER = "userData/UPDATE_USER";
const UPDATE_ACCESS_TOKEN = "userData/UPDATE_ACCESS_TOKEN";
const UPDATE_USER_NICKNAME = "userData/UPDATE_USER_NICKNAME";
const UPDATE_USER_PASSWORD = "userData/UPDATE_USER_PASSWORD";
const UPDATE_USER_TAGARRAY = "userData/UPDATE_USER_TAGARRAY";
const UPDATE_USER_THUMBNAIL = "userData/UPDATE_USER_THUMBNAIL";

// 액션 생성함수. 함수를 만들고 타입을 지정. export 필수
export const updateUser = (
  accessToken,
  email,
  loginMethod,
  nickname,
  password,
  tagArray,
  thumbnail
) => ({
  type: UPDATE_USER,
  accessToken,
  email,
  loginMethod,
  nickname,
  password,
  tagArray,
  thumbnail,
});

export const updateAccessToken = (accessToken) => ({
  type: UPDATE_ACCESS_TOKEN,
  accessToken,
});
export const updateUserNickname = (nickname) => ({
  type: UPDATE_USER_NICKNAME,
  nickname,
});
export const updateUserPassword = (password) => ({
  type: UPDATE_USER_PASSWORD,
  password,
});
export const updateUserTagArray = (tagArray) => ({
  type: UPDATE_USER_TAGARRAY,
  tagArray,
});
export const updateUserThumbnail = (thumbnail) => ({
  type: UPDATE_USER_THUMBNAIL,
  thumbnail,
});

//초기상태와 Reducer 정의
const initialState = {
  accessToken: "",
  email: "",
  loginMethod: -1,
  nickname: "",
  password: "",
  tagArray: ["a"],
  thumbnail: "",
};

function userData(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        accessToken: action.accessToken,
        email: action.email,
        nickname: action.nickname,
        loginMethod: action.loginMethod,
        tagArray: action.tagArray,
        thumbnail: action.thumbnail,
      };
    case UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case UPDATE_USER_NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      };
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case UPDATE_USER_TAGARRAY:
      return {
        ...state,
        tagArray: action.tagArray,
      };
    case UPDATE_USER_THUMBNAIL:
      return {
        ...state,
        thumbnail: action.thumbnail,
      };

    default:
      return state;
  }
}

export default userData;
