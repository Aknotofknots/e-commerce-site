import React, { Component } from 'react';
import styled from 'styled-components';

const LinkList = styled.ul`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 0.9rem;
  font-weight: bold;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  a {
    color: black;
  }
`;

export default class LowerSectionLinks extends Component {
  state = {
    links: ['customer care', 'press', 'pr agencies', 'career', 'retailers']
  };
  render() {
    const { links } = this.state;

    return (
      <LinkList>
        {links.map(link => (
          <ListItem key={link}>
            <a href={`#${link}`}>{link.toUpperCase()}</a>
          </ListItem>
        ))}
      </LinkList>
    );
  }
}
