require('@babel/register')({ presets: ['@babel/preset-env'] });  

import React from 'react';
import { create } from 'react-test-renderer';
import Login from './Login';

const tree = create(<Login/>)

const navigation = {navigate:jest.fn()}

test('navigate to Sign Up Screen', () =>{
    const button = tree.root.findByProps({testID:'signup'}).props;
    button.onPress();
    expect(navigation.navigate).toBeCalledWith('Sign Up');
})
