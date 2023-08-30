import { Link } from "react-router-dom";
import styled from "styled-components";

import React from "react";

const NavigationBar = styled.ul`
  font-size: var(--fs-400);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;

  @media screen and (min-width: 635px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2em;
  }
`;

const Item = styled.li`
  list-style: none;
  margin: 0.5em 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: var(--clr-black);
  transition: color 250ms ease-in-out;
  font-weight: 800;

  :after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0%;
    background-color: var(--bg-main);
    left: 0;
    bottom: -1px;
    transition: width 250ms;
  }

  :hover:after {
    width: 100%;
  }

  :hover,
  :focus {
    color: var(--bg-main);
  }
`;

function Navigation() {
  return (
    <NavigationBar>
      <Item>
        <StyledLink to="stories/top">Top Stories</StyledLink>
      </Item>
      <Item>
        <StyledLink to="stories/new"> New Stories</StyledLink>
      </Item>
      <Item>
        <StyledLink to="stories/job"> Job Stories</StyledLink>
      </Item>
      <Item>
        <StyledLink to="stories/best"> Best Stories</StyledLink>
      </Item>
    </NavigationBar>
  );
}

export default Navigation;

// import React from "react";

// function Navigation() {
//   return (
//     <ul>
//       <a>
//         {" "}
//         <li> hello</li>
//       </a>
//       <a>
//         {" "}
//         <li> hello</li>
//       </a>
//       <a>
//         {" "}
//         <li> hello</li>
//       </a>
//       <a>
//         {" "}
//         <li> hello</li>
//       </a>
//     </ul>
//   );
// }

// export default Navigation;
