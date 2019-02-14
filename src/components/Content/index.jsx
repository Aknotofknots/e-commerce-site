import React, { Component } from 'react';
import styled from 'styled-components';
import LandingCardImage from './landing_card_image.jpg';
import Suit1 from './suit1.jpg';
import Suit2 from './suit2.jpg';
import Suit3 from './suit3.jpg';
import Shirt from './shirt.jpg';

const Main = styled.main`
  position: relative;
  top: 93px;
  width: 100%;
  height: 100%;
  z-index: -2;
`;
const LandingCardContainer = styled.div`
  width: 100%;
  height: 73%;
  margin-bottom: 30px;

  .image-caption {
    font-size: 1.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    letter-spacing: 1px;
  }

  .descriptive-text {
    font-family: Georgia, sans-serif;
    font-size: 1.4rem;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 30px;
  }
`;
const OnePictureCardContainer = styled(LandingCardContainer)`
  padding: 0 20px;
  height: 50%;
  margin-bottom: 0;

  .image-caption {
    font-size: 1.8rem;
    margin-top: 15px;
    margin-bottom: 5px;
    text-align: center;
    letter-spacing: 1px;
  }

  .descriptive-text {
    font-size: 1.4rem;
    text-align: center;
    padding: 0 20px;
  }
`;
const TwoPictureCardContainer = styled(OnePictureCardContainer)`
  padding: 0 20px;
  height: 50%;
  display: flex;

  figure:last-child {
    margin-right: 0;
  }

  .image-caption {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 5px;
    text-align: left;
    letter-spacing: 0;
  }

  .descriptive-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: normal;
    text-align: left;
    padding: 0;
  }
`;
const ImageContainer = styled.figure`
  width: 100%;
  height: 55%;
  margin: 0;
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
`;
const OnePictureImageContainer = styled(ImageContainer)`
  height: 70%;
`;
const TwoPictureImageContainer = styled(ImageContainer)`
  height: 70%;
  width: 50%;
  margin-bottom: 15px;
  margin-right: 10px;
`;

const Button = styled.button`
  display: block;
  width: 50%;
  height: 40px;
  background-color: #1a3459;
  margin: 0 auto;
  border: 0;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1px;

  &:hover {
    background-color: #cccccc;
  }
`;

class Content extends Component {
  state = {
    textStub: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,  
     nisi ut aliquip ex ea commodo consequat.
      Duis aute awdhiu awuiu hawiuhdu`,

    clothingData: {
      defaultCards: [
        {
          imgUrl: Suit1,
          heading: 'The Essentials',
          description: `Lorem ipsum dolor sit amet, 
          consectetur adipiscing`
        },
        {
          imgUrl: Suit2,
          heading: 'Closet nr 6',
          description: `Lorem ipsum dolor sit amet, 
          consectetur adipiscing`
        },
        {
          imgUrl: Suit3,
          heading: 'Closet nr 14',
          description: `Lorem ipsum dolor sit amet, 
          consectetur adipiscing`
        }
      ],

      doubleCards: [
        {
          clothes: [
            {
              imgUrl: Shirt,
              name: 'Solid Black Dress Shirt',
              type: 'SLIM FIT',
              price: '1295 SEK'
            },
            {
              imgUrl: Shirt,
              name: 'Blue Indigo Casual Shirt',
              type: 'SUPER SLIM FIT',
              price: '1295 SEK'
            }
          ]
        },
        {
          clothes: [
            {
              imgUrl: Shirt,
              name: 'John ClarkPrint Shirt',
              type: 'SLIM FIT',
              price: '1295 SEK'
            },
            {
              imgUrl: Shirt,
              name: 'Red Micro Dots Shirt',
              type: 'CLASSIC FIT',
              price: '1295 SEK'
            }
          ]
        },
        {
          clothes: [
            {
              imgUrl: Shirt,
              name: 'Navy Cat Print Shirt',
              type: 'SLIM FIT',
              price: '1295 SEK'
            },
            {
              imgUrl: Shirt,
              name: 'Light Blue Twill Shirt',
              type: 'CONTEMPORARY  FIT',
              price: '1295 SEK'
            }
          ]
        }
      ]
    }
  };

  renderDefaultCards(card) {
    return (
      <OnePictureCardContainer key={card.heading}>
        <OnePictureImageContainer>
          <Image url={card.imgUrl} />
        </OnePictureImageContainer>
        <figcaption className="image-caption">
          <h4>{card.heading}</h4>
        </figcaption>
        <p className="descriptive-text">{card.description}</p>
      </OnePictureCardContainer>
    );
  }

  renderDoubleCards(card, index) {
    return (
      <TwoPictureCardContainer key={Math.random()}>
        {card.clothes.map(clothing => (
          <TwoPictureImageContainer key={clothing.name}>
            <Image url={clothing.imgUrl} />
            <figcaption className="image-caption">
              <h5>{clothing.name}</h5>
            </figcaption>
            <p className="descriptive-text">
              {clothing.type + ' / ' + clothing.price}
            </p>
          </TwoPictureImageContainer>
        ))}
      </TwoPictureCardContainer>
    );
  }

  render() {
    const { children } = this.props;
    const { clothingData } = this.state;
    const { defaultCards, doubleCards } = clothingData;

    return (
      <Main>
        <LandingCardContainer>
          <ImageContainer>
            <Image url={LandingCardImage} />
          </ImageContainer>
          <figcaption className="image-caption">
            <h3>Spring / Summmer 19</h3>
          </figcaption>
          <p className="descriptive-text">{this.state.textStub}</p>
          <Button type="button">
            <a href="#collection">EXPLORE COLLECTION</a>{' '}
          </Button>
        </LandingCardContainer>

        {defaultCards.map(this.renderDefaultCards)}
        {doubleCards.map(this.renderDoubleCards)}
        {children}
      </Main>
    );
  }
}

export default Content;
