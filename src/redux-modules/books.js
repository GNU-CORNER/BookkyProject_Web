// 로그인 모달의 OPEN / CLOSE 상태 관리
// 액션타입 정의 : 액션타입은 대문자로 정의, 문자열 내용은 "모듈이름 / 액션이름"
const UPDATE_HOME_BOOKS = "books/UPDATE_HOME_BOOKS";
const UPDATE_INTERESTS = "books/UPDATE_INTERESTS";
// const UPDATE_BOOK_DETAIL = "books/UPDATE_BOOK_DETALE";
const UPDATE_SEARCH_RESULT = "books/UPDATE_SEARCH_RESULT";

// 액션 생성함수. 함수를 만들고 타입을 지정. export 필수
export const updateHomeBooks = (books) => ({ type: UPDATE_HOME_BOOKS, books });
export const updateInterests = (books) => ({ type: UPDATE_INTERESTS, books });
export const updateSearchResult = (books) => ({
  type: UPDATE_SEARCH_RESULT,
  books,
});

//초기상태와 Reducer 정의
const initialState = {
  homeBooks: [
    {
      tag: "",
      data: [],
    },
  ],
  interests: [],
  searchResult: [],
};

function books(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HOME_BOOKS:
      return {
        ...state,
        homeBooks: action.books,
      };
    case UPDATE_INTERESTS:
      return {
        ...state,
        interests: action.books,
      };
    // case UPDATE_BOOK_DETAIL:
    //   return {
    //     ...state,
    //     bookDetail: action.book,
    //   };
    case UPDATE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.books,
      };
    default:
      return state;
  }
}

export default books;
