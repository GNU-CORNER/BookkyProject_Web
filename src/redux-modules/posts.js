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
  hot: [
    {
      id: 1,
      title: "이게 제일 핫한글 ?!",
      contents: "핫게에서 제일 핫한 이글 !!",
      likes: 99,
      comments: 71,
    },
    {
      id: 2,
      title: "이건 두번째로 핫한 글일껄?",
      contents: "다 핫게글임 ^^* 메롱 이건 두번째로 핫한 글일껄?",
      likes: 5,
      comments: 5,
    },
    {
      id: 3,
      title: "제목이다 인마3",
      contents:
        "세번째 핫게글임 다 핫게글임 ^^* 다 핫게글임 ^^*다 핫게글임 ^^*다 핫게글임 ^^*",
      likes: 5,
      comments: 5,
    },
    {
      id: 4,
      title: "네번째 핫게글인데",
      contents: "이거 다 내가 손으로 입력하고있음 레전드지; ",
      likes: 5,
      comments: 5,
    },
    {
      id: 5,
      title: "이게 귀찮다 슬슬",
      contents: "핫게글인데..",
      likes: 5,
      comments: 5,
    },
    {
      id: 6,
      title: "BookkyProject_Web/src/routes/TradeBoard.js",
      contents: `"<PageHeader title="중고장터" subTitle="읽지 않는 책을 사고 파세요" />"`,
      likes: 5,
      comments: 5,
    },
    {
      id: 7,
      title: "짱 귀찮네 핫게글임",
      contents: "다 핫게글임 ^^*",
      likes: 5,
      comments: 5,
    },
    {
      id: 8,
      title: "제목이다 인마2",
      contents: "짱 귀찮네 핫게글임짱 귀찮네 핫게글임",
      likes: 5,
      comments: 5,
    },
    {
      id: 9,
      title: "제목이다 인마213",
      contents: "다 황혁주 ^^*",
      likes: 5,
      comments: 5,
    },
    {
      id: 10,
      title: "김우석 인마2",
      contents: "다 핫게글임 ^*~~ ^^*",
      likes: 5,
      comments: 5,
    },
  ],
  free: [
    {
      id: 1,
      title: "게시판 짱",
      contents: `"학내 구성원 중 확진자 39명이 발생하여 구성원 여러분께 안내드립니다.
※교내문의처: 행정지원과 055-772-4502," `,
      likes: 3,
      comments: 5,
    },
    {
      id: 2,
      title: "코로나19 확진자 발생 현황(2022. 3. 31.)",
      contents:
        "자유 게시판입니다2. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 3,
      title:
        "구)경남과기대 2022.1학기 성적포기 및 동일교과목 성적취소 신청안내",
      contents: "2022학년도 1학기 성적 포기 및 동일교과목 성적취소 신청 안내",
      likes: 5,
      comments: 5,
    },
    {
      id: 4,
      title: "카틀라스를 이렇게 열심히 만들어봐라",
      contents: "ㄹㅇㅋㅋ 그렇지 않냐 인혁아",
      likes: 5,
      comments: 5,
    },
    {
      id: 5,
      title: "진작에 완성햇을듯",
      contents:
        "ㅋㅋㅋㅋㅋ유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 6,
      title: "지금시간은 2시 42분",
      contents: "몸과 마음이 모두 지친시간 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 7,
      title: "노래가 흘러나오고있다.",
      contents: "제목은 바로 죽을만큼 아파서 가수 엠씨몽",
      likes: 5,
      comments: 5,
    },
    {
      id: 8,
      title: "진짜 죽겠다 이러다",
      contents: "내일 공강이지만.. 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 9,
      title: "스콤에 가야한다는 전설이 있다.",
      contents:
        "오늘도 개바빴는데 내일은 어떨까 자유 게시판입니다. 자유 게시판입니다. 자유 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
  ],
  qna: [
    {
      id: 2,
      title: "생각해뵌까 게시글 10개 다 채울필요가 없었네",
      contents:
        "큐앤에이 게시판 게시판입니다. 게시판입니다. 게시판입니다. 게시판입니다. 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 3,
      title: "테스트 개수는 자유잖아?",
      contents: "2022학년도 1학기 성적 포기 및 동일교과목 성적취소 신청 안내",
      likes: 5,
      comments: 5,
    },
    {
      id: 4,
      title: "카틀라스를 이렇게 열심히 만들어봐라?? 이거맞나요?",
      contents: "ㄹㅇㅋㅋ 그렇지 않냐 인혁아ㅋㅋㅋㅋ",
      likes: 5,
      comments: 5,
    },
    {
      id: 5,
      title: "진작에 완성햇을듯??.. 과연 완성가능할까요? 질문하빈다",
      contents:
        "ㅋㅋㅋㅋㅋ유 게시판입니다. 여긴 큐엔에이 게시판입니다. 여긴 큐엔에이 게시판입니다. 여긴 큐엔에이 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 6,
      title: "지금시간은 2시 42분인가요?",
      contents: "몸과 마음이 모두 지친시간 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 7,
      title: "노래가 흘러나오고있나요? 스콤알바가기 싫은데",
      contents: "제목은 바로 죽을만큼 아파서 가수 엠씨몽",
      likes: 5,
      comments: 5,
    },
    {
      id: 8,
      title: "진짜 죽겠다 이러다 진짜 죽나요?",
      contents: "내일 공강이지만.. 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
  ],
  trade: [
    {
      id: 4,
      title: "책 팝니다",
      contents: "리액트 책인데.... 유용한데요",
      likes: 5,
      comments: 5,
    },
    {
      id: 5,
      title: "내 정신좀 봐라.. 이거 살사람?",
      contents: "ㅋㅋㅋㅋㅋ있을랑가 모르것네;. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 6,
      title: "김우석이 먹다남긴 떡볶이 팝니다",
      contents: "몸과 마음이 모두 지친시간 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
    {
      id: 7,
      title: "게시글들 제목보면 ㄹㅇ 정신팔릴듯 정신 팝니다~",
      contents: "제목은 바로 죽을만큼 아파서 가수 엠씨몽",
      likes: 5,
      comments: 5,
    },
    {
      id: 8,
      title: "진짜 죽겠다 이러다 진짜 죽나요?",
      contents: "내일 공강이지만.. 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
  ],
  myposts: [
    ,
    {
      id: 7,
      title: "게시글들 제목보면 ㄹㅇ 정신팔릴듯 정신 팝니다~",
      contents: "제목은 바로 죽을만큼 아파서 가수 엠씨몽",
      likes: 5,
      comments: 5,
    },
    {
      id: 8,
      title: "진짜 죽겠다 이러다 진짜 죽나요?",
      contents: "내일 공강이지만.. 게시판입니다. ,,,",
      likes: 5,
      comments: 5,
    },
  ],
};

function posts(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HOT:
      return {
        hot: action.posts,
        ...state,
      };
    case UPDATE_FREE:
      return {
        free: action.posts,
        ...state,
      };
    case UPDATE_QNA:
      return {
        qna: action.posts,
        ...state,
      };
    case UPDATE_TRADE:
      return {
        trade: action.posts,
        ...state,
      };
    case UPDATE_MYPOSTS:
      return {
        myposts: action.posts,
        ...state,
      };
    default:
      return state;
  }
}

export default posts;