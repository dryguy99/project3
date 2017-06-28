import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes'
// import App from './App';
// import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(routes, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
