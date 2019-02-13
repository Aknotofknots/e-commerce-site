import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  position: relative;
  top: 85px;
  width: 100%;
  height: 100%;
  z-index: -2;
`;
const LandingCardContainer = styled.div`
  width: 100%;
  height: 80%;

  h3,
  h4,
  h5 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  .image-caption {
    font-size: 1.8rem;
    font-family: Roboto;
    margin-top: 35px;
    margin-bottom: 30px;
    text-align: center;
    letter-spacing: 1px;
  }

  .descriptive-text {
    font-size: 1.4rem;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 30px;
  }
`;
const OnePictureCardContainer = styled(LandingCardContainer)`
  padding: 0 20px;
  height: 45%;

  .image-caption {
    font-size: 1.8rem;
    font-family: Roboto;
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
  padding-right: 0;
  height: 50%;

  .image-caption {
    font-size: 1.8rem;
    font-family: Roboto;
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
const ImageContainer = styled.figure`
  width: 100%;
  height: 55%;
  margin: 0;
`;
const Image = styled.div`
  height: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
`;
const OnePictureImageContainer = styled(ImageContainer)`
  height: 70%;
`;
const TwoPictureImageContainer = styled(ImageContainer)`
  display: inline-block;
  height: 70%;
  width: 50%;
  padding-right: 20px;
`;

const Button = styled.button`
  display: block;
  width: 50%;
  height: 40px;
  background-color: #1a3459;
  margin: 0 auto;
  border: 0;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
`;

export default class Content extends Component {
  state = {
    textStub: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit,  
     nisi ut aliquip ex ea commodo consequat.
      Duis aute awdhiu awuiu hawiuhdu `
  };

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <LandingCardContainer>
          <ImageContainer>
            <Image url={'https://via.placeholder.com/300x300.png'} />
          </ImageContainer>
          <figcaption className="image-caption">
            <h3>Spring / Summmer 19</h3>
          </figcaption>
          <p className="descriptive-text">{this.state.textStub}</p>
          <Button>EXPLORE COLLECTION</Button>
        </LandingCardContainer>
        <OnePictureCardContainer>
          <OnePictureImageContainer>
            <Image url={'https://via.placeholder.com/200x200.png'} />
          </OnePictureImageContainer>
          <figcaption className="image-caption">
            <h4>The Essentials</h4>
          </figcaption>
          <p className="descriptive-text">
            {this.state.textStub.substring(1, 40)}
          </p>
        </OnePictureCardContainer>
        <OnePictureCardContainer>
          <OnePictureImageContainer>
            <Image url={'https://via.placeholder.com/200x200.png'} />
          </OnePictureImageContainer>
          <figcaption className="image-caption">
            <h4>The Essentials</h4>
          </figcaption>
          <p className="descriptive-text">
            {this.state.textStub.substring(1, 40)}
          </p>
        </OnePictureCardContainer>
        <OnePictureCardContainer>
          <OnePictureImageContainer>
            <Image url={'https://via.placeholder.com/200x200.png'} />
          </OnePictureImageContainer>
          <figcaption className="image-caption">
            <h4>The Essentials</h4>
          </figcaption>
          <p className="descriptive-text">
            {this.state.textStub.substring(1, 40)}
          </p>
        </OnePictureCardContainer>
        <TwoPictureCardContainer>
          <TwoPictureImageContainer>
            <Image url={'https://via.placeholder.com/200x200.png'} />
            <figcaption className="image-caption">
              <h5>The Essentials</h5>
            </figcaption>
            <p className="descriptive-text">
              {this.state.textStub.substring(1, 40)}
            </p>
          </TwoPictureImageContainer>
          <TwoPictureImageContainer>
            <Image url={'https://via.placeholder.com/200x200.png'} />
            <figcaption className="image-caption">
              <h5>The Essentials</h5>
            </figcaption>
            <p className="descriptive-text">
              {this.state.textStub.substring(1, 40)}
            </p>
          </TwoPictureImageContainer>
        </TwoPictureCardContainer>
        {children}
      </Wrapper>
    );
  }
}
