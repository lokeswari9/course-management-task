import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import ConfigureStore from './Store/ConfigureStore';
import {Provider} from 'react-redux';

const store = ConfigureStore();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


//ReactDOM.render(<MyComponent />, document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
