import styled from "styled-components";
import BoardTitle from "../components/Comunnity/BoardTitle";
import PostTitle from "../components/Comunnity/PostTitle";
import PageHeader from "../components/PageHeader";

const dumys = [
  {
    id: 1,
    title: "이런 카페는 어때요?",
  },
  {
    id: 2,
    title: "부상입고 버려졌다, 40명 사살한 러 저격수 우크라에 생포",
  },
  {
    id: 3,
    title: "200만 주주인데 5명 참석…'카카오 주총' 이래도 되나",
  },
  {
    id: 4,
    title: "탁현민이 밝힌 김정숙 여사 '2억 브로치' 진실은 '이것'",
  },
  {
    id: 5,
    title: "김총리, 확진자 수로 K방역 실패?…국민 모욕하는 것",
  },
  {
    id: 6,
    title: "[속보] 6시까지 32만5441명 확진…어제보다 8만1022명 많아",
  },
];

function Comunnity() {
  return (
    <ComunnityContainer>
      <PageHeader title="커뮤니티 홈" subTitle="최신 글 모아보기" />
      <ContentsContainer>
        <div className="hotBoard">
          <BoardTitle title="H🔥T게시판" />
          {dumys.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
        <div className="freeBoard">
          <BoardTitle title="자유게시판" />
          {dumys.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
        <div className="qnaBoard">
          <BoardTitle title="Q&amp;A게시판" />
          {dumys.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
        <div className="tradeBoard">
          <BoardTitle title="중고장터" />
          {dumys.map((post) => (
            <PostTitle title={post.title} key={post.id} />
          ))}
        </div>
      </ContentsContainer>
    </ComunnityContainer>
  );
}

const ComunnityContainer = styled.div`
  width: calc(100vw - 160px);
`;

const ContentsContainer = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(750px, 750px));
  grid-template-rows: repeat(2, 300px);
  justify-content: center;
  column-gap: 3vw;
  row-gap: 3vw;

  .hotBoard {
    border: 2px solid #6e95ff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .freeBoard {
    border: 2px solid #6e95ff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .qnaBoard {
    border: 2px solid #6e95ff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .tradeBoard {
    border: 2px solid #6e95ff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
export default Comunnity;
