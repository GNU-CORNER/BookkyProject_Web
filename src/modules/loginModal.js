//액션타입 정리
// 방법 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const MODAL_OPEN = "loginModal/MODAL_OPEN";

// 액션 생성함수. 함수를 만들고 타입을 지정해줘야 한다.  export 필수 !!
export const modalOpen = (modal) => ({ type: MODAL_OPEN, modal });

//초기상태 및 리듀서(예시에서의 counter) 만들기
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
