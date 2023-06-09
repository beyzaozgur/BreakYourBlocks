import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Settings from '../Settings';

jest.mock('../../../../firebase.js', () => jest.fn());
jest.mock('firebase/auth', () => jest.fn());

describe('Settings', () => {
  it('calls navigation.navigate when Edit Profile button is pressed', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<Settings navigation={navigationMock} />);
    const editProfileButton = getByText('Edit Profile');

    fireEvent.press(editProfileButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('EditProfileScreen');
  });

  it('calls navigation.navigate when Change Password button is pressed', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<Settings navigation={navigationMock} />);
    const changePasswordButton = getByText('Change Password');

    fireEvent.press(changePasswordButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('EmailRequestScreen');
  });
  
});
