import styled from "styled-components";

function SearchBar() {
  return (
    <SearchBarContainer>
      <TextField type="text" placeholder="제목 또는 태그로 검색" />
      <img src={require("../assets/plus.png")} width="30px" />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  line-height: 32px;
  margin: auto 160px auto auto;
`;

const TextField = styled.input`
  border: 1px solid red;
  border-radius: 5px;
  width: 300px;
`;

export default SearchBar;
