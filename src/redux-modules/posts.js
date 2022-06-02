// 로그인 모달의 OPEN / CLOSE 상태 관리
// 액션타입 정의 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const UPDATE_HOT = "posts/UPDATE_HOT";
const UPDATE_FREE = "posts/UPDATE_FREE";
const UPDATE_QNA = "posts/UPDATE_QNA";
const UPDATE_TRADE = "posts/UPDATE_TRADE";
const UPDATE_MYPOSTS = "posts/UPDATE_MYPOSTS";

// 액션 생성함수. 함수를 만들고 타입을 지정. export 필수
export const updateHot = (posts) => ({ type: UPDATE_HOT, posts });
export const updateFree = (posts) => ({ type: UPDATE_FREE, posts });
export const updateQnA = (posts) => ({ type: UPDATE_QNA, posts });
export const updateTrade = (posts) => ({ type: UPDATE_TRADE, posts });
export const updateMyPosts = (posts) => ({ type: UPDATE_MYPOSTS, posts });

//초기상태와 Reducer 정의
const initialState = {
  hot: [],
  free: [],
  qna: [],
  trade: [],
  myposts: [],
};

function posts(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HOT:
      return {
        ...state,
        hot: action.posts,
      };
    case UPDATE_FREE:
      return {
        ...state,
        free: action.posts,
      };
    case UPDATE_QNA:
      return {
        ...state,
        qna: action.posts,
      };
    case UPDATE_TRADE:
      return {
        ...state,
        trade: action.posts,
      };
    case UPDATE_MYPOSTS:
      return {
        ...state,
        myposts: action.posts,
      };
    default:
      return state;
  }
}

export default posts;
