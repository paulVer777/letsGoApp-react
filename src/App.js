import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Events from './Components/Events'
import Nav from './Components/Nav'
import Details from './Components/Details'

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>

                        <Nav/>

                        <Route exact path={'/'} component={Events}/>
                        <Route path={'/details'} component={Details}/>


                    </div>
                </Router>


            </div>
        )
    }
}

export default App;
