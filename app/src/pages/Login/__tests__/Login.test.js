import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../Login';

jest.mock('../../../../firebase.js', () => jest.fn());
jest.mock('firebase/auth', () => jest.fn());

describe('Login', () => {
  it('renders login page correctly', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByPlaceholderText, getByText, queryByTestId } = render(<Login navigation={navigationMock} />);
    const mailInput = getByPlaceholderText('Mail');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
    const signUpButton = queryByTestId('signUpButton');

    // Assert that all required elements are rendered
    expect(mailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(loginButton).toBeDefined();
    expect(signUpButton).toBeDefined();
  });

  it('calls navigation.navigate when Sign Up button is pressed', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<Login navigation={navigationMock} />);
    const signUpButton = getByText('Sign Up');

    fireEvent.press(signUpButton);

    // Assert that navigation.navigate is called with the expected route name
    expect(navigationMock.navigate).toHaveBeenCalledWith('Sign Up');
  });

});
