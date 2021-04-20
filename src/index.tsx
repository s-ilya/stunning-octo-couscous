import * as React from 'react';
import * as ReactDom from 'react-dom';

import Component from './component/component';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<Component />, root);
