import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reader from "./StoryReader/StoryReader.Component";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>

                <Route exact path="/reader">
                    <Reader/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
