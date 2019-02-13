import React, { Component } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { animateBackdropHeight } from '../../utils/animations';

const Wrapper = styled.div`
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
  column-fill: auto;
  width: 100%;
  margin-bottom: 50px;

  &.last {
    column-count: 1;
  }

  .category-heading {
    margin-bottom: 5px;
  }
  .category {
    font-weight: 100;
    font-size: 1.6rem;
  }
`;
const backdropHeightAnimation = css`
  animation: ${animateBackdropHeight()} 0.2s ease-in-out forwards;
`;
const ThemedWrapper = styled(Wrapper)`
  height: 0vh;
  ${props => props.isNavigationTapped && backdropHeightAnimation}
`;

Wrapper.defaultProps = {
  theme: {
    main: 'transparent'
  }
};

const theme = { tapped: '#1A3459' };

export default class Backdrop extends Component {
  state = {
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
        <li className="category-heading">
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
    const { isNavigationTapped } = this.props;
    const { listData } = this.state;

    return isNavigationTapped ? (
      <ThemeProvider theme={theme}>
        <ThemedWrapper isNavigationTapped={isNavigationTapped}>
          <CategoryListContainer>
            {listData.map(this.renderList)}
          </CategoryListContainer>
        </ThemedWrapper>
      </ThemeProvider>
    ) : (
      <Wrapper />
    );
  }
}
