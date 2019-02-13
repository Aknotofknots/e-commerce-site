import React, { Component } from 'react';
import styled from 'styled-components';

const LinkList = styled.ul`
  list-style: none;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
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
          <ListItem key={link}>{link}</ListItem>
        ))}
      </LinkList>
    );
  }
}
