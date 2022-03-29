import styled from "styled-components";

function MenuCard({ title, explain, url, isnew }) {
  function RenderNew() {
    if (isnew)
      return <img className="img" src={require("../../assets/new.png")} />;
    else return <></>;
  }

  function RenderImg({ kind }) {
    switch (kind) {
      case "명탐정 북키":
        return <img className="img" src={require("../../assets/new.png")} />;
      default:
        return <></>;
    }
  }
  return (
    <>
      <MenuCardContainer className="nodrag">
        <RenderNew />
        <RenderImg />
        <div className="contents">
          <div className="title">{title}</div>
          <div className="explain">{explain}</div>
        </div>
        <div className="Bookky"></div>
      </MenuCardContainer>
    </>
  );
}

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
`;

const BackgroundImg = styled.img`
  position: absolute;
  right: 20px;
  width: 150px;
`;
export default MenuCard;
