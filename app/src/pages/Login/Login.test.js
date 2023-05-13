/*import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import renderer from 'react-test-renderer';

import Login from './Login';
import SignUp from '../Signup';

const Stack = createNativeStackNavigator();

const mockNavigation = {
  navigate: jest.fn(),
  setOptions: jest.fn(),
};

test('navigates to details screen when button is pressed', () => {
  const tree = renderer.create(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>,
    {
      // Pass the mock navigation object to the components being tested
      createNodeMock: () => mockNavigation,
    },
  );

  // Find the button and simulate a press
  const button = tree.root.findByProps({ testID: 'SignUpButton' });
  button.props.onPress();

  // Check that the navigate function was called with the correct arguments
  expect(mockNavigation.navigate).toHaveBeenCalledWith('Sign Up', { itemId: 42 });
});
*/