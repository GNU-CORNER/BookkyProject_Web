//액션타입 정리
// 방법 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성함수. 함수를 만들고 타입을 지정해줘야 한다.  export 필수 !!
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기상태 및 리듀서(예시에서의 counter) 만들기
const initialState = { number: 0 };

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
