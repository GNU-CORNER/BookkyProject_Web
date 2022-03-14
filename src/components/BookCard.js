import styled from "styled-components";

function BookCard(name, description, author) {
  return (
    <Container>
      {name}, 설명 :{description}, 저자 {author}
    </Container>
  );
}

const Container = styled.div`
  width: 130px;
`;
export default BookCard;
