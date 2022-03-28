import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import MenuCard from "../components/Recommend/MenuCard";

const MenuList = [
  {
    kind: "명탐정 북키",
    title: "명탐정 북키",
    explain: "당신이 원하는 책을 찾아줄게요 !",
    thumnail: "",
    url: "/recommend/guide/frontend",
    bookky: "북키와 대화하기",
    isnew: true,
  },
  {
    kind: "안내견 북키",
    title: "안내견 북키 - FrontEnd -",
    explain: "요즘 유행하는 웹 개발, 나도 해볼까? 북키가 안내해줄게 !",
    thumnail: "",
    url: "/recommend/guide/backend",
    bookky: "북키에게 안내받기",
    isnew: true,
  },
  {
    kind: "안내견 북키",
    title: "안내견 북키 - BackEnd -",
    explain:
      "진짜 프로그래머는 백엔드를 한다 ! 나도 해볼까? 북키가 안내해줄게 !",
    thumnail: "",
    url: "/recommend/guide/react",
    bookky: "북키에게 안내받기",
    isnew: false,
  },
];

function Recommend() {
  return (
    <RecommendContainer>
      <PageHeader
        title="추천받개 홈"
        subTitle="무슨 책을 읽어야할지 모르겠다구요? 북키가 도와줄게요 !"
      />
      <MenuContainer>
        {MenuList.map((menu) => (
          <MenuCard
            key={menu.title}
            title={menu.title}
            explain={menu.explain}
            thumnail={menu.thumnail}
            url={menu.url}
            bookky={menu.bookky}
            isnew={menu.isnew}
          />
        ))}
        <MenuCard
          title="북키가 새로운 아이디어를 생각중이에요"
          explain="추후 추가될 기능을 기대해주세요"
        />
      </MenuContainer>
    </RecommendContainer>
  );
}
const RecommendContainer = styled.div`
  width: calc(100vw - 160px);
`;

const MenuContainer = styled.div`
  margin-top: 5vh;
  display: grid;
  row-gap: 3vh;
  column-gap: 3vw;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(750px, 30%));
`;
export default Recommend;
