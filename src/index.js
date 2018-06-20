import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Reducer from './Reducers/index';
import { Provider } from 'react-redux';
import AppRouter from './router';

import { createStore } from 'redux';

const initialState = {
	name: '',
	password : '',
	validation : false,
	validationMessage : ''
};

const store = createStore(
    Reducer,
    initialState
  );

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
