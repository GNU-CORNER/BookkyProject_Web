import styled from "styled-components";

const MyReviews = () => {
  return (
    <MyReviewsContainer>
      <div className="no-Reviews">작성한 리뷰가 없습니다</div>
    </MyReviewsContainer>
  );
};

const MyReviewsContainer = styled.div`
  .no-Reviews {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px;
  }
`;
export default MyReviews;
