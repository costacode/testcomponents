import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Counting from '../testing/Counting';
import MyComponent from '../testing/MyComponent';

// storiesOf('Button', module)
//     .add('with text', () => (
//         <button onClick={action('clicked')}>Hello Button</button>
//     ))
//     .add('with some emoji', () => (
//         <button onClick={action('clicked')}>😀 😎 👍 💯</button>
//     ));

storiesOf('Counting', module).add('Counter', () => <Counting />);
storiesOf('MyComponent', module).add('Title', () => <MyComponent />);
