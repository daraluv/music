import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Demo from './components/demo';
import './index.css';

console.log(Demo)

ReactDOM.render(
  <Demo />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
