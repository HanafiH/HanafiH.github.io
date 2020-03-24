import React,{Component} from 'react';
import Home from '../../app/Home';
import About from '../component/About';
import Portfolio from '../component/Portfolio';
import Contact from '../component/Contact';

import {Switch,Route} from 'react-router-dom';

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={About}></Route>
                <Route path="/portfolio" component={Portfolio}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
        )
    }
}

export default Router;