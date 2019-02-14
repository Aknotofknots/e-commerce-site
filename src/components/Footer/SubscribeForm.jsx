import React, { Component } from 'react';
import styled from 'styled-components';

const InputContainer = styled.span`
  input {
    line-height: initial;
  }

  display: inline-block;
  width: 100%;
  height: 30px;
  padding: 0 20px;
`;
const EmailInput = styled.input`
  font-size: 1.2rem;
  font-weight: normal;
  font-style: italic;
  display: inline-block;
  width: 60%;
  height: 100%;
  background: #fff;
  border: 2px solid #132747;
  padding-left: 10px;
`;
const SubscribeButton = styled.input`
  font-size: 1.2rem;
  font-weight: 500;
  display: inline-block;
  width: 40%;
  height: 100%;
  background: #1a3459;
  border: 2px solid #1a3459;
  color: #fff;
  padding: 0;
  letter-spacing: 1px;
`;
class SubscribeForm extends Component {
  //This components is prepared for email submission

  state = {
    email: ''
  };

  subscribeForm = React.createRef();

  handleUserInput = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log('event', e);
    this.subscribeForm.current.reset();
  };

  render() {
    return (
      <form
        ref={this.subscribeForm}
        onSubmit={this.handleSubmitForm}
        style={{ marginBottom: '20px' }}
      >
        <InputContainer>
          <EmailInput
            onChange={this.handleUserInput}
            type="text"
            name="email"
            placeholder="Your email"
          />
          <SubscribeButton type="submit" value="SUBSCRIBE" />
        </InputContainer>
      </form>
    );
  }
}

export default SubscribeForm;
