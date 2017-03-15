import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => <Main />

ReactDOM.render(
	<App />,
	document.getElementById('react')
);
