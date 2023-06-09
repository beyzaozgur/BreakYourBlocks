import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TestInformation from '../TestInformation';

jest.mock('../../../../../firebase.js', () => jest.fn());
jest.mock('firebase/auth', () => jest.fn());

describe('TestInformation', () => {
  it('calls navigation.navigate when Start button is pressed', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const routeMock = {
      params: {
        testContent: 'Test Content',
        duration: 60,
        sound: 'Sound',
        key: 'Key',
        testNo: 1,
      },
    };

    const { getByText } = render(<TestInformation route={routeMock} navigation={navigationMock} />);
    const startButton = getByText('Start');

    fireEvent.press(startButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('TestsScreen', {
      testContent: 'Test Content',
      duration: 60,
      sound: 'Sound',
      key: 'Key',
      testNo: 1,
    });
  });
});