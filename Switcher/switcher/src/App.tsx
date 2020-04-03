
import React from 'react';

import Switcher from './components/Switcher';

const App = () =>
    <Switcher frequency={1000}>
        <h1>Component 1</h1>
        <h1>Component 2</h1>
        <h1>Component 3</h1>        
    </Switcher>

export default App;
