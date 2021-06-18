import React from 'react'
import Login from '../login/login.js'
import NotFound from '../NotFound.js'
import Profile from '../profile/profile.js'

import {BrowserRouter, Route, Switch} from 'react-router-dom'


import './app.css'


class App extends React.Component{

    state = {
        loggedIn: false,
        user: undefined
    }
    
    updateLogin = (user) => {
        this.setState({user: user})
    }


    render(){
        return (
            <div>
            <BrowserRouter>
                <Switch>
                    {this.state.user ? <Profile user={this.state.user} updateLogin={this.updateLogin}/> : <Login updateLogin={this.updateLogin} />}
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
            </div>
        )
    }
}

export default App;

