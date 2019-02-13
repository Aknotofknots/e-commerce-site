import React from 'react';
import styled from 'styled-components';
import UpperSectionLinks from './Links/UpperSectionLinks';
import LowerSectionLinks from './Links/LowerSectionLinks';
import SubscribeForm from './SubscribeForm';
import Facebook from './SocialMediaIcons/Facebook';
import Pinterest from './SocialMediaIcons/Pinterest';
import Twitter from './SocialMediaIcons/Twitter';
import Amex from './CreditCardIcons/Amex';
import MasterCard from './CreditCardIcons/MasterCard';
import Visa from './CreditCardIcons/Visa';
import PayPal from './CreditCardIcons/PayPal';
import Divider from '../shared/Divider';

const SocialMediaIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CreditCardIconsContainer = styled.div`
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const CopyRight = styled.small`
  display: block;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
`;

const Footer = () => {
  return (
    <footer>
      <UpperSectionLinks />
      <SubscribeForm />
      <SocialMediaIconContainer>
        <Facebook margin={10} />
        <Pinterest margin={10} />
        <Twitter margin={10} />
      </SocialMediaIconContainer>
      <Divider type="top" margin={30} />
      <LowerSectionLinks />
      <Divider type="bottom" margin={30} />

      <CreditCardIconsContainer>
        <Amex margin={5} />
        <MasterCard margin={5} />
        <Visa margin={5} />
        <PayPal margin={5} />
      </CreditCardIconsContainer>
      <CopyRight>&copy; 2015 Eton. All rights reserved</CopyRight>
    </footer>
  );
};

export default Footer;
