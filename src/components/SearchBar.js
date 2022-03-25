import styled from "styled-components";

function SearchBar() {
  return (
    <SearchBarContainer>
      <TextField>
        <input type="text" placeholder="제목 또는 태그로 검색" />
      </TextField>
      <img src={require("../assets/icon-magnify.png")} alt="" />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  position: relative;
  line-height: 35px;
  margin: auto 160px auto auto;

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
