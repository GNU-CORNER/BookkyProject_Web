import styled from "styled-components";

const BookDetailHeader = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.div`
  margin-bottom: 20px;
  padding: 0 15px;
  font-size: 30px;
  border-left: 10px solid #6e95ff;
  border-radius: 4px;
`;
export default BookDetailHeader;
