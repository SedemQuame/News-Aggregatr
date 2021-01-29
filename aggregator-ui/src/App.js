import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/index.component';
import Post from './Pages/Post/index.component';

function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/post" component={Post}/>
            </Switch>
        </div>
    );
}

export default App;
