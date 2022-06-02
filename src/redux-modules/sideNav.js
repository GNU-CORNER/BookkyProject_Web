// 로그인 모달의 OPEN / CLOSE 상태 관리
// 액션타입 정의 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const SIDENAV_FOLD = "sideNav/SIDENAV_FOLD";

// 액션 생성함수. 함수를 만들고 타입을 지정. export 필수
export const setFold = (isfold, width) => ({
  type: SIDENAV_FOLD,
  isfold,
  width,
});

//초기상태와 Reducer 정의
const initialState = { isfold: false, width: "calc(100vw - 160px)" };

function SideNavState(state = initialState, action) {
  switch (action.type) {
    case SIDENAV_FOLD:
      return {
        isfold: action.isfold,
        width: action.width,
      };

    default:
      return state;
  }
}

export default SideNavState;
