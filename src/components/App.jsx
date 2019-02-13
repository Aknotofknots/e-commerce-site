import React, { Component } from 'react';
import Header from './Header';
import Backdrop from './Backdrop';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  state = {
    isNavigationTapped: false,
    clickedNavigationItem: ''
  };

  handleNavigationTap = e => {
    const textContent = e.target.textContent.toUpperCase();
    let clickedNavigationItem = 0;

    if (
      textContent === 'SHIRTS' ||
      textContent === 'ACCESSORIES' ||
      textContent === 'OUR WORLD'
    ) {
      this.setState({ isNavigationTapped: true });
      switch (textContent) {
        case 'SHIRTS':
          clickedNavigationItem = 1;
          this.setState({ clickedNavigationItem });
          break;
        case 'ACCESSORIES':
          clickedNavigationItem = 2;
          this.setState({ clickedNavigationItem });
          break;
        case 'OUR WORLD':
          clickedNavigationItem = 3;
          this.setState({ clickedNavigationItem });
          break;
        default:
          break;
      }
    } else if (
      e.target.id === 'search-input' ||
      e.target.id === 'search-icon-input'
    ) {
      console.log('serachsss', e.target);
      this.setState({ isNavigationTapped: true });
    } else {
      clickedNavigationItem = '';
      this.setState({ isNavigationTapped: false, clickedNavigationItem });
    }
  };

  render() {
    const { isNavigationTapped, clickedNavigationItem } = this.state;

    return (
      <>
        <Backdrop isNavigationTapped={isNavigationTapped} />
        <Header
          clickedNavigationItem={clickedNavigationItem}
          isNavigationTapped={isNavigationTapped}
          handleNavigationTap={this.handleNavigationTap}
        />
        <Content>
          <Footer />
        </Content>
      </>
    );
  }
}

export default App;
