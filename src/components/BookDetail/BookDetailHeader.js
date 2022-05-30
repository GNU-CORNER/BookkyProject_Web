import styled from "styled-components";

const BookDetailHeader = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 30px;

  ::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 30px;
    vertical-align: -2px;
    background-color: var(--main-color);
    margin-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  }
`;
export default BookDetailHeader;
