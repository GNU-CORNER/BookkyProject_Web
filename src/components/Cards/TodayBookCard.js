import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Home - 오늘의 추천도서 도서 카드
const TodayBookCard = ({ TBID, thumbnailImage }) => {
  const navigate = useNavigate();
  // 도서카드 View
  return (
    <TodayBookCardContainer onClick={() => navigate("/books/" + TBID)}>
      <div className="shelf" />
      <img src={thumbnailImage} alt="Book Thumbnail" />
    </TodayBookCardContainer>
  );
};

//////////////////////////////////////// Styled-Components
const TodayBookCardContainer = styled.div`
  position: relative;
  perspective: 400px;
  perspective-origin: 0 50%;
  width: 100px;
  margin-right: 25px;

  .shelf {
    position: absolute;
    left: -5px;
    bottom: -9px;
    width: 110px;
    height: 15px;
    background-color: brown;
    transform: rotateY(-30deg);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    background-image: url("https://images.pexels.com/photos/172276/pexels-photo-172276.jpeg?cs=srgb&dl=pexels-fwstudio-172276.jpg&fm=jpg");
    border-radius: 2px;
  }

  img {
    height: 130px;
    transform: rotateY(-30deg);
    transition: all 0.4s;
    border-radius: 2px;

    :hover {
      transform: rotateY(0);
      transform: scale(1.3);
      overflow: hidden;
      cursor: pointer;
    }
  }
`;
export default TodayBookCard;
