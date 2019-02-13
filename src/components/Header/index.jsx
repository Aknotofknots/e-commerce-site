import React from 'react';
import styled, { css } from 'styled-components';
import ShoppingBagIcon from './ShoppingBagIcon';
import Navigation from './Navigation';
import Divider from '../shared/Divider';
import SearchIcon from './search_icon.svg';
import {
  animateInputHeight,
  animateInputIconOpacity
} from '../../utils/animations';

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 0 20px;
  z-index: 0;

  h1 {
    font-weight: normal;
    margin: 0;
    font-size: inherit;
  }

  section {
    display: inline-block;
    margin: 10px 0;
    color: ${props => props.isNavigationTapped && '#fff'};
  }

  .heading {
    width: 50%;
    font-size: 2.4rem;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    letter-spacing: 0.9px;
  }

  .total {
    width: 50%;
    text-align: right;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }
`;

const inputHeightAnimation = css`
  animation: ${animateInputHeight()} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.1s forwards;
`;
const InputContainer = styled.span`
  position: relative;
  display: ${props => (props.isNavigationTapped ? 'inline-block' : 'none')};
  width: 100%;
  height: 0px;
  margin-top: 0px;
  ${props => props.isNavigationTapped && inputHeightAnimation};
`;
const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: #132747;
  border: 0;
  padding: 0 30px;
  color: #fff;
`;

const inputIconAnimation = css`
  animation: ${animateInputIconOpacity()} 0.3s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
`;
const SearchIconInput = styled.input`
  position: absolute;
  display: inline-block;
  width: 15px;
  height: 15px;
  top: 7px;
  left: 7px;
  opacity: 0;
  ${props => props.isNavigationTapped && inputIconAnimation};
`;

const Header = ({
  handleNavigationTap,
  isNavigationTapped,
  clickedNavigationItem
}) => {
  return (
    <Wrapper
      onClick={handleNavigationTap}
      isNavigationTapped={isNavigationTapped}
    >
      <section className="heading">
        <h1>ETON</h1>
      </section>
      <section className="total">
        <ShoppingBagIcon isNavigationTapped={isNavigationTapped} /> 0 SEK
      </section>
      <Divider />
      <InputContainer isNavigationTapped={isNavigationTapped}>
        <SearchIconInput
          id="search-icon-input"
          isNavigationTapped={isNavigationTapped}
          type="image"
          src={SearchIcon}
        />
        <SearchInput id="search-input" type="text" />
      </InputContainer>
      <Navigation
        clickedNavigationItem={clickedNavigationItem}
        handleNavigationTap={handleNavigationTap}
        isNavigationTapped={isNavigationTapped}
      />
    </Wrapper>
  );
};

export default Header;
