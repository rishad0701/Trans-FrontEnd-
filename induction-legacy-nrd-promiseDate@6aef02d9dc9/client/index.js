
import React from 'react';
import { render } from 'react-dom';
// import {ReactDOM,createRoot } from 'react-dom/client';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '@fontsource/roboto';
import 'react-notifications-component/dist/theme.css';

import history from '_client/history';
import store from '_client/store';

import Root from '_components/layout/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);


// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<Root history={history} store={store} />);


// ReactDOM.render(<App />, document.getElementById('root'));