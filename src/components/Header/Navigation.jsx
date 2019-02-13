import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 10px 0;

  ul {
    display: flex;
    justify-content: space-between;
    letter-spacing: 1px;

    li:nth-child(${props =>
          props.clickedNavigationItem &&
          props.isNavigationTapped &&
          props.clickedNavigationItem}) {
      color: #fff;
    }
  }
`;
const Navigation = ({ isNavigationTapped, clickedNavigationItem }) => {
  return (
    <Nav
      isNavigationTapped={isNavigationTapped}
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
