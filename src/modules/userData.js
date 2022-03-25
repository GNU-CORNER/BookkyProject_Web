//액션타입 정의
// 방법 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const UPDATE_USER = "userData/UPDATE_USER";
const UPDATE_ACCESS_TOKEN = "userData/UPDATE_ACCESS_TOKEN";
const UPDATE_USER_NICKNAME = "userData/UPDATE_USER_NICKNAME";

// 액션 생성함수. 함수를 만들고 타입을 지정해줘야 한다.  export 필수 !!
export const updateUser = (accessToken, email, nickname) => ({
  type: UPDATE_USER,
  accessToken,
  email,
  nickname,
});
export const updateAccessToken = (accessToken) => ({
  type: UPDATE_ACCESS_TOKEN,
  accessToken,
});
export const updateUserNickname = (nickname) => ({
  type: UPDATE_USER_NICKNAME,
  nickname,
});

//초기상태 및 리듀서(예시에서의 counter) 만들기
const initialState = {
  accessToken: "",
  email: "",
  nickname: "",
};

function userData(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        accessToken: action.accessToken,
        email: action.email,
        nickname: action.nickname,
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
    default:
      return state;
  }
}

export default userData;
