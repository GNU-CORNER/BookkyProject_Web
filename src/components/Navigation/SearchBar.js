import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// TopNav - 검색창 View
function SearchBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  // 검색창 View
  return (
    <SearchBarContainer>
      <TextField
        onKeyUp={() => {
          if (window.event.keyCode == 13)
            navigate("/search", { state: { query: input } });
        }}
      >
        <input
          type="text"
          placeholder="제목 또는 태그로 도서 검색"
          onChange={(e) => setInput(e.target.value)}
        />
      </TextField>
      <img src={require("../../assets/icons/topNav/icon-magnify.png")} alt="" />
    </SearchBarContainer>
  );
}

//////////////////////////////////////// Styled-Components
const SearchBarContainer = styled.div`
  position: relative;
  line-height: 35px;
  margin: auto 100px auto auto;

  img {
    position: absolute;
    top: 11px;
    right: 8px;
    width: 18px;
  }
`;

const TextField = styled.div`
  position: relative;

  input {
    width: 20vw;
    padding: 0 30px 0 10px;
    border: 2px solid #d3d3d3;
    border-radius: 5px;
    outline-color: #6c95ff;

    :focus {
      border: 2.5px solid #6c95ff;
    }
  }
`;

export default SearchBar;
