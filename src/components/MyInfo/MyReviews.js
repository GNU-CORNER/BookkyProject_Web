import styled from "styled-components";

// 내 정보 - 내가 작성한 리뷰
const MyReviews = () => {
  // View
  return (
    <MyReviewsContainer>
      <div className="no-Reviews">작성한 리뷰가 없습니다</div>
    </MyReviewsContainer>
  );
};

//////////////////////////////////////// Styled-Components
const MyReviewsContainer = styled.div`
  .no-Reviews {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px;
  }
`;
export default MyReviews;
