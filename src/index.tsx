import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';

ReactDOM.render(
  <Home />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
