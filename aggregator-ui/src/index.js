import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import Nav from "./Component/Nav/index.component";
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Nav/>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
