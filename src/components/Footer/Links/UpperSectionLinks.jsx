import React from 'react';
import styled from 'styled-components';
import SwedishFlag from './swedish_flag.png';

const List = styled.ul`
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  border-bottom: 0.35px solid lightgrey;
  border-top: 0.35px solid lightgrey;
  margin-bottom: 30px;
  padding: 20px 20px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li a {
    text-decoration: none;
    color: black;
  }

  .language-container {
    .flag {
      width: 19px;
      height: 21px;
      margin-right: 5px;
    }
    .language-select {
      border: 0;
    }
  }
`;

const UpperSectionLinks = () => {
  return (
    <List>
      <li>
        <a href="#Stores">Stores</a>
      </li>
      <li>
        <a href="#Login">Login</a>
      </li>
      <li className="language-container">
        <img className="flag" src={SwedishFlag} alt="swedish" />
        <select className="language-select" name="languages" id="languages">
          <option value="sweden">Sweden</option>
        </select>
      </li>
    </List>
  );
};

export default UpperSectionLinks;
