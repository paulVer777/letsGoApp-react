import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Events from './Components/Concerts'
import Nav from './Components/Nav'
import Details from './Components/Details'
import AddConcert from './Components/AddConcert'

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>

                        <Nav/>

                        <Route exact path={'/'} component={Events}/>
                        <Route path={'/details'} component={Details}/>
                        <Route path={'/addConcert'} component={AddConcert}/>


                    </div>
                </Router>


            </div>
        )
    }
}

export default App;
