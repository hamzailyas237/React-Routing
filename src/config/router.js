import React,{Component} from 'react';
import Home from '../Pages/home';
import About from '../Pages/about';
import {BrowserRouter as Router,Route,} from "react-router-dom";

class AppRouter extends Component {
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route e path="/about" component={About} />
            </Router>
        )
    }
}
export default AppRouter;