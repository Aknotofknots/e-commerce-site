import React, { Component } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { animateBackdropHeight } from '../../utils/animations';

const Menu = styled.div`
  position: fixed;
  top: 0;
  height: 0vh;
  width: 100vw;
  background-color: ${props => props.theme.tapped};
  z-index: -1;
`;

const CategoryListContainer = styled.div`
  position: absolute;
  padding: 0 20px;
  top: 23vh;
  width: 100%;
  height: 77%;
  line-height: 20px;
  color: #fff;
`;

const CategoryList = styled.ul`
  column-count: 2;
  column-fill: 0;
  width: 100%;
  margin-bottom: 50px;

  &.last {
    column-count: 1;
  }

  .heading {
    letter-spacing: 1.2px;
    margin-bottom: 12px;
    font-size: 1.4rem;
  }
  .category {
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 1.4rem;
  }
`;
const backdropHeightAnimation = css`
  animation: ${animateBackdropHeight()} 0.2s ease-in-out forwards;
`;
const ThemedMenu = styled(Menu)`
  height: 0vh;
  ${props => props.isNavigationClicked && backdropHeightAnimation}
`;

Menu.defaultProps = {
  theme: {
    main: 'transparent'
  }
};

class BackdropMenu extends Component {
  state = {
    theme: {
      tapped: '#1A3459'
    },
    listData: [
      {
        heading: 'body fit',
        categories: [
          'Super Slim',
          'Slim',
          'Contemporary',
          'Classic',
          'Extra Long Sleeve',
          'All Shirts',
          'New Arrivals',
          'White Shirts',
          'Outlet'
        ]
      },
      {
        heading: 'collection',
        categories: ['Red Ribbon', 'Green Ribbon', 'Black Ribbon']
      }
    ]
  };

  renderList = (data, list) => {
    const { listData } = this.state;
    const lastList = listData.length - 1;
    return (
      <CategoryList
        key={data.heading}
        className={lastList === list ? 'last' : ''}
      >
        <li className="heading">
          <h2>{data.heading.toUpperCase()}</h2>
        </li>
        {data.categories.map(category => (
          <li key={category} className="category">
            {category}
          </li>
        ))}
      </CategoryList>
    );
  };

  render() {
    const { isNavigationClicked } = this.props;
    const { listData, theme } = this.state;

    return isNavigationClicked ? (
      <ThemeProvider theme={theme}>
        <ThemedMenu isNavigationClicked={isNavigationClicked}>
          <CategoryListContainer>
            {listData.map(this.renderList)}
          </CategoryListContainer>
        </ThemedMenu>
      </ThemeProvider>
    ) : (
      <Menu />
    );
  }
}

export default BackdropMenu;
