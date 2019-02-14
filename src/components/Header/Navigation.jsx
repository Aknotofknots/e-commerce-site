import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 15px 0;

  ul {
    display: flex;
    justify-content: space-between;
    letter-spacing: 1px;

    li:nth-child(${props =>
          props.clickedNavigationItem &&
          props.isNavigationClicked &&
          props.clickedNavigationItem}) {
      color: #fff;
    }
  }
`;
const Navigation = ({ isNavigationClicked, clickedNavigationItem }) => {
  return (
    <Nav
      isNavigationClicked={isNavigationClicked}
      clickedNavigationItem={clickedNavigationItem}
    >
      <ul>
        <li>SHIRTS</li>
        <li>ACCESSORIES</li>
        <li>OUR WORLD</li>
      </ul>
    </Nav>
  );
};

export default Navigation;
