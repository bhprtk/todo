import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';
import firebase from 'firebase';
import types from './actions/types';

import './services/FirebaseInit.js';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-slick/dist/react-slick.min.js';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/slick-carousel/slick/slick.min.js';

const store = configureStore();

firebase
	.database()
	.ref()
	.on('value', snapshot => {
		store.dispatch({
			type: types.ON_CHANGE_TODOS,
			todos: snapshot.val()
		})
	})

const App = () => <Main />

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('react')
);
