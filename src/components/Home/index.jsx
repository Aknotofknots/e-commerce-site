import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import BackdropMenu from '../BackdropMenu';
import Content from '../Content';
import Footer from '../Footer';
import handleNavigationClick from './handleNavigationClick';

const ContentWrapper = styled.div`
  width: inherit;
  height: inherit;
  margin: 0 auto;
  z-index: -2;

  @media screen and (min-width: 600px) {
    width: 95%;
  }
`;

class Home extends Component {
  state = {
    isNavigationClicked: false,
    clickedNavigationItem: ''
  };

  handleNavigationClick = handleNavigationClick.bind(this);

  render() {
    const { isNavigationClicked, clickedNavigationItem } = this.state;

    return (
      <>
        <BackdropMenu isNavigationClicked={isNavigationClicked} />
        <Header
          clickedNavigationItem={clickedNavigationItem}
          isNavigationClicked={isNavigationClicked}
          handleNavigationClick={this.handleNavigationClick}
        />
        <ContentWrapper>
          <Content>
            <Footer />
          </Content>
        </ContentWrapper>
      </>
    );
  }
}

export default Home;
