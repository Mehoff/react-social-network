import React from 'react'
import './profile.css'
import Navbar from '../navbar/navbar.js'
import UsersList from '../usersList/usersList'

class Profile extends React.Component{
    
    render(){
        console.log(this.props)
        return (
            <div>
                <Navbar user={this.props.user} updateLogin={this.props.updateLogin}></Navbar>
                <UsersList user={this.props.user}/>
                
                {/* <h1>Добро пожаловать, {this.props.user.Firstname} {this.props.user.Secondname}</h1> */}

            </div>
        )
    }
}
export default Profile;