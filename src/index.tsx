 import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import ConnectedApp from './connected-containers/ConnectedApp';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);