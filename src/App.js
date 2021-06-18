import React from 'react'
import User from './userCard/user'

import user from './users.json'
import './app.css'

class App extends React.Component{ 
    render(){
        return (

            <div>
                <h1>Trinder</h1>
                <User data = {user}/>
            </div>
        )
    }
}

export default App;

