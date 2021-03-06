import { useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import MenuCard from "../../components/Cards/MenuCard";

// 추천받개 홈
function Recommend() {
  // 변수 정의
  const MenuList = useSelector((state) => state.recommend);
  const SideNavState = useSelector((state) => state.SideNavState);

  // 추천받개 홈 View
  return (
    <RecommendContainer width={SideNavState.width}>
      <PageHeader
        title="추천받개 홈"
        subTitle="무슨 책을 읽어야할지 모르겠다구요? 북키가 도와줄게요 !"
      />
      <MenuContainer>
        {MenuList.map((menu) => (
          <MenuCard
            key={menu.title}
            kind={menu.kind}
            course={menu.course}
            title={menu.title}
            explain={menu.explain}
            thumnail={menu.thumnail}
            url={menu.url}
            bookky={menu.bookky}
            isnew={menu.isnew}
          />
        ))}
        <MenuCard
          kind="새로운 아이디어"
          title="북키가 새로운 아이디어를 생각중이에요"
          explain="추후 추가될 기능을 기대해주세요"
        />
      </MenuContainer>
    </RecommendContainer>
  );
}

//////////////////////////////////////// Styled-Components
const RecommendContainer = styled.div`
  width: ${(props) => props.width};
`;

const MenuContainer = styled.div`
  margin-top: 5vh;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(750px, 750px));
  row-gap: 3vw;
  column-gap: 3vw;
`;

export default Recommend;
