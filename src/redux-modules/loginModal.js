// 로그인 모달의 OPEN / CLOSE 상태 관리
// 액션타입 정의 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const MODAL_OPEN = "loginModal/MODAL_OPEN";

// 액션 생성함수. 함수를 만들고 타입을 지정. export 필수
export const modalOpen = (modal) => ({ type: MODAL_OPEN, modal });

//초기상태와 Reducer 정의
const initialState = { modal: false };

function loginModal(state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        modal: action.modal,
      };

    default:
      return state;
  }
}

export default loginModal;
