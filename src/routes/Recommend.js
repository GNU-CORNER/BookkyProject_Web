import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import MenuCard from "../components/Recommend/MenuCard";

function Recommend() {
  const RoadMapList = [
    {
      title: "FrontEnd",
      explain: "요즘 유행하는 웹 개발, 나도 해볼까? 북키가 안내해줄게 !",
      url: "/recommend/guide/frontend",
    },
    {
      title: "backEnd",
      explain:
        "진짜 프로그래머는 백엔드를 한다 ! 나도 해볼까? 북키가 안내해줄게 !",
      url: "/recommend/guide/backend",
    },
  ];

  return (
    <>
      <PageHeader
        title="추천받개 홈"
        subTitle="무슨 책을 읽어야할지 모르겠다구요? 북키가 도와줄게요 !"
      />
      <RecommendContainer>
        {RoadMapList.map((menu) => (
          <MenuCard />
        ))}
      </RecommendContainer>
    </>
  );
}
const RecommendContainer = styled.div`
  width: calc(100vw - 160px);
  border: 1px solid red;
  text-align: center;
`;
export default Recommend;
