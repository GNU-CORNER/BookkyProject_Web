import styled from "styled-components";

// 추천받개 - 메뉴 한 개마다의 표현 단위
function MenuCard({ title, explain, isnew, kind }) {
  // 신 메뉴 표시 (NEW 뱃지)
  function RenderNew() {
    if (isnew)
      return (
        <img className="img" src={require("../../assets/new.png")} alt="" />
      );
    else return <></>;
  }

  // 메뉴 종류에 따른 배경 그림 지정
  function RenderImg() {
    switch (kind) {
      case "명탐정 북키":
        return (
          <img
            className="BackGroundImg detective"
            src={require("../../assets/Bookky/Bookky_Detective.png")}
            alt=""
          />
        );
      case "안내견 북키":
        return (
          <img
            className="BackGroundImg"
            src={require("../../assets/Bookky/Bookky_Guide.png")}
            alt=""
          />
        );
      case "새로운 아이디어":
        return (
          <img
            className="BackGroundImg"
            src={require("../../assets/Bookky/Bookky_Thinking.png")}
            alt=""
          />
        );
      default:
        return <></>;
    }
  }

  // MenuCard View
  return (
    <>
      <MenuCardContainer className="nodrag">
        <RenderNew />
        <div className="contents">
          <div className="title">{title}</div>
          <div className="explain">{explain}</div>
        </div>
        <div className="Bookky">
          <RenderImg />
        </div>
      </MenuCardContainer>
    </>
  );
}

//////////////////////////////////////// Styled-Components
const MenuCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #6e95ff;
  border-radius: 4px;
  width: 750px;
  height: 300px;
  color: #6e95ff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  .img {
    position: absolute;
    top: -25px;
    left: -25px;
    width: 70px;
  }

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .contents {
    display: flex;
    flex-direction: column;
    flex-basis: 35%;
    justify-content: space-between;
  }
  .title {
    font-size: 1.7em;
    font-weight: bold;
    margin-left: 2vw;
  }

  .explain {
    margin-left: 3vw;
  }

  .BackGroundImg {
    position: absolute;
    opacity: 0.5;
    right: 2vw;
    top: 10px;
    height: 280px;
  }

  .detective {
    right: 4vw;
  }
`;

export default MenuCard;
