import { useEffect, useState } from "react";
import styled from "styled-components";

function MenuCard() {
  return (
    <MenuCardContainer>
      <div>헬로</div>
    </MenuCardContainer>
  );
}

const MenuCardContainer = styled.div`
  border: 1px solid red;
  margin: auto;
  width: 700px;
  height: 300px;
  margin: 20px;
  display: inline-block;
`;
export default MenuCard;
