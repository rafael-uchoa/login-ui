import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Icon from './assets/icon.png';

// Login App
export default function App() {
  return (
    <>
      <Banner source={Icon} />
      <LoginContainer>
        <Input placeholder="Your Email" />
        <Input placeholder="Password" />
        <LoginButton>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
        <TouchableOpacity>
          <BlueText>Forgot Password?</BlueText>
        </TouchableOpacity>
      </LoginContainer>
      <SignUpContainer>
        <Text>Don't have an account yet?</Text>
        <SignUp>
          <BlueText>Sign Up</BlueText>
        </SignUp>
      </SignUpContainer>
    </>
  );
}

// Styles
const Banner = styled.Image`
  width: 100%;
  height: 270px;
  margin-bottom: 50px;
`;

const LoginContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-right: 50px;
  padding-left: 50px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
`;

const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: #6c63ff;
  border-radius: 5px;
`;

const LoginButtonText = styled.Text`
  color: white;
  font-size: 18px;
  text-transform: uppercase;
`;

const BlueText = styled.Text`
  color: #6c63ff;
  font-size: 15px;
  font-weight: 700;
`;

const SignUpContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SignUp = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
