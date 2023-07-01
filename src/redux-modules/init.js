// 프로젝트 기본정보 (baseURL)
// 액션타입 정의 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const INIT_SET_URL = "INIT/SET_URL";

// 액션 생성함수. 함수를 만들고 타입을 지정. export 필수
export const setURL = (url) => ({
  type: INIT_SET_URL,
  url,
});

//초기상태와 Reducer 정의
const initialState = { url: "http://203.255.3.144:8002/v1/" };

function baseURL(state = initialState, action) {
  switch (action.type) {
    case INIT_SET_URL:
      return {
        url: action.isfold,
      };

    default:
      return state;
  }
}

export default baseURL;
