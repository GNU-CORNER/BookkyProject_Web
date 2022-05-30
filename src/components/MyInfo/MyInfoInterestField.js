import styled from "styled-components";
import TagCard from "../Cards/TagCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//MyInfo - 내 관심분야 컴포넌트
const InterestField = () => {
  const [userTags, setUserTags] = useState([{ tag: "", TMID: 0 }]);
  const user = useSelector((state) => state.userData);

  // getProfile() : 서버로부터 사용자 프로필 정보를 가져옴
  function getProfile() {
    axios
      .get("http://203.255.3.144:8002/v1/myprofile", {
        headers: {
          "access-token": user.accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        setUserTags(res.data.result.userData.userTagList);
      });
  }

  useEffect(getProfile, [user.accessToken]);

  return (
    <InterestFieldContainer>
      {userTags.map((el) => (
        <TagCard key={el.TMID} TMID={el.TMID} tag={el.tag} />
      ))}
    </InterestFieldContainer>
  );
};

//////////////////////////////////////// Styled-Components
const InterestFieldContainer = styled.div`
  height: 245px;
  padding: 12px 0;

  div {
    display: block;
    float: left;
    margin: 5px;
    border-radius: 4px;
    opacity: 75%;
    font-weight: bold;
  }
`;

export default InterestField;
