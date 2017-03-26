console.log('in index')
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';

import './services/FirebaseInit.js';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const App = () => <Main />

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('react')
);
