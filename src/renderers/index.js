import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import '../styles/index.css';


ReactDOM.hydrate(<App title="The GitHub Cards App" />, document.getElementById('root'));