import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  border-bottom: 0.35px solid lightgrey;
  border-top: 0.35px solid lightgrey;
  margin-bottom: 30px;
  padding: 20px 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
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
      <li>
        <img src="" alt="swedish" />
        <select name="languages" id="languages">
          <option value="sweden">Sweden</option>
        </select>
      </li>
    </List>
  );
};

export default UpperSectionLinks;
