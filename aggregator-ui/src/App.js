import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/index.component';
import Post from './Pages/Post/index.component';
// import Category from './Pages/Category/index.component';
import Entertainment from './Component/Stories/entertainment.component';
import Sports from './Component/Stories/sports.component';
import LifeStyle from './Component/Stories/lifestyle.component';
import Viral from './Component/Stories/viral.component';
import Business from './Component/Stories/business.component';
import Politics from './Component/Stories/politics.component';


function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/post" component={Post}/>
                <Route exact path="/entertainment" component={Entertainment}/>
                <Route exact path="/sports" component={Sports}/>
                <Route exact path="/lifestyle" component={LifeStyle}/>
                <Route exact path="/viral" component={Viral}/>
                <Route exact path="/business" component={Business}/>
                <Route exact path="/politics" component={Politics}/>
            </Switch>
        </div>
    );
}

export default App;
