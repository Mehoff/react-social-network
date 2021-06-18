import React from 'react'
//import Navbar from '../navbar/navbar.js'
import Login from '../login/login.js'
// import UsersList from '../usersList/usersList.js'
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
                    



                    {/* <Route exact path="/"/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/usersList" render={routeProps => (
                        <UsersList data={UsersData} match={routeProps.match}/>
                    )}></Route>
                    <Route exact path="/profile" component={Profile}/> */}
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
            </div>
        )
    }
}

export default App;

