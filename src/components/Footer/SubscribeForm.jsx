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
  display: inline-block;
  width: 60%;
  height: 100%;
  background: #fff;
  border: 2px solid #132747;
  padding-left: 10px;
`;
const SubscribeButton = styled.input`
  display: inline-block;
  width: 40%;
  height: 100%;
  background: #132747;
  border: 2px solid #132747;
  color: #fff;
  padding: 0;
`;

export default class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  state = {
    email: ''
  };

  handleUserInput = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    //make a fetch request here
    //run this.form.rest() lastly to make the field go blank
  };

  render() {
    const { email } = this.state.email;

    return (
      <form onSubmit={this.handleSubmitForm} style={{ marginBottom: '30px' }}>
        <InputContainer>
          <EmailInput
            onChange={this.handleUserInput}
            type="text"
            name="email"
            placeholder="Your email"
            value={email}
          />
          <SubscribeButton type="submit" value="SUBSCRIBE" />
        </InputContainer>
      </form>
    );
  }
}
