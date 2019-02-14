import React, { Component } from 'react';
import Header from '../Header';
import BackdropMenu from '../BackdropMenu';
import Content from '../Content';
import Footer from '../Footer';
import handleNavigationClick from './handleNavigationClick';

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
        <Content>
          <Footer />
        </Content>
      </>
    );
  }
}

export default Home;
