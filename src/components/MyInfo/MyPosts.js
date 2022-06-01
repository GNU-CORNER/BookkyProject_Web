import styled from "styled-components";
import PostCard from "../Cards/PostCard";

const MyPosts = ({ myPosts }) => {
  return (
    <MyPostsContainer>
      {myPosts === undefined ? (
        <></>
      ) : myPosts.length === 0 ? (
        <div className="no-Reviews">작성한 게시글이 없습니다</div>
      ) : (
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

const MyPostsContainer = styled.div`
  .no-Reviews {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px;
  }
`;
export default MyPosts;
