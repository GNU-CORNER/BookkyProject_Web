import styled from "styled-components";
import BoardTitle from "../components/Comunnity/BoardTitle";
import PostTitle from "../components/Comunnity/PostTitle";
import PageHeader from "../components/PageHeader";

// 게시글 더미데이터
const dumys = [
  {
    kind: "hot",
    id: 1,
    title: "이런 카페는 어때요?",
  },
  {
    kind: "hot",
    id: 2,
    title: "부상입고 버려졌다, 40명 사살한 러 저격수 우크라에 생포",
  },
  {
    kind: "hot",
    id: 3,
    title: "200만 주주인데 5명 참석…'카카오 주총' 이래도 되나",
  },
  {
    kind: "hot",
    id: 4,
    title: "탁현민이 밝힌 김정숙 여사 '2억 브로치' 진실은 '이것'",
  },
  {
    kind: "hot",
    id: 5,
    title: "김총리, 확진자 수로 K방역 실패?…국민 모욕하는 것",
  },
  {
    kind: "hot",
    id: 6,
    title: "[속보] 6시까지 32만5441명 확진…어제보다 8만1022명 많아",
  },
  {
    kind: "free",
    id: 1,
    title: "아 개발하기 싫다",
  },
  {
    kind: "free",
    id: 2,
    title: "갱갱 인투더 룸~",
  },
  {
    kind: "free",
    id: 3,
    title: "신세계 인터내셔날 주가 폭등 !",
  },
  {
    kind: "free",
    id: 4,
    title: "플라워 - 애정표현 노래 개좋아여",
  },
  {
    kind: "free",
    id: 5,
    title: "김총리, 확진자 수로 K방역 실패?…국민 모욕하는 것",
  },
  {
    kind: "qna",
    id: 2,
    title: "리액트 개발중입니다. 이거 어떻게하죠?",
  },
  {
    kind: "qna",
    id: 3,
    title: "카카오 주식 관련해서 질문 있습니다.",
  },
  {
    kind: "qna",
    id: 4,
    title: "이 책 이름 아시는 분",
  },
  {
    kind: "qna",
    id: 5,
    title: "스트레스 받네요.. 스트레스 푸는 법좀 알려주세요 젭라",
  },
  {
    kind: "qna",
    id: 6,
    title: "[속보] 6시까지 32만5441명 확진…어제보다 8만1022명 많아",
  },
  {
    kind: "trade",
    id: 2,
    title: "이거사실분",
  },
  {
    kind: "trade",
    id: 3,
    title: "머지큐브 팔아요~~ 이수원 교수님이 주신 레전드 큐브",
  },
  {
    kind: "trade",
    id: 5,
    title: "김총리, 확진자 수로 K방역 실패?…국민 모욕하는 것",
  },
  {
    kind: "trade",
    id: 6,
    title: "호오오오 민경훈 앨범 팔아요",
  },
];

// 커뮤니티 홈
function Comunnity() {
  // 커뮤니티 홈 View
  return (
    <ComunnityContainer>
      <PageHeader title="커뮤니티 홈" subTitle="최신 글 모아보기" />
      <ContentsContainer>
        <div className="hotBoard">
          <BoardTitle title="H🔥T게시판" kind="hot" />
          {dumys
            .filter((post) => post.kind === "hot")
            .map((post) => (
              <PostTitle title={post.title} key={post.id} />
            ))}
        </div>
        <div className="freeBoard">
          <BoardTitle title="자유게시판" kind="free" />
          {dumys
            .filter((post) => post.kind === "free")
            .map((post) => (
              <PostTitle title={post.title} key={post.id} />
            ))}
        </div>
        <div className="qnaBoard">
          <BoardTitle title="Q&amp;A게시판" kind="qna" />
          {dumys
            .filter((post) => post.kind === "qna")
            .map((post) => (
              <PostTitle title={post.title} key={post.id} />
            ))}
        </div>
        <div className="tradeBoard">
          <BoardTitle title="중고장터" kind="trade" />
          {dumys
            .filter((post) => post.kind === "trade")
            .map((post) => (
              <PostTitle title={post.title} key={post.id} />
            ))}
        </div>
      </ContentsContainer>
    </ComunnityContainer>
  );
}

//////////////////////////////////////// Styled-Components
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
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .freeBoard {
    border: 2px solid #6e95ff;
    border-radius: 4px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .qnaBoard {
    border: 2px solid #6e95ff;
    border-radius: 4px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .tradeBoard {
    border: 2px solid #6e95ff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export default Comunnity;
