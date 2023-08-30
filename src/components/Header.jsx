import React from "react";

import styled from "styled-components";

const HeaderComponent = styled.div`
  text-transform: uppercase;
  width: 100%;
  background-color: var(--bg-main);
  text-align: center;
  font-size: var(--fs-500);
  font-weight: 700;
  letter-spacing: 3px;
`;

function Header() {
  return <HeaderComponent>hacker news</HeaderComponent>;
}

export default Header;
