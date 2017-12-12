import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

import Counting from './testing/Counting';
import TestComponent from './testing/TestComponent';
import MyComponent from './testing/MyComponent';
import RanTest from './testing/RanTest';
import RanTest2 from './testing/RanTest2';
import App from './App';

const AvailableComponents = {
    Counting: Counting,
    MyComponent: MyComponent,
    TestComponent: TestComponent,
    RanTest: RanTest,
    RanTest2: RanTest2,
    App: App
};

// RENDER COMPONENTS
let reactElements = document.querySelectorAll('.react-component');

for (let i = 0; i < reactElements.length; i++) {
    let reactElement = reactElements[i];
    let reactComponentName = reactElement.getAttribute('component-name');

    // HTML nodes will only render when they have a class of 'react-component'
    // and an attributte with a value equal to the actual component name.
    // That will make it clear that it is React generated and will provide a reference to the actual component.
    // example: RanTest2 will be rendered on this node only: <div class='react-component' component-name='RanTest2'></div>
    if (reactComponentName && AvailableComponents[reactComponentName]) {
        ReactDOM.render(
            React.createElement(
                AvailableComponents[reactComponentName],
                reactElement.attributes
            ),
            reactElement
        );
    }
}

// registerServiceWorker();
