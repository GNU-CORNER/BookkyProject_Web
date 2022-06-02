import styled from "styled-components";
import PostCard from "../Cards/PostCard";

// 내 정보 - 내가 쓴 게시글
const MyPosts = ({ myPosts }) => {
  return (
    <MyPostsContainer>
      {/* 내 게시글 정보가 아예 없을 때 (오류 방지)*/}
      {myPosts === undefined ? (
        <></>
      ) : // 내 게시글이 0개일 때,
      myPosts.length === 0 ? (
        <div className="no-Reviews">작성한 게시글이 없습니다</div>
      ) : (
        // 내 게시글이 1개 이상일 때, 최대 2개까지 출력
        myPosts.map((el, cnt) => {
          if (cnt < 2)
            return (
              <PostCard
                key={el.PID}
                pid={el.PID}
                communityType={el.communityType}
                title={el.title}
                content={el.contents}
                likes={el.likes}
                comments={el.comments}
              />
            );
          else return "";
        })
      )}
    </MyPostsContainer>
  );
};

//////////////////////////////////////// Styled-Components
const MyPostsContainer = styled.div`
  .no-Reviews {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px;
  }
`;
export default MyPosts;
