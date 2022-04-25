import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import MenuCard from "../../components/Cards/MenuCard";
import { useSelector } from "react-redux";

// 추천받개 - 안내견 북키
function Guide() {
  // 변수 정의
  const MenuList = useSelector((state) => state.recommend);
  const SideNavState = useSelector((state) => state.SideNavState);

  // 안내견 북키 View
  return (
    <GuideContainer width={SideNavState.width}>
      <PageHeader
        title="안내견 북키"
        subTitle="북키의 로드맵을 참고하여 학습해보세요"
      />
      <MenuContainer>
        {MenuList.filter((menu) => menu.kind === "안내견 북키").map((menu) => (
          <MenuCard
            key={menu.title}
            kind={menu.kind}
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
    </GuideContainer>
  );
}

//////////////////////////////////////// Styled-Components
const GuideContainer = styled.div`
  width: ${(props) => props.width};
`;

const MenuContainer = styled.div`
  margin-top: 5vh;
  display: grid;
  row-gap: 3vh;
  column-gap: 3vw;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(750px, 30%));
`;

export default Guide;
