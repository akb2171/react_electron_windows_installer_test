import React, { Component } from "react";
import { HashRouter , Route } from 'react-router-dom';
import HomePage from "./components/HomePageComponent";

class Router extends Component {
    
    render(){
        return (
            <HashRouter>
                <div style={{height:"100%"}}>
                    <Route exact path="/" component={ HomePage }/>
                </div>
            </HashRouter>
        )
    }
}

export default Router;