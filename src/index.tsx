import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from './components/app/App';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<App />, root);
