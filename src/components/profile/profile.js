import React from 'react'
import './profile.css'
import Navbar from '../navbar/navbar.js'
import UsersList from '../usersList/usersList'

class Profile extends React.Component{
    
    

    getRandomWelcomeMessage(){
        const welcomeMessages = [
            `Приятного дня, ${this.props.user.Firstname} 😊`,
            `Здравствуй, ${this.props.user.Firstname} 😊`,
            `Здравия желаю, ${this.props.user.Firstname} 😊`,
            `Давно не виделись, ${this.props.user.Firstname} 😊`,
        ]

        return welcomeMessages[Math.floor(Math.random()*welcomeMessages.length)];
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <Navbar user={this.props.user} updateLogin={this.props.updateLogin}></Navbar>
                
                <div className="welcome-wrapper">
                    <span className="welcome-header">{this.getRandomWelcomeMessage()}</span>
                </div>

                <UsersList user={this.props.user}/>
                
                
            </div>
        )
    }
}
export default Profile;