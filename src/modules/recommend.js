const initialState = [
  {
    kind: "명탐정 북키",
    title: "명탐정 북키",
    explain: "당신이 원하는 책을 찾아줄게요 !",
    thumnail: "",
    url: "../../assets/Bookky/Bookky_Detective.png",
    bookky: "북키와 대화하기",
    isnew: true,
  },
  {
    kind: "안내견 북키",
    title: "안내견 북키 - FrontEnd -",
    explain: "요즘 유행하는 웹 개발, 나도 해볼까? 북키가 안내해줄게 !",
    thumnail: "",
    url: "../../assets/Bookky/Bookky_Detective.png",
    bookky: "북키에게 안내받기",
    isnew: true,
  },
  {
    kind: "안내견 북키",
    title: "안내견 북키 - BackEnd -",
    explain:
      "진짜 프로그래머는 백엔드를 한다 ! 나도 해볼까? 북키가 안내해줄게 !",
    thumnail: "",
    url: "../../assets/Bookky/Bookky_Detective.png",
    bookky: "북키에게 안내받기",
    isnew: false,
  },
];

function recommend(state = initialState) {
  return state;
}

export default recommend;
