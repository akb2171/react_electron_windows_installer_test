import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './HomePageComponent.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
 
    render() {
        return (
            <div className="homepage-container">
                <div >
                    <button className="button-container" onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'ON' : 'OFF'}
                    </button>
                 </div>
            </div>
        );
    }
}

export default HomePage;